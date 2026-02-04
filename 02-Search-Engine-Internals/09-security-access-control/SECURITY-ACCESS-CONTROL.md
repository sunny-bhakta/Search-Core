# Security & Access Control
- Security layers decide who can see which documents, fields, or facets.
- Every query first passes through per-user allow lists before scoring kicks in.
- Good access control feels invisible: safe defaults with audit trails when someone overrides them.

## Tiny Example (Input → Output)

```
Docs:
	doc_1: { visibility: ['public'], fields: { balance: 100 } }
	doc_2: { visibility: ['admin'], fields: { balance: 500 } }

User roles:
	alice → ['public']
	bob   → ['public', 'admin']

Field masks:
	balance field visible only to 'admin'

Query: "balance"

Execution:
	alice → allowed docs = [doc_1], balance hidden (masked)
	bob   → allowed docs = [doc_1, doc_2], balances shown

Output:
	alice results: [{ docId: 'doc_1', balance: '***' }]
	bob results:   [{ docId: 'doc_1', balance: 100 }, { docId: 'doc_2', balance: 500 }]
```

Same query, different outputs based on document ACLs and field-level masks.

## Use Cases
- Multi-tenant SaaS apps where customers must never see each other’s data
- Customer support consoles masking PII fields unless “privileged” is granted
- Role-based content libraries (legal, HR, finance) with tiered visibility
- Regulated industries (health, government) requiring redaction + audit trails
- Fine-grained faceting where counts ignore docs the user can’t access

## History
- Early enterprise search relied on app-layer filters; mistakes leaked data
- 2000s ECM systems added ACL propagation into the index itself
- Modern search (Elasticsearch, Solr, OpenSearch) added filtered aliases, field-level security, document-level security (DLS/FLS)
- Zero-trust architectures push continuous authorization + signed tokens

## Production Applications
- Elasticsearch/OpenSearch DLS/FLS + filtered indices
- SharePoint/Confluence search marrying ACL tables with index pipelines
- Box/Dropbox content search with tenant- and file-level permissions
- Banking portals that redact balances until guards clear compliance checks

## Pros
- Prevents accidental data exfiltration via search autocomplete/results
- Allows one shared cluster serving many tenants safely
- Redaction/masking keeps PII visible only to trusted operators
- Auditable policy layers help satisfy SOC2, HIPAA, FedRAMP, etc.

## Cons
- ACL joins at query time increase latency + cache misses
- Index bloat: storing per-doc allow lists or role bitsets can explode size
- Policy sprawl makes debugging “why can’t I see this?” harder
- Rebuilding indexes when permissions change can be expensive