# 08. Validation, Testing & Data Quality Gates

run quick checks on documents and analyzers before you ship them so junk doesn’t enter the index.
It’s the “linting” step for search data.

### History Snapshot
- Early pipelines trusted upstream data, so empty titles or weird tokens slipped in.
- Teams added schema validation and analyzer fixtures to CI so they’d fail fast.
- Today, ingestion jobs run continuous monitors for null rates, ranges, and token diffs.

### Pros
- Blocks garbage data before it hurts relevance.
- When something fails, validators tell you which field broke.
- Shadow indexes let you test new schemas without touching prod.

### Cons
- Heavy validation can slow ingestion if rules pile up.
- Sample fixtures need maintenance as schemas evolve.
- Shadow indexes use extra hardware if you never turn them off.

### Production Apps Using Quality Gates
- Finance apps reject payloads that miss compliance-required fields before indexing.
- Marketplaces validate localized text so analyzers emit the right tokens per language.
- Media companies run nightly analyzer regression suites on curated corpora.

### Tiny Example
- **Input docs:** one valid product (`title: Trail Shoes, price: 49.99`) and one invalid (`title: '', price: 0`).
- **Output:** analyzer tokens plus a validation report—valid doc passes, invalid doc flags “missing title” and “price must be > 0.”

## Quick Checklist
- Write simple contract tests that load sample docs and inspect analyzer output.
- Run checks for missing values, unexpected ranges, and cardinality spikes.
- Keep shadow indexes or dry-run modes for schema experiments.
- Fail fast when validation is red instead of letting garbage through.

## Mini Exercise
1. Feed a handful of docs through your analyzer and log the tokens.
2. Add a validator that ensures `price > 0` and `title` isn’t empty.
3. Send the docs to a shadow index and compare stats to production.
