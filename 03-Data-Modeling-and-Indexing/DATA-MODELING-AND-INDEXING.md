# Data Modeling & Indexing

An opinionated checklist of the recurring conversations when shaping documents and the indexes that power them. Each topic below includes the core questions to answer plus a nudge for hands-on validation.

## 1. Domain & Entity Modeling
- Define the primary entities (products, articles, tickets, etc.) and how they relate.
- Capture required vs. optional fields, data types, and authoritative sources.
- Decide when to split entities into separate indexes vs. using a shared index with type fields.

## 2. Field Schema & Analyzers
- Pick per-field analyzer chains (keyword, standard, ngram, language-specific).
- Set `index`, `store`, `doc_values`, and `norms` flags intentionally.
- Document how each field participates in scoring, filtering, faceting, or highlighting.

## 3. Denormalization & Derived Fields
- Identify lookups that must be flattened (category names, seller score, geo tiles).
- Plan transform jobs to compute derived values (popularity, availability windows).
- Track provenance so rebuilt fields stay consistent with upstream sources.

## 4. Identity, Versioning & Deduplication
- Choose ID schemes (ULID, UUIDv7, natural keys) and collision policies.
- Store `version` / `updated_at` metadata to reconcile late or out-of-order events.
- Implement canonicalization rules for detecting near-duplicate documents.

## 5. Multi-Locale & Multi-Tenant Strategies
- Decide between per-locale indexes, per-field localization, or locale analyzers.
- Encode tenancy (org, region, privacy tier) for both filtering and access control.
- Validate that routing/sharding keeps tenant data collocated without hotspots.

## 6. Index Templates & Lifecycle Policies
- Maintain reusable templates or schema migrations for new index generations.
- Configure rollover, retention, and snapshot policies tied to data freshness.
- Plan alias swaps or blue/green deployments for zero-downtime schema changes.

## 7. Write Patterns & Update Paths
- Contrast full reindex, partial update, and append-only ingestion flows.
- Define batch sizes, retry semantics, and dead-letter handling for failed documents.
- Capture how updates propagate to caches, downstream analytics, and replicas.

## 8. Validation, Testing & Data Quality Gates
- Create contract tests that load fixture docs and assert analyzer output.
- Run cardinality, null-rate, and range checks before indexing.
- Add shadow indexes or dry-run modes for schema experiments.

## 9. Observability & Cost Guardrails
- Track index size, segment/columnstore compression, and cache hit rates.
- Monitor hot fields (high cardinality filters, frequent aggregations) for tuning.
- Set budgets for storage, ingestion throughput, and reindex windows.

## 10. Compliance & Governance
- Classify PII/PCI fields and enforce encryption, masking, or redaction.
- Audit which roles can read/write given fields and how deletions propagate (RTBF).
- Keep lineage docs that link schema versions to business approvals.

### Suggested Next Steps
- Draft a data contract per entity using the checklist above.
- Spin up a throwaway index to benchmark analyzer choices on representative text.
- Record gaps or open questions and feed them back into the shared roadmap.
