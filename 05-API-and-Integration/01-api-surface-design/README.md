# 01. API Surface Design

Pick the simplest door (REST, GraphQL, gRPC) so clients know how to talk to search.

### Description
- Outline what endpoints exist, what verbs they accept, and how pagination/filtering works.
- Keep request/response shapes tiny and predictable so mobile, web, and partner apps all follow the same script.

### History Snapshot
- Early APIs were ad-hoc JSON dumps that broke whenever teams refactored fields.
- Versioned REST contracts, then GraphQL and gRPC, made changes safer and easier to document.
- Mature teams publish changelog emails and “what’s new” dashboards for consumers.

### Pros
- Shared schema means fewer custom SDKs and less copy/paste code.
- Versioning keeps old clients alive while new clients adopt features.
- Smaller payloads improve latency and data costs.

### Cons
- Every extra endpoint is another thing to maintain and secure.
- Large schema changes require migrations across many teams.
- If you expose low-level knobs, you must support them forever.

### Production Apps
- SaaS CRMs expose `/search/accounts` and `/search/contacts` with identical pagination rules.
- Consumer apps offer `/suggest?q=` endpoints for instant autocomplete.
- Internal tools provide `/analytics/searches` for dashboards built on the same schema.

### Tiny Example
- **Input:** feature request says “partner wants only top 5 results plus total hits.”
- **Output steps:**
	1. Add `limit`, `offset`, and `includeTotals` fields to the contract.
	2. Document them under version `v2` so older clients stay on `v1`.
	3. Update SDK snippet showing `GET /search/products?limit=5&includeTotals=true` and return sample JSON with `data` + `meta.total`.
