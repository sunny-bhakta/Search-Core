# 05. Query Parsing & Operators

Overview: interpret user queries safely, supporting phrases, Boolean logic, prefixes, and other operators.

### Description
- Provide a query DSL or friendly syntax (quotes for phrases, AND/OR, minus for NOT).
- Escape user input to prevent analyzer quirks or injection attacks.
- Support advanced operators (proximity, field-specific searches) for power users.

### History Snapshot
- Early search boxes treated everything as plain text.
- Query parsers like Lucene syntax introduced structured operators.
- Modern APIs expose both simple search bars and advanced builder UIs.

### Pros
- Users can narrow results precisely without custom filters.
- Devs can validate/transform queries before hitting the index.
- Enables saved searches with reproducible syntax.

### Cons
- Complex syntax intimidates casual users.
- Requires strong validation to block expensive or malicious constructs.
- Parser errors lead to confusing zero-result states.

### Production Apps
- Knowledge bases support quotes for phrase search and `AND` for precise filters.
- E-commerce admin tools expose field-specific queries for merchandising teams.
- Log search platforms use DSLs with operators like `status:500 AND latency:>200ms`.

### Tiny Example
- **Input:** `"wireless mouse" AND -refurbished`.
- **Output steps:**
	1. Parser recognizes phrase token and NOT operator.
	2. Escapes special characters.
	3. Engine matches documents containing the exact phrase while excluding refurbished items.
