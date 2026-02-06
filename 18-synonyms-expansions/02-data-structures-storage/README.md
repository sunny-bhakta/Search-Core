# 02. Data Structures & Storage

Overview: store synonyms in a format that is easy to version, diff, and deploy.

### Description
- Choose between inline config files, dedicated synonym APIs, or database tables.
- Keep version numbers and changelogs so rollbacks are simple.
- Provide tools to diff old vs. new lists before deployment.

### History Snapshot
- Synonyms once lived in single text files edited by hand.
- Source control made it easier to review changes and trigger builds.
- Managed services now expose REST or UI editors with staged rollouts.

### Pros
- Stronger governance with version history.
- Faster deployments because automation reads a consistent format.
- Easier collaboration via pull requests or UI review flows.

### Cons
- Multiple storage systems can drift if not synced.
- Schema upgrades require migration scripts.
- API-based stores need auth and uptime budgets.

### Production Apps
- Marketplaces store synonyms in Git and deploy via CI.
- Enterprise search syncs dictionaries from a managed terminology API.
- Media apps attach per-locale synonym files alongside translation bundles.

### Tiny Example
- **Input:** JSON file contains `[ { "term": "tv", "variant": "television" } ]`.
- **Output steps:**
	1. CI validates JSON schema.
	2. Diff tool shows added/removed entries.
	3. Deployment publishes version 12 to the search cluster.
