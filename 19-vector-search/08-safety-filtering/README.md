# 08. Safety & Filtering

Overview: apply policy filters and access controls before returning vector results so semantic matches stay safe and compliant.

### Description
- Run content safety models (toxicity, PII) on documents before embedding and again on query outputs if needed.
- Attach ACL metadata to each vector so search results respect tenant or role filters.
- Detect embedding outliers or adversarial inputs by monitoring vector norms and anomalies.

### History Snapshot
- Keyword filters once caught most policy violations.
- Vector search exposed new leak paths because semantic similarity can surface sensitive data.
- Compliance teams now require safety layers plus logging around vector queries.

### Pros
- Protects users and brand from unsafe or unauthorized content.
- Makes audits easier thanks to ACL metadata per vector.
- Outlier detection prevents poisoning attacks.

### Cons
- Safety models add latency and need frequent updates.
- ACL enforcement requires tight integration with auth systems.
- Logging vectors must respect privacy rules.

### Production Apps
- Healthcare assistants redact PHI before embedding summaries.
- Enterprise search enforces per-team ACLs across tenants.
- Social platforms run toxicity classifiers before surfacing semantic matches.

### Tiny Example
- **Input:** vector result tagged `team=legal`.
- **Output steps:**
	1. Check user roles; deny if not legal.
	2. Run safety flag; if flagged, drop result.
	3. Log decision with request ID for audits.
