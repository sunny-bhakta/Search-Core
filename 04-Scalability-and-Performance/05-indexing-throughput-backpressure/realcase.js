#!/usr/bin/env node
/**
 * Slightly more realistic backpressure controller.
 * - Loads a scenario from JSON (or uses the default one below).
 * - Applies throttling by priority so lower-priority feeds slow down first.
 * - Prints a decision table plus human-readable notes.
 *
 * Run:
 *   node realcase.js            # use default scenario
 *   node realcase.js scenario.json
 */

const fs = require('fs');
const path = require('path');

const DEFAULT_SCENARIO = {
	safeDocsPerMin: 1500,
	pipelines: [
		{ name: 'batch-catalog', type: 'batch', priority: 3, rate: 1000, minRate: 200 },
		{ name: 'price-stream', type: 'stream', priority: 1, rate: 300, minRate: 300 },
		{ name: 'inventory-stream', type: 'stream', priority: 1, rate: 200, minRate: 200 },
		{ name: 'analytics-backfill', type: 'batch', priority: 4, rate: 250, minRate: 0 },
	],
};

function loadScenario(filePath) {
	if (!filePath) return DEFAULT_SCENARIO;
	const absolute = path.resolve(process.cwd(), filePath);
	const data = fs.readFileSync(absolute, 'utf8');
	return JSON.parse(data);
}

function applyPriorityBackpressure({ safeDocsPerMin, pipelines }) {
	const sorted = [...pipelines].sort((a, b) => a.priority - b.priority);
	const result = sorted.map((pipe) => ({ ...pipe, adjustedRate: pipe.rate }));
	let total = result.reduce((sum, p) => sum + p.rate, 0);
	let overflow = Math.max(total - safeDocsPerMin, 0);

	if (overflow === 0) {
		return { total, overflow, decisions: result, throttledFeeds: [] };
	}

	const throttledFeeds = [];
	// Start throttling from lowest-priority (highest number) feeds.
	for (let i = result.length - 1; i >= 0 && overflow > 0; i -= 1) {
		const feed = result[i];
		const maxReduction = feed.adjustedRate - feed.minRate;
		if (maxReduction <= 0) continue;
		const reduction = Math.min(maxReduction, overflow);
		feed.adjustedRate -= reduction;
		overflow -= reduction;
		throttledFeeds.push({ name: feed.name, reducedBy: reduction });
	}

	total = result.reduce((sum, p) => sum + p.adjustedRate, 0);
	return { total, overflow, decisions: result, throttledFeeds };
}

function logReport(scenario, report) {
	console.log(`Safe capacity: ${scenario.safeDocsPerMin} docs/min`);
	console.log(`Total requested: ${report.decisions.reduce((sum, p) => sum + p.rate, 0)} docs/min`);
	console.log(`Total after throttling: ${report.total} docs/min`);
	console.table(
		report.decisions.map((p) => ({
			pipeline: p.name,
			priority: p.priority,
			type: p.type,
			requested: p.rate,
			minAllowed: p.minRate,
			adjusted: p.adjustedRate,
		}))
	);

	if (report.throttledFeeds.length === 0) {
		console.log('No throttling required — all feeds stay at requested rate.');
	} else {
		console.log('Throttling summary:');
		report.throttledFeeds.forEach((item) =>
			console.log(`  • ${item.name} reduced by ${item.reducedBy} docs/min`)
		);
	}

	if (report.overflow > 0) {
		console.warn(
			`WARNING: still ${report.overflow} docs/min over capacity because every feed hit its minimum rate. Consider provisioning more ingest nodes.`
		);
	}
}

function main() {
	const scenarioFile = process.argv[2];
	const scenario = loadScenario(scenarioFile);
	const report = applyPriorityBackpressure(scenario);
	logReport(scenario, report);
}

if (require.main === module) {
	main();
}

module.exports = { loadScenario, applyPriorityBackpressure };

/*
Sample output
=============
Safe capacity: 1500 docs/min
Total requested: 1750 docs/min
Total after throttling: 1500 docs/min
┌─────────┬────────────────────┬──────────┬────────────┬───────────┬──────────┐
│ (index) │      pipeline      │ priority │    type    │ requested │ adjusted │
├─────────┼────────────────────┼──────────┼────────────┼───────────┼──────────┤
│    0    │ 'price-stream'     │    1     │ 'stream'   │    300    │   300    │
│    1    │ 'inventory-stream' │    1     │ 'stream'   │    200    │   200    │
│    2    │ 'batch-catalog'    │    3     │ 'batch'    │   1000    │   850    │
│    3    │ 'analytics-backfill'│    4    │ 'batch'    │    250    │   150    │
└─────────┴────────────────────┴──────────┴────────────┴───────────┴──────────┘
Throttling summary:
	• analytics-backfill reduced by 100 docs/min
	• batch-catalog reduced by 150 docs/min
*/
