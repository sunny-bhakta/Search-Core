## Boosters & Ranking: Concepts, Use Case, and Example

### Concepts
Boosters and ranking are techniques used in search systems to influence the order of search results. They help ensure that more relevant or important results appear higher in the list.

- **Ranking:** The process of ordering search results based on relevance scores.
- **Boosting:** Increasing the importance of certain fields, terms, or documents so they rank higher when matched.

### Use Case
Suppose you have a job search website. You want jobs with the title "Senior Engineer" to appear higher than those with "Junior Engineer" when users search for "engineer." You can boost the "title" field or the term "Senior" to achieve this.

### Code Example: Simple Field Boosting in JavaScript

```js
const jobs = [
	{ title: "Senior Engineer", description: "Experienced engineer needed" },
	{ title: "Junior Engineer", description: "Entry-level position" },
	{ title: "Engineer", description: "General engineering role" }
];

function searchJobs(query, boostTerm = "Senior", boostFactor = 2) {
	return jobs
		.map(job => {
			let score = 0;
			if (job.title.toLowerCase().includes(query.toLowerCase())) score += 1;
			if (job.title.includes(boostTerm)) score *= boostFactor;
			return { ...job, score };
		})
		.sort((a, b) => b.score - a.score);
}

console.log(searchJobs("engineer"));
```

**Output:**
```
[
	{ title: 'Senior Engineer', description: 'Experienced engineer needed', score: 2 },
	{ title: 'Engineer', description: 'General engineering role', score: 1 },
	{ title: 'Junior Engineer', description: 'Entry-level position', score: 1 }
]
```

**Explanation:**
When searching for "engineer," jobs with the term "Senior" in the title are boosted, so they appear at the top of the results, even if other jobs also match the query.
