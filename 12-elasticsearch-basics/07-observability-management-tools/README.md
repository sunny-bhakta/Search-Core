# 07. Observability & Management Tools

Overview: instrument clusters with Beats/Agent, dashboards, and automation so issues are caught early.

### Description
- Deploy Metricbeat/Filebeat or Elastic Agent to ship node stats, JVM metrics, and slow logs.
- Use Kibana Stack Monitoring, Dev Tools Console, and Watcher/Alerting rules for insights.
- Keep snapshot + restore scripts and runbooks versioned with infrastructure-as-code.

### History Snapshot
- Beats family emerged to replace heavy Logstash shippers.
- Stack Monitoring matured to include cross-cluster visibility and anomaly detection.
- Elastic Agent unified inputs, Fleet policies, and integrations in 7.13+.

### Pros
- Single-pane visibility into nodes, indices, and pipelines.
- Alerting automates pager duty instead of manual checks.
- Snapshots reduce RPO during incidents.

### Cons
- Telemetry agents add overhead to busy hosts.
- Alert noise can desensitize on-call teams if thresholds are weak.
- Snapshots consume storage and must be tested to avoid false confidence.

### Production Apps
- Managed services monitor customer clusters with Fleet-managed agents.
- Internal search SRE teams feed Stack Monitoring data into Grafana + PagerDuty.
- Backup jobs trigger nightly snapshots to S3 and verify restore on schedule.

### Tiny Example
1. Install Metricbeat with the Elasticsearch module enabled.
2. Point output to a monitoring cluster and confirm the `metricbeat-*` index is filling.
3. Configure a Kibana alert when heap usage exceeds 75% for 5 minutes.
