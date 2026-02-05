# Data Modeling & Indexing

Data modeling is the process of defining how your data is structured, what entities exist, and how they relate to each other. It helps you decide what information to store, how to organize it, and how different pieces connect.

Indexing is about creating structures that make searching and retrieving data fast and efficient. It involves choosing which fields to index, how to break up and analyze text, and how to optimize for your most common queries.

Together, data modeling and indexing ensure your search system is accurate, fast, and easy to maintain.

## Module Cheat Sheet (Plain Language)
| # | Topic | What it means in simple terms | Deep dive |
|---|-------|------------------------------|-----------|
| 1 | Domain & Entity Modeling | Name the main “things” (products, reviews, tickets) and the fields that describe them. | [README](01-domain-entity-modeling/README.md) |
| 2 | Field Schema & Analyzers | Decide how each field is stored, tokenized, and used (search, filter, sort). | [README](02-field-schema-analyzers/README.md) |
| 3 | Denormalization & Derived Fields | Pre-copy lookup data and computed scores into each document so queries stay fast. | [README](03-denormalization-derived-fields/README.md) |
| 4 | Identity, Versioning & Deduplication | Keep IDs stable, reject stale writes, and block duplicate docs. | [README](04-identity-versioning-deduplication/README.md) |
| 5 | Multi-Locale & Multi-Tenant | Serve multiple languages/tenants safely using metadata, filters, and routing. | [README](05-multi-locale-multi-tenant/README.md) |
| 6 | Index Templates & Lifecycle | Stamp out identical schemas and automate rollover/retention with ILM. | [README](06-index-templates-lifecycle/README.md) |
| 7 | Write Patterns & Update Paths | Choose between batch, streaming, or append-only ingestion plus DLQs. | [README](07-write-patterns-update-paths/README.md) |
| 8 | Validation & Quality Gates | Run analyzers/tests before indexing so bad docs never land. | [README](08-validation-testing-quality/README.md) |
| 9 | Observability & Cost Guardrails | Watch metrics/costs and trigger runbooks before things break. | [README](09-observability-cost-guardrails/README.md) |
| 10 | Compliance & Governance | Track sensitive fields, approvals, and deletions for audits. | [README](10-compliance-governance/README.md) |

## 1. Domain & Entity Modeling
- List the main “things” you store (products, articles, tickets) and how they connect.
- Mark which fields are must-have vs. nice-to-have and where the data comes from.
- Choose between one big index with a `type` field or several smaller indexes.

## 2. Field Schema & Analyzers
- For every field, decide how text gets broken up (keyword, standard, ngram, language-specific).
- Be deliberate about flags like `index`, `store`, `doc_values`, and `norms`—they affect speed and storage.
- Write down which fields are used for search scoring, filters, facets, or highlights.

## 3. Denormalization & Derived Fields
- Spot data that’s slow to join at query time and copy it into the document (category name, seller score, geo bucket).
- Plan the jobs that calculate extra fields like popularity or availability windows.
- Keep notes on where each derived field came from so you can rebuild it safely.

## 4. Identity, Versioning & Deduplication
- Pick an ID format (ULID, UUIDv7, natural key) and what to do if the same ID appears twice.
- Track `version` or `updated_at` so late events don’t overwrite fresh data.
- Normalize documents (trim whitespace, lowercase titles) to catch duplicates.

## 5. Multi-Locale & Multi-Tenant Strategies
- Choose how to support languages and tenants: separate indexes, language-aware analyzers, or localized fields.
- Store tenant info (org, region, privacy level) so filters and permissions work.
- Make sure routing rules keep each tenant’s data together without creating hotspots.

## 6. Index Templates & Lifecycle Policies
- Save reusable templates or migrations so new indexes start with the right schema.
- Configure rollover, deletion, and snapshot schedules that match how fresh the data needs to be.
- Use aliases or blue/green swaps so schema changes don’t cause downtime.

## 7. Write Patterns & Update Paths
- Decide when to run full reindexes vs. partial updates or append-only writes.
- Set batch sizes, retry rules, and where failed docs go (dead-letter queue).
- Document how changes reach caches, analytics jobs, and replicas.

## 8. Validation, Testing & Data Quality Gates
- Build simple tests that load sample docs and confirm the analyzers behave.
- Run checks for missing values, weird ranges, and cardinality spikes before indexing.
- Use shadow indexes or dry runs when trying a risky schema change.

## 9. Observability & Cost Guardrails
- Watch index size, segment compression, and cache hit rate so costs don’t surprise you.
- Flag “hot” fields that slow queries and tune them first.
- Set limits for storage, ingest speed, and reindex time windows.

## 10. Compliance & Governance
- Mark which fields carry sensitive data and decide whether to encrypt, mask, or drop them.
- Log who can read/write each field and make sure deletion rules (right to be forgotten) actually run.
- Keep a simple change log that ties schema updates to approvals or tickets.

### Suggested Next Steps
- Draft a one-page data contract for each entity using this checklist.
- Spin up a scratch index to try analyzer choices on real text.
- List any open questions and feed them into your shared roadmap.
