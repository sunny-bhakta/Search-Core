# 06. Online Experimentation & A/B Testing

split users into groups, try a change, and keep it only if metrics improve.

### Description
- Define guardrails (latency, errors) and goal metrics (clicks, orders).
- Route traffic with sticky assignment so users stay in one bucket.

### History Snapshot
- Teams once launched features to everyone and hoped for the best.
- Feature flags + experiment platforms made rollouts gradual.
- Automations now pause experiments when guardrails break.

### Pros
- Real user data proves whether a change helps.
- Reduces blast radius when experiments misbehave.
- Encourages data-driven product debates.

### Cons
- Needs event tracking plumbing and dashboards.
- Small sites may lack enough traffic for significance.
- Too many concurrent tests can interact in odd ways.

### Production Apps
- Retailers run price-sort tweaks on 10% of traffic first.
- News sites test new recommendation carousels per region.
- SaaS tools try ML reranking for certain tenants before global rollout.

### Tiny Example
- **Input:** bucket 50% of traffic to control, 50% to variant with new ranking.
- **Output steps:**
	1. Collect clicks for 3 days.
	2. See variant click-through = 12%, control = 10%.
	3. Guardrails (latency, errors) stay green, so you ship the variant to 100%.
