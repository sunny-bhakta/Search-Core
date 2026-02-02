# 04-hybrid-search

Combine lexical (Exact) and semantic search methods.

## Tasks
- Blend TF-IDF/Fuse.js and embeddings scores
- Experiment with hybrid ranking

# Hybrid Search (Lexical (Exact) + Semantic)

Hybrid search combines traditional lexical search (like TF-IDF or fuzzy search) with semantic search (using embeddings) to deliver more relevant results by leveraging both keyword matching and meaning/context.

## Use Cases
- Web and enterprise search engines (Google, Bing, Elastic)
- E-commerce product search (relevance + intent)
- Question answering and FAQ bots
- Knowledge base and document retrieval
- Personalized recommendations

## History
Hybrid search approaches emerged as semantic search became practical (2015+), allowing systems to combine the strengths of both methods. Modern search engines and vector databases now support hybrid ranking out of the box.

## Production Apps
- Google Search (combines lexical and semantic signals)
- Microsoft Bing
- Elasticsearch/OpenSearch hybrid ranking
- Pinecone, Weaviate, Milvus (vector DBs with hybrid search)
- E-commerce and SaaS platforms

## Pros
- Captures both exact keyword matches and semantic meaning
- Improves recall and relevance for diverse queries
- Handles typos, synonyms, and context
- Flexible: can tune weights for different use cases

## Cons
- More complex to implement and tune
- Requires both lexical and embedding infrastructure
- May need experimentation to balance scores
- Higher compute/storage cost than single-method search

## Definition
**Hybrid search** is a technique that blends lexical (keyword-based) and semantic (meaning-based) search scores to rank results. This can be as simple as averaging the scores, or as advanced as using machine learning to combine them.

## Example: Combining Lexical and Semantic Search
Suppose you have a TF-IDF score and an embedding (cosine similarity) score for each document. You can combine them like this:

```js
const tfidfScore = 0.7;      // Lexical score (e.g., from TF-IDF)
const embeddingScore = 0.8;  // Semantic score (e.g., from cosine similarity)

// Simple weighted average
const alpha = 0.5; // 0 = only lexical, 1 = only semantic
const hybridScore = alpha * embeddingScore + (1 - alpha) * tfidfScore;

console.log('Hybrid score:', hybridScore); // Output: 0.75
```

You can tune `alpha` to favor lexical or semantic results, or use more advanced models to combine scores.
