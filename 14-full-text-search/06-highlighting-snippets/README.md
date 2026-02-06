# 06. Highlighting & Snippets

Overview: show users why a document matched by highlighting query terms inside concise snippets.

### Description
- Extract fragments from the document around matching terms, respecting sentence boundaries.
- Highlight tokens with markup (strong tags, spans) while escaping HTML safely.
- Provide fallbacks when no highlight is possible (e.g., use the document description).

### History Snapshot
- Early search results showed raw first paragraphs without context.
- Highlighter libraries added term offsets and fragment scoring.
- Neural summarizers now generate context-aware snippets on demand.

### Pros
- Builds trust by showing relevant context.
- Improves click-through because users see the answer fast.
- Helps debugging when support teams evaluate results.

### Cons
- HTML escaping and multi-byte characters can break markup.
- Highlight generation adds latency if not cached.
- Fragile when analyzers for indexing and querying differ.

### Production Apps
- News search highlights keywords in article blurbs.
- Support portals show the exact troubleshooting step containing the query term.
- Code search highlights function names inside snippet results.

### Tiny Example
- **Input:** document text "Reset the router by pressing the button for 10 seconds." query = "reset router".
- **Output steps:**
	1. Find matching sentence.
	2. Wrap terms with `<mark>` tags.
	3. Return `"<mark>Reset</mark> the <mark>router</mark> by pressing..."`.
