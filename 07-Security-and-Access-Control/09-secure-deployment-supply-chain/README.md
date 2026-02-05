# 09. Secure Deployment & Supply Chain

Overview: trust every artifact you ship by scanning dependencies, signing builds, and watching for drift.

### Description
- Pin versions, verify signatures, and scan images for CVEs.
- Use infrastructure-as-code with approvals to prevent manual tweaks.

### History Snapshot
- Copy/paste servers drifted rapidly and hid vulnerabilities.
- CI pipelines added linting, SCA scans, and signature verification.
- SBOMs and attestations now travel with every release.

### Pros
- Blocks compromised libraries from slipping into search clusters.
- Provides traceability from commit to running container.
- Simplifies patch rollouts via declarative configs.

### Cons
- Scans can produce noisy false positives.
- Signing infrastructure must be secured itself.
- Strict policies may slow emergency hotfixes.

### Production Apps
- Search teams run Trivy/Grype scans on every indexer image.
- IaC repos enforce two-person review before Terraform apply.
- Edge services verify container signatures at deploy time.

### Tiny Example
- **Input:** CI builds docker image `search-api:abc`, scan finds CVE.
- **Output steps:**
	1. Pipeline fails and posts link to vulnerable package.
	2. Engineer bumps dependency, rebuilds, scan passes.
	3. Signed image is promoted to staging with attestation file.
