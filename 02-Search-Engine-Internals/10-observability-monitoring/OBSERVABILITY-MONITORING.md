# Observability & Monitoring

- Observability is how you see what your search stack is doing in real time.
- Metrics show trends (latency, QPS), logs show individual events, traces connect hops.
- Monitoring layers alarms on top so you get paged before users feel pain.

## Tiny Example (Input → Output)

```
Raw signals:
	metric: search_latency_p95 = 180 ms
	log: "timeout from shard-2"
	trace: request → shard-2 → cache miss → retry

Pipeline steps:
1. Metrics scrapers pull latency counter → store in Prometheus
2. Logs ship to Elasticsearch/OpenSearch with shard labels
3. Tracing backend links spans together
4. Alert rule fires if latency > 200 ms for 5 minutes → Slack + PagerDuty

Result: on-call sees the alert with context (metric graph + culprit shard) and can remediate quickly.
erDuty, Opsgenie, Slack bots) for paging + audit history.
```
## Where Each Signal Lives
- **Metrics** → time-series databases (Prometheus, VictoriaMetrics, Datadog metrics) so you can aggregate and apply SLIs/SLOs.
- **Logs** → search-friendly stores (Elasticsearch/OpenSearch, Loki, Cloud Logging) for filtering, regex, and retention policies.
- **Traces** → tracing backends (Jaeger, Tempo, Cloud Trace) that preserve span relationships.
- **Alerts** → defined next to the signal source but fanned out through incident tools (Pag

## Use Cases
- Track SLAs (latency, error rate, saturation) for every cluster.
- Spot noisy shards/tenants before they impact everyone else.
- Debug query outliers with distributed tracing.
- Feed capacity planning with historical traffic + resource metrics.
- Provide audit trails for compliance incidents.

## History
- 2000s: Basic logs + Nagios-style checks for uptime.
- 2010s: Metrics-first movement (Prometheus, StatsD) and centralized logging.
- Late 2010s: “Observability” triad (metrics/logs/traces) popularized by Honeycomb, Lightstep.
- 2020s: Managed observability stacks with AI/ML noise reduction and auto-remediation hooks.

## Production Applications
- Elastic Stack / OpenSearch Dashboards for log analytics + alerting.
- Prometheus + Grafana + Alertmanager running SLO dashboards.
- Datadog/New Relic/SignalFx monitoring managed search services.
- OpenTelemetry instrumentation feeding traces into Jaeger/Tempo.

## Pros
- Faster incident response with solid visibility.
- Helps enforce SLAs and budget capacity before spikes hit.
- Unified metrics/logs/traces reduce finger-pointing across teams.

## Cons
- Instrumentation overhead can add latency/cost.
- Alert fatigue if rules aren’t tuned well.
- Data retention for logs/traces can get expensive at search scale.