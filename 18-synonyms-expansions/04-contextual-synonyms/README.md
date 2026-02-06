# 04. Contextual Synonyms

Overview: only apply synonyms when the context (field, locale, category) says it is safe.

### Description
- Scope expansions to specific fields like category names or product titles.
- Use rules or classifiers to spot context (fruit vs. brand) before adding synonyms.
- Prevent clashes with negative keywords or stopwords.

### History Snapshot
- Blanket synonym lists caused disasters like "apple" fruit vs. Apple brand.
- Rule-based scoping limited expansions to certain categories.
- ML models now detect intent and apply the right synonym set automatically.

### Pros
- Higher precision because expansions respect intent.
- Safer for regulated industries where context matters.
- Supports localization since each locale can have unique contexts.

### Cons
- Requires extra metadata (category tags, locale info).
- Rules can get hard to maintain.
- Classifiers need training data and monitoring.

### Production Apps
- Grocery search only expands "chips" ↔ "crisps" inside snacks category.
- Tech retailers limit "apple" brand synonyms to electronics vertical.
- News apps scope political synonym lists to relevant sections.

### Tiny Example
- **Input:** query "apple" in category "produce".
- **Output steps:**
	1. Rule detects produce context.
	2. Adds synonyms "gala", "fuji".
	3. If category ≠ produce, skip the fruit synonyms.
