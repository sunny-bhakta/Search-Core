# 08. Benchmarking & Load Testing

Replay real-looking traffic in a test cluster so you know how search behaves before customers see it.
It’s a fire drill for performance.

### History Snapshot
- Early releases skipped load tests and waited for production outages to learn.
- Teams later captured sample requests and built replay tools (Gatling, k6, Locust).
- Mature orgs keep benchmark datasets and compare runs automatically with every release.

### Pros
- Catches performance regressions before users feel them.
- Builds confidence in scaling plans and tuning changes.
- Gives future engineers a repeatable scenario.

### Cons
- Requires maintaining synthetic datasets and scripts.
- Hard to mimic production traffic perfectly.
- Load tests can get expensive if you let them run too long.

### Production Apps Running Benchmarks
- Search API teams replay the top 100 queries nightly to watch for drift.
- E-commerce sites stress test checkout/autocomplete before big sales.
- Ops teams run mixed ingest + query tests to validate new hardware.

### Tiny Example
- **Input:** dataset = 10k real search queries, target = sustain 1,500 QPS with p95 < 250 ms.
- **Output steps:**
	1. Replay tool ramps traffic to 1,600 QPS while capturing latency stats.
	2. Result shows p95 = 230 ms (< 250 ms target), so the release is approved.
	3. Report (config + CSV) is saved in version control so the next run can compare against it.
