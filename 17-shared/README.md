# Shared Utilities

Common helper scripts and patterns reused across search modules.

## 1. Document Loaders
- Build adapters for CSV, JSON, database dumps, and APIs.
- Normalize schema output (id, title, body, metadata) for downstream modules.
- Add sampling and filtering flags for quick experimentation.

## 2. Text Preprocessing Helpers
- Provide reusable tokenization, normalization, and stemming utilities.
- Expose configuration knobs (locale, stopwords, synonym sets).
- Ensure deterministic behavior for tests.

## 3. Similarity & Distance Functions
- Implement cosine, dot-product, Euclidean, and Jaccard helpers.
- Optimize for vectorized operations or WebAssembly where possible.
- Validate results against known examples.

## 4. Evaluation & Metrics Tooling
- Offer scripts for precision/recall, NDCG, MAP, and custom KPIs.
- Support CSV/JSON inputs and produce dashboard-friendly outputs.
- Integrate with CI to catch regressions.

## 5. Mock Data Generators
- Create synthetic corpora with controllable vocab, field distributions, and noise.
- Provide persona-based query logs for demos.
- Seed RNG to keep fixtures reproducible.

## 6. Visualization Widgets
- Include small charting helpers for latency histograms, facet distributions, etc.
- Favor lightweight dependencies (D3-lite, Chart.js) or CLI ASCII visuals.
- Document how to embed visuals into READMEs or notebooks.

## 7. CLI Scaffolding
- Write a shared CLI (Node, Python) for running demos/tests with consistent UX.
- Handle env loading, config files, and logging levels centrally.
- Support plugin hooks so modules can add commands easily.

## 8. Configuration Schemas
- Maintain JSON/YAML schemas for pipeline settings.
- Validate configs at startup and provide helpful error messages.
- Enable inheritance/overrides (base + environment + local).

## 9. Logging & Telemetry Helpers
- Standardize log formats, colorization, and verbose flags.
- Provide metrics emitters (StatsD, Prometheus) for demos.
- Bundle tracing wrappers for async functions.

## 10. Testing Harness
- Share Jest/Mocha/PyTest fixtures for docs, queries, and expected outputs.
- Include snapshot testing utilities for analyzer results.
- Enable golden-file updates via CLI flag.

### Suggested Next Steps
- Inventory existing helper scripts and move them under this shared module.
- Publish a CONTRIBUTING note describing how to add new utilities.
- Wire at least one search module to consume the shared helpers for consistency.
