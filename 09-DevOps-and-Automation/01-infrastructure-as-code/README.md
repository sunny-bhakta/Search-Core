# 01. Infrastructure as Code

Overview: describe every cluster, network, and secret in code so you can recreate it with a command.

### Description
- Use Terraform, Pulumi, or CloudFormation modules to define nodes, VPCs, security groups, and pipelines.
- Enforce pull requests, policy checks, and drift detection before changes land.

### History Snapshot
- Teams once clicked consoles manually, leading to snowflake environments.
- IaC templates standardized the setup, but reviews were optional.
- Policy-as-code and automated drift repair now keep prod and repos aligned.

### Pros
- Repeatable builds across dev/stage/prod.
- Easier peer review and auditing.
- Enables disaster recovery by reapplying code.

### Cons
- Learning curve for DSLs and state management.
- Bad templates can replicate mistakes everywhere.
- Requires secret handling to avoid leaks in code.

### Production Apps
- Hosted search vendors publish Terraform modules for customers to deploy sidecars.
- SaaS teams spin up preview clusters per pull request using IaC.
- Enterprises run nightly drift detectors to catch console-only edits.

### Tiny Example
- **Input:** request for a new staging cluster with 3 nodes.
- **Output steps:**
	1. Update IaC variable `node_count=3` in staging file.
	2. Run `terraform apply` to create nodes and security rules.
	3. CI records the change, reviewers approve, and the new cluster appears.
