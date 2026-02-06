# 10. Ecosystem Integrations

Overview: connect Elasticsearch with producers (Logstash, Beats, Kafka) and consumers (Kibana, custom apps, cloud services).

### Description
- Use Logstash pipelines, Beats agents, or Kafka connectors to feed data into clusters.
- Expose search APIs to Kibana, Canvas, Lens, or custom dashboards for visualization.
- Consider managed cloud integrations (Elastic Cloud, AWS OpenSearch Service) for turnkey ops.

### History Snapshot
- Beats provided lightweight shippers to replace custom scripts and heavy Logstash agents.
- Cross-cluster search/replication opened hybrid multi-cluster architectures.
- Elastic Cloud and serverless connectors now deliver one-click ingestion from SaaS apps.

### Pros
- Rich ecosystem reduces boilerplate when ingesting or visualizing data.
- Connectors handle retries, buffering, and schema evolution.
- Managed offerings offload operations.

### Cons
- Each integration adds another dependency to maintain.
- Version drift between producers and clusters can break pipelines.
- Managed services may limit custom plugins or advanced network setup.

### Production Apps
- Security platforms stream alerts via Kafka Connect into Elasticsearch.
- Marketing teams ingest CRM data with Elastic Cloud’s Salesforce connector.
- BI dashboards pull from Kibana Lens, Canvas, or custom APIs for exec reports.

### Tiny Example
1. Configure a Beats shipper to send logs to Logstash.
2. Logstash transforms fields and outputs to Elasticsearch.
3. Kibana Lens visualizes the indexed data within minutes.
