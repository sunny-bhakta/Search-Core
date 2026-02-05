# 02. Field Schema & Analyzers

write down every field in your document, what kind of data it holds, and how search should treat it. Think of it as a checklist: “this field is text, use this analyzer; this other field is a number, only use it for sorting.”

### History Snapshot
- In the early days, search systems only understood two fields (`title`, `body`). Adding a new field meant changing code.
- Then schema files and APIs showed up, so you could describe fields without touching the app.
- Today you can tweak analyzers or add fields in a JSON file and apply it immediately.

### Pros
- Better matches: you can use a smart text analyzer for descriptions and a keyword analyzer for IDs.
- Faster queries: you skip indexing data that’s only for display.
- Easier debugging: one schema file shows how every field is treated.

### Cons
- Requires planning. If you pick the wrong analyzer, fixing it later can mean a reindex.
- If teams don’t coordinate, the same field might get defined two different ways.
- Huge schemas (thousands of fields) can slow down cluster startup.

### Production Apps Using Per-Field Schemas
- Shops like Amazon/Shopify give special treatment to `title`, `brand`, `price`, and dozens of attributes.
- Support portals (Zendesk, Freshdesk) analyze ticket subjects differently from long-form comments.
- Newsrooms (NYTimes, Guardian) use language-specific analyzers per section/locale.

### Tiny Example
- **Input doc fields**: `title` (text), `brand` (keyword), `price` (number)
- **Output decisions**:
  - `title`: run the standard text analyzer so we can search/highlight it.
  - `brand`: treat as keyword so filters/facets work, and store it for display.
  - `price`: keep as a number, enable `doc_values` so we can sort/filter.

## Quick Checklist
- List every field and assign a data type (keyword, text, number, date, boolean).
- Pick an analyzer per text field (standard, lowercase, ngram, language-specific).
- Toggle `index`, `store`, `doc_values`, and `norms` intentionally.
- Note how the field is consumed: scoring, filters, facets, highlights, or storage-only.

## Mini Exercise
1. Take a sample document and write a tiny table describing each field.
2. For text fields, run them through two analyzer choices and compare tokens.
3. Flip one flag (like `doc_values`) and observe how it affects aggregations.
