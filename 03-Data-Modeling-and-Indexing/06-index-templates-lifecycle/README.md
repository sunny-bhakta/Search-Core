# 06. Index Templates & Lifecycle Policies

write the schema once, then let templates and lifecycle rules copy it to every new index and retire old data automatically.
It’s like baking cookies with one mold instead of shaping each one by hand.

### History Snapshot
- Early clusters created indexes manually, so mappings/settings drifted.
- Template APIs showed up, letting teams stamp out identical schemas on demand.
- Lifecycle managers (ILM/ISM) replaced cron jobs for rollover, warm/cold moves, and deletion.

### Pros

> **ILM (Index Lifecycle Management)** is the feature in Elasticsearch/OpenSearch that moves an index through stages (hot → warm → cold → delete) based on age or size triggers.

- Teams have to coordinate template version bumps and rollouts.

### Production Apps Using Templates & ILM
- E-commerce catalogs roll daily indexes (`products-v2026.02.04`) and swap aliases once checks pass.
- Logging stacks (ELK/OpenSearch) age hot data into warm/cold storage via ILM.
- SaaS vendors keep multi-tenant indexes in sync by breaking schemas into reusable component templates.

### Tiny Example
- **Input:** template for `products-v*` plus an ILM rule:
	1. Rollover if age ≥ 7 days or size ≥ 30 GB.
	2. Move rolled shards to warm storage.
	3. Delete shards 30 days after rollover.
- **Output flow:**
	1. Create `products-v3` from the template, point alias `products-active` to it.
	2. Traffic keeps using the alias while ILM watches size/age.
	3. When the rule fires, ILM auto-creates `products-v4`, flips the alias, moves `v3` shards to warm tier, and schedules deletion 30 days later.

## Quick Checklist
- Create reusable templates (or migrations) for new index generations.
- Define index naming conventions (`products-v1`, `products-v2`).
- Configure lifecycle rules: rollover thresholds, retention, snapshots.
- Use aliases to point apps at the active index and swap with zero downtime.
- Document blue/green or canary deployment steps for schema changes.

## Mini Exercise
1. Write a JSON template describing mappings/settings for `products-v1`.
2. Plan a rollover rule (e.g., 30GB or 7 days) and note the retention window.
3. Practice alias swapping by mapping `products-active` to a new version.
