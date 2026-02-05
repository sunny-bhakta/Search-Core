# 05. Multi-Locale & Multi-Tenant Strategies

let many customers and languages share the same cluster while keeping their data separated and localized.

### History Snapshot
- First-gen setups ran one cluster per tenant/locale, which was pricey.
- Shared clusters took over, forcing teams to add routing keys, tenant filters, and locale-aware analyzers.
- Modern systems tag every doc/query with tenant + locale metadata and enforce policy in one place.

### Pros
- Lower infrastructure cost because everyone shares hardware.
- One upgrade helps every tenant at once.
- Easier monitoring and security since traffic flows through the same stack.

### Cons
- Loud tenants can hog resources unless you throttle them.
- A bad filter risks leaking data to the wrong customer.
- Locale-specific ranking tweaks are harder in a shared index.

### Production Apps Using These Patterns
- SaaS search providers (Algolia, Elastic Cloud) host tons of tenants with routing keys per customer.
- Help centers keep `title_en`, `title_fr`, etc., in one index and choose analyzers per locale.
- Collaboration suites (Notion, Confluence) tag every doc with tenant ID + ACLs to enforce isolation.

### Tiny Example
- **Input:**
	- Doc for tenant A / English: `{ id: 'prod-en', tenantId: 'tenant-a', locale: 'en', title: 'Trail Shoes' }`
	- Doc for tenant A / Spanish: `{ id: 'prod-es', tenantId: 'tenant-a', locale: 'es', title: 'Zapatillas de Trail' }`
- **Output:**
	- Both docs live in one index with `tenantId` + `locale` fields.
	- Queries filter with `tenantId:tenant-a AND locale:es`, so each user sees only their tenant + language.

## Quick Checklist
- Decide between separate indexes per locale/tenant or shared indexes with filters.
- Pick analyzers or field variants (`title_en`, `title_es`) for each language.
- Store tenant metadata (org, region, tier) on every document.
- Plan routing so each tenant’s data stays together but shards remain balanced.
- Verify access control so tenants can only search their own documents.

## Mini Exercise
1. Clone a sample document into two locales with localized fields.
2. Simulate routing rules by hashing tenant IDs and mapping them to shards.
3. Write a filter that enforces tenant isolation in every query.
