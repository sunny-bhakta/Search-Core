# 10. Testing & Contract Validation

keep automated tests that prove every endpoint and SDK still matches the published schema.

### Description
- Write schema tests (OpenAPI, JSON Schema) plus integration runs against sandboxes.
- Block releases if responses drift from documented fields or if SDKs lag behind.

### History Snapshot
- Manual QA once clicked UI flows, missing API regressions.
- Contract tests in CI started catching breaking changes before deploy.
- Today, many teams run smoke tests against ephemeral clusters per pull request.

### Pros
- Prevents accidental breaking changes from shipping.
- Builds trust with partners relying on stable contracts.
- Captures performance baselines for each release.

### Cons
- Requires dedicated test data and sandboxes.
- Flaky tests slow down deployments when they fail randomly.
- Schema files must stay in sync with actual behavior.

### Production Apps
- Payments/search integrations run Newman/Postman suites on every PR.
- SDK repos publish nightly canary builds after contract validation passes.
- Platform teams gate production deploys on “green” load-test dashboards.

### Tiny Example
- **Input:** OpenAPI schema says `/search/products` returns `{ data: array, meta: object }`.
- **Output steps:**
	1. CI calls the endpoint with a sample query.
	2. Validator compares the JSON to the schema; mismatch fails the build.
	3. On success, pipeline tags the API image as release-ready and notifies SDK maintainers.
