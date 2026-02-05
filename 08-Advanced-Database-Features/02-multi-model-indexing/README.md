# 02. Multi-Model Indexing

Overview: route each query to the best storage engine (relational, document, key-value, graph, vector) while keeping schemas in sync.

### Description
- Define aliases or views that join results from multiple backends.
- Keep shared IDs so cross-engine joins stay simple.

### History Snapshot
- Teams started with single-engine search and bolted on features later.
- Federated query planners emerged to hide complexity from clients.
- Today, unified metadata catalogs sync schema changes across engines.

### Pros
- Lets you pick the right tool for each data type.
- Unlocks combined experiences (e.g., graph boosts plus keyword search).
- Reduces vendor lock-in by spreading load across systems.

### Cons
- Schema drift between engines causes bugs.
- Routing mistakes can overload one backend.
- Observability is harder with multiple query paths.

### Production Apps
- Marketplaces hit Postgres for seller metadata, Elasticsearch for listings, and a vector DB for embeddings in one request.
- Customer support tools join ticket history (document DB) with entitlement data (relational).
- Social networks mix graph reach data with keyword search for suggestions.

### Tiny Example
- **Input:** query needs product text + inventory count.
- **Output steps:**
	1. Planner sends text search to Elasticsearch alias.
	2. Planner fetches inventory numbers from Postgres using shared SKU.
	3. Aggregator merges results and returns combined JSON.
