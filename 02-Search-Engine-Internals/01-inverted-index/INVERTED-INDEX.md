# Inverted Index

- Instead of reading every document each time, we keep a cheat sheet that says “word → docs where it lives.”
- Every word’s entry also stores quick stats: how many times it appears in a doc and how many docs share it.
- When a query comes in, we jump straight to those lists, score the hits, and return results without re-reading all files.

## Tiny Example (Input → Output)

**Docs in the corpus**

```
Doc 1: "search engines need fast answers"
Doc 2: "answers stay fast with inverted indexes"
```

**Resulting posting lists (simplified)**

```
"search"  -> [ { docId: 1, tf: 1 } ]
"engines" -> [ { docId: 1, tf: 1 } ]
"answers" -> [ { docId: 1, tf: 1 }, { docId: 2, tf: 1 } ]
"fast"    -> [ { docId: 1, tf: 1 }, { docId: 2, tf: 1 } ]
"inverted"-> [ { docId: 2, tf: 1 } ]
"indexes" -> [ { docId: 2, tf: 1 } ]
```

From there, a query like "fast answers" just intersects the two postings lists, tallies scores, and returns doc IDs 1 and 2 in milliseconds.

## Use Cases
- Web, enterprise, and shop search engines.
- Knowledge bases or internal document finders.
- Log/SIEM systems that need fast text lookups.
- Code search tools for engineers.
- Metadata lookup for captions, tags, or transcripts.

## History
- 1950s: Librarians and researchers flipped books into keyword cards.
- 1960s–1970s: University IR systems (like SMART) turned the idea into software.
- 1990s: Web search engines (AltaVista, Google) stretched it to billions of pages.
- 2010s+: Open-source stacks (Lucene, Elasticsearch, OpenSearch) made it distributed, compressed, and near-real-time.

## Production Applications
- Google, Bing, DuckDuckGo, and most modern search sites.
- Elasticsearch/OpenSearch clusters behind shopping filters and site search.
- Splunk, Datadog, and other logging tools indexing machine output.
- GitHub and internal developer search tools at big companies.

## Pros
- Super fast lookups even when the corpus is huge.
- Compression keeps storage reasonable.
- Plays nicely with TF-IDF, BM25, and other scoring formulas.
- Easy to add new data by appending segments and merging later.

## Cons
- Rewriting posting lists in-place is pricey—merges are required.
- Needs clean tokenization/normalization up front or quality drops.
- Random reads can thrash disks/cache if layouts aren’t tuned.
- Not the best fit for numeric ranges unless you bolt on other data structures.

## Hands-on Objectives
1. **Model Posting Lists & Stats**: Define the data structures for posting lists, document IDs, term frequency (TF), and document frequency (DF). Capture sample stats for a toy corpus.
2. **Build a File-System Indexer**: Write a script that ingests every `.txt` file in a directory, tokenizes contents, and emits an inverted index (JSON or in-memory). Include a query routine to prove it works.
3. **Explore Update Strategies**: Compare append-only segments (write new segments + background merges) versus in-place updates (rewrite posting lists). Document pros/cons, complexity, and when each approach fits.

## Try It
1. `cd 02-Search-Engine-Internals/01-inverted-index`
2. `node inverted-index.js`
3. Inspect the console output for posting list stats, append-only segment merge, and in-place rewrite differences.

