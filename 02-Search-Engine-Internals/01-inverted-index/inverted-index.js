// TODO 
// const fs = require('fs');
// const path = require('path');

// // Sample document shape expected by all helpers (mirrors "Model posting lists & stats"):
// // { docId: 'doc1', text: 'Search engines need indexes' }
// // Each posting we emit follows: { docId, tf } with df tracked per term.

// function normalizeText(text = '') {
// 	return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
// }

// function tokenize(text) {
// 	return normalizeText(text).split(/\s+/).filter(Boolean);
// }

// function tallyTermCounts(tokens) {
// 	return tokens.reduce((counts, token) => {
// 		counts[token] = (counts[token] || 0) + 1;
// 		return counts;
// 	}, {});
// }

// // Objective #1: Model posting lists, doc IDs, and term statistics (TF/DF) for a toy corpus.
// function buildInvertedIndexFromDocs(docs) {
// 	const index = {};
// 	docs.forEach(({ docId, text }) => {
// 		const termCounts = tallyTermCounts(tokenize(text));

// 		Object.entries(termCounts).forEach(([term, tf]) => {
// 			if (!index[term]) {
// 				index[term] = { df: 0, postings: [] };
// 			}
// 			index[term].df += 1;
// 			index[term].postings.push({ docId, tf });
// 		});
// 	});
// 	return index;
// }

// // Objective #2: Build a filesystem indexer that ingests every .txt file in a directory.
// function buildInvertedIndexFromDir(dirPath) {
// 	const docs = fs
// 		.readdirSync(dirPath, { withFileTypes: true })
// 		.filter(entry => entry.isFile() && entry.name.endsWith('.txt'))
// 		.map(entry => ({
// 			docId: path.parse(entry.name).name,
// 			text: fs.readFileSync(path.join(dirPath, entry.name), 'utf8')
// 		}));
// 	return { index: buildInvertedIndexFromDocs(docs), docs };
// }

// function printPostingList(term, index) {
// 	if (!index[term]) {
// 		console.log(`No postings for term "${term}"`);
// 		return;
// 	}
// 	console.log(`Posting list for "${term}" (df=${index[term].df}):`);
// 	index[term].postings.forEach(posting => {
// 		console.log(`  -> doc=${posting.docId}, tf=${posting.tf}`);
// 	});
// }

// // Objective #3a: Append-only strategy -> write a new segment for every update.
// function appendOnlyUpdate(segments, doc) {
// 	const newSegment = buildInvertedIndexFromDocs([doc]);
// 	return [...segments, newSegment];
// }

// // Helper: merge append-only segments to simulate background compaction.
// function mergeSegments(segments) {
// 	return segments.reduce((merged, segment) => {
// 		Object.entries(segment).forEach(([term, data]) => {
// 			if (!merged[term]) {
// 				merged[term] = { df: 0, postings: [] };
// 			}
// 			merged[term].df += data.df;
// 			merged[term].postings.push(...data.postings);
// 		});
// 		return merged;
// 	}, {});
// }

// // Objective #3b: In-place updates -> rewrite posting lists for the touched document.
// function inPlaceUpdate(index, doc) {
// 	const termCounts = tallyTermCounts(tokenize(doc.text));

// 	// Remove existing postings for this doc.
// 	Object.keys(index).forEach(term => {
// 		const filtered = index[term].postings.filter(p => p.docId !== doc.docId);
// 		if (filtered.length === 0) {
// 			delete index[term];
// 		} else {
// 			index[term].postings = filtered;
// 			index[term].df = filtered.length;
// 		}
// 	});

// 	Object.entries(termCounts).forEach(([term, tf]) => {
// 		if (!index[term]) {
// 			index[term] = { df: 0, postings: [] };
// 		}
// 		index[term].df += 1;
// 		index[term].postings.push({ docId: doc.docId, tf });
// 	});

// 	return index;
// }

// // Basic example: invoke directly (node inverted-index.js) to walk through each objective.
// // 1) Build base index from fixtures (objectives #1 & #2).
// // 2) Append-only update with merge.
// // 3) In-place update to contrast strategies.
// function runDemo({ fixturesDir = path.join(__dirname, 'fixtures'), sampleTerm = 'index' } = {}) {
// 	const { index, docs } = buildInvertedIndexFromDir(fixturesDir);

// 	console.log('--- Base Index Stats ---');
// 	console.log(`Docs ingested: ${docs.length}`);
// 	console.log(`Unique terms: ${Object.keys(index).length}`);
// 	printPostingList(sampleTerm, index);

// 	console.log('\n--- Append-only Segment Update ---');
// 	const segments = [index];
// 	const newDoc = { docId: 'doc4', text: 'Search index segments support fast appends.' };
// 	const updatedSegments = appendOnlyUpdate(segments, newDoc);
// 	const merged = mergeSegments(updatedSegments);
// 	printPostingList('search', merged);

// 	console.log('\n--- In-place Update ---');
// 	const cloned = JSON.parse(JSON.stringify(index));
// 	inPlaceUpdate(cloned, { docId: 'doc1', text: 'Search systems evolve rapidly with better indexing.' });
// 	printPostingList('search', cloned);
// }

// if (require.main === module) {
// 	runDemo();
// }

// module.exports = {
// 	normalizeText,
// 	tokenize,
// 	tallyTermCounts,
// 	buildInvertedIndexFromDocs,
// 	buildInvertedIndexFromDir,
// 	appendOnlyUpdate,
// 	mergeSegments,
// 	inPlaceUpdate,
// 	runDemo,
// 	printPostingList
// };
