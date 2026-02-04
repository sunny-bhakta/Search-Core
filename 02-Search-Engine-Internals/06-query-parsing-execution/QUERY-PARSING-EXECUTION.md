# Query Parsing & Execution
- Query parsing takes messy user text (“pizza near me” or `status:error service:auth`) and turns it into structured instructions.
- Execution then walks posting lists, applies filters, and ranks results.
- It’s like compiling a tiny language (keywords + operators) into a plan your search engine understands.

## Tiny Example (Input → Output)

```
User query: "status:error service:auth -region:eu"

Parsed output:
{
	must: ['status:error', 'service:auth'],
	mustNot: ['region:eu'],
	phrases: [],
	wildcards: []
}

Execution plan:
1. Fetch posting list for status:error → doc set A
2. Fetch posting list for service:auth → doc set B
3. Intersect A ∩ B
4. Remove docs matching region:eu
5. Rank remaining docs
```

One quick parsing pass gives you the structure needed to run the filters and ranking steps reliably.

## Use Cases
- Search boxes that support AND/OR/NOT, quotes, and wildcards.
- Log/SIEM queries that mix free text with field filters (`service:api status:500`).
- IDE/code search parsing regex or symbol qualifiers.
- Ecommerce facets + keyword combos (“shoes color:red price:<100”).
- Chat/voice assistants turning natural language into structured filters.

## History
- 1960s: Library systems popularized Boolean (AND/OR/NOT) queries.
- 1990s: Web engines like AltaVista shipped advanced query languages.
- 2000s: Lucene, Solr, Elasticsearch DSLs formalized parser + execution steps.
- 2010s–2020s: Natural-language and ML layers sit on top of classic keyword parsing.

## Production Applications
- Elasticsearch DSL powering Kibana, OpenSearch dashboards
- Gmail/Outlook search operators (`from:`, `subject:`)
- CloudWatch/Datadog query languages
- GitHub code search filters (language:, repo:, path:)

## Pros
- Rich query languages empower power users and ops teams
- Parsing stage lets you normalize/expand queries before scoring
- Execution planner can optimize performance (short-circuit, caching)

## Cons
- Complex grammars are hard to maintain and document
- Parsing errors or ambiguities frustrate users
- Injection/security concerns if user input maps to backend queries
- Advanced features can slow down execution if not optimized

## Hands-on Objectives
1. Build a simple parser that supports AND/OR/NOT, quotes, prefixes, and field filters.
2. Turn parsed ASTs into execution plans (posting list intersections/unions) and run them against the inverted index.
3. Add basic query rewriting (lowercasing, synonym expansion, typo fix) before execution.
