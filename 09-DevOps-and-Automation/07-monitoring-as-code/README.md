# 07. Monitoring as Code

Overview: write dashboards, alerts, and SLOs as files in Git so every environment looks the same.

### Description
- Define metrics, alert thresholds, and routing rules in JSON/YAML.
- Review and test changes just like code before pushing to prod.

### History Snapshot
- Ops once clicked dashboards together manually per region.
- Terraform/Grafana APIs enabled version-controlled monitoring.
- Testing frameworks now simulate alerts in staging before enabling.

### Pros
- Easy to reproduce dashboards across clusters.
- Code review catches mistakes before noisy alerts.
- Rollbacks are as simple as reverting a commit.

### Cons
- Requires discipline to keep files updated with tribal tweaks.
- Complex templates can be hard to read.
- Testing alert logic needs tooling support.

### Production Apps
- Search teams manage Grafana JSON dashboards via GitOps.
- Alertmanager routes are defined in code with Slack/PagerDuty hooks.
- SLO configs live next to service code so owners update both together.

### Tiny Example
- **Input:** need latency alert when p95 > 300 ms for 5 minutes.
- **Output steps:**
	1. Add YAML block to repo with metric, threshold, duration, and contact.
	2. CI validates syntax and deploys to staging alertmanager.
	3. After verification, merge applies rule to prod automatically.
