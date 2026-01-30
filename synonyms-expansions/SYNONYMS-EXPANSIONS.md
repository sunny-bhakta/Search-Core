## Synonyms & Query Expansion: Concepts, Use Case, and Example

### Concepts
Synonyms and query expansion are techniques used in search systems to improve recall and relevance. They help match user queries to documents even if different words are used for the same meaning.

- **Synonyms:** Different words with similar meanings (e.g., "car" and "automobile").
- **Query Expansion:** Automatically adding related terms (synonyms, broader/narrower terms) to a user's query to improve search results.

### Use Case
Suppose a user searches for "laptop" on an e-commerce site. Some products are listed as "notebook computers." Without synonyms or query expansion, those products might not appear in the results. By expanding the query to include synonyms, the search system returns more relevant results.

### Code Example: Simple Synonym Expansion in JavaScript

```js
const synonymMap = {
	car: ["automobile", "vehicle"],
	laptop: ["notebook", "computer"],
	phone: ["mobile", "cellphone"]
};

function expandQuery(query) {
	const terms = query.split(/\s+/);
	let expanded = [...terms];
	for (const term of terms) {
		if (synonymMap[term]) {
			expanded = expanded.concat(synonymMap[term]);
		}
	}
	return Array.from(new Set(expanded));
}

// Example usage:
const userQuery = "laptop";
console.log("Expanded query:", expandQuery(userQuery));
```

**Output:**
```
Expanded query: [ 'laptop', 'notebook', 'computer' ]
```

**Explanation:**
When a user searches for "laptop," the system expands the query to include "notebook" and "computer," increasing the chance of finding all relevant documents or products.
