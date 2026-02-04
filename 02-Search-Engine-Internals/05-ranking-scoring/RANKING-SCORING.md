# Ranking & Scoring
- Ranking is the act of sorting results; scoring is the number each result gets.
- Classic formulas (TF/IDF, BM25) count how well the text matches the query.
- You can stack extra boosts (freshness, clicks, price) on top so the list matches user intent and business goals.

## Tiny Example (Input → Output)

```
Query: "wireless headphones"

Doc A text: "Wireless noise-cancelling headphones with 30h battery"
Doc B text: "Headphones with wire for studio use"

Simple TF score:
- Doc A → term "wireless" (1 hit) + "headphones" (1 hit) = score 2
- Doc B → "wireless" (0) + "headphones" (1) = score 1

Add freshness boost (+1 if updated < 30 days):
- Doc A updated yesterday → total 3
- Doc B updated 2 years ago → total 1

Ranked output: [Doc A, Doc B]
```

Even this tiny boost plus TF counting already pushes the fresher, better-matching doc to the top.

## Use Cases
- Web search engines tuning relevancy for queries (“pizza nyc”)
- Marketplace/product search balancing text relevance with inventory + margin
- News/recommendation feeds blending textual match and recency
- Enterprise knowledge bases ranking FAQs or policies
- Code/document search weighting filename, comments, usage examples

## History
- 1970s: Vector Space Model + TF/IDF
- 1990s: Probabilistic models (BM25, Okapi) gain traction
- 2000s: Learning-to-rank (RankNet, LambdaMART) mixes multiple features
- 2010s–2020s: Neural ranking (BERT, ColBERT) and click models augment classic scores

## Production Applications
- BM25/BM25F as default in Elasticsearch, Solr, OpenSearch
- Google/Bing blending hundreds of features with ML ranking
- Spotify/Netflix ranking pipelines mixing textual + behavioral signals
- Internal enterprise search adding role-based boosts or freshness

## Pros
- Custom scoring lets you encode domain knowledge (fresh content, authoritative sources)
- Clear metrics (NDCG, MRR) to measure improvements
- Can combine lexical, semantic, and behavioral features

## Cons
- Hard to tune without labeled data or strong A/B infra
- Feature bloat/additive boosts can make scoring opaque
- Neural ranking adds latency and infra complexity
- Misconfigured boosts can hurt relevance or fairness

## Hands-on Objectives
1. Implement TF/IDF and BM25 scoring for a small corpus; compare ranked outputs.
2. Add simple boosts (e.g., freshness, field weight) and observe score changes.
3. Log per-term contributions to a score to explain results and debug weight choices.
