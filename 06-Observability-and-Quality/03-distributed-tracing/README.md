# 03. Distributed Tracing

give every request a trace ID and follow it through each service hop.

### Description
- Propagate `traceId` and `spanId` headers between API gateway, coordinators, and shards.
- Annotate spans with phase names (parse, fetch, rank) plus timings.

### History Snapshot
- Teams once guessed where time vanished by reading logs.
- Zipkin/Jaeger style tracing made call graphs obvious.
- Sampling got smarter: keep all errors, sample a slice of success.

### Pros
- Pinpoints bottlenecks within seconds.
- Helps teach new engineers how requests flow.
- Provides proof when a downstream dependency is slow.

### Cons
- More headers and span writes add small overhead.
- Tracing stores can become expensive at high QPS.
- Missing instrumentation on one hop breaks the full picture.

### Production Apps
- Gateways add `traceparent` headers to every request.
- Coordinators create child spans for each shard fan-out.
- Ranking services record custom tags like `model_version` for later analysis.

### Tiny Example
- **Input:** trace shows total latency 600 ms.
- **Output steps:**
	1. Inspect spans and see `fetch_shards` took 450 ms while `rank` took 80 ms.
	2. Drill into shard span to find `products-2` waiting on disk IO.
	3. Warm shard cache and confirm next trace shows `fetch_shards=150 ms`.
