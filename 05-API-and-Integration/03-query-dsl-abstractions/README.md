# 03. Query DSL & Abstractions

Give developers a simple mini-language for search so they do not need to know every engine knob.

### Description
- Wrap common tasks (match, filter, sort, autocomplete) in a concise JSON/JSON5/GraphQL shape.
- Validate inputs early so typos or wildcards never reach the cluster.

### History Snapshot
- Teams started with raw Lucene syntax pasted directly into requests.
- Thoughtful DSLs like Elasticsearch Query DSL and Shopify’s Search API made requests safer and clearer.
- Today, teams ship SDK helpers that build DSL objects with TypeScript types.

### Pros
- Fewer production incidents caused by malformed queries.
- Easier to reuse snippets across services and languages.
- Enables guardrails (max terms, depth) in one place.

### Cons
- You must version the DSL when new features arrive.
- Hidden engine features may stay unused because they lack DSL support.
- Requires documentation and examples so consumers understand it.

### Production Apps
- Retail APIs expose a `search(query, filters, sort)` JSON body that compiles to engine-specific syntax.
- Media apps wrap personalization boosts in a helper like `boostByWatchHistory(userId)`.
- Analytics teams share notebook cells that emit the same DSL, ensuring reproducible results.

### Tiny Example
- **Input:** DSL payload `{ text: "laptop", filters: { brand: "Acer" }, limit: 3 }`.
- **Output steps:**
	1. Validate `limit <= 50` and `filters` keys against a whitelist.
	2. Translate to engine query: `match:laptop` + `term:brand:Acer` + `size:3`.
	3. Return result JSON plus the compiled query string for debugging.
