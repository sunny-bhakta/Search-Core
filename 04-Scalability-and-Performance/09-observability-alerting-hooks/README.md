# 09. Observability & Alerting Hooks

Plain-English version: add metrics + alerts so you can see latency, saturation, and errors before users complain, then follow a runbook.
It’s your dashboard and pager plan.

### History Snapshot
- Early teams watched only CPU/disk metrics and missed search-specific failures.
- Engines exposed stats APIs (cache hit, segment merges), enabling precise dashboards.
- Today, teams define SLOs, add trace links, and keep alert owners documented.

### Pros
- Alerts tell you what broke and what to do.
- Trend data feeds capacity planning and cost tweaks.
- Shared dashboards align product, infra, and support teams.

### Cons
- Too many metrics create noise; critical alerts get ignored.
- Instrumentation adds overhead if you sample poorly.
- Needs on-call owners to keep alerts relevant.

### Production Apps Using Strong Observability
- Hosted search vendors provide per-tenant dashboards for QPS, latency, and spend.
- News sites watch cache hit rates on “breaking news” fields to pre-scale.
- Enterprise search teams tag every alert with a Jira runbook link.

### Tiny Example
- **Input:** metrics snapshot = `latency_p95=210ms (budget 200)`, `error_rate=0.2% (budget 0.5%)`, `heap=65% (budget 75%)`.
- **Output steps:**
	1. Alert logic compares each metric to its budget and finds only latency is breaching.
	2. Pager fires to the on-call with runbook step “scale cache nodes or drop costly aggregations.”
	3. Ticket + dashboard annotation store the event so retrospectives know what happened.
