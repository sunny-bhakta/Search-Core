# Semantic Search with Embeddings

## Use Cases
- Semantic document and web search
- FAQ and knowledge base retrieval
- E-commerce product recommendations
- Chatbots and virtual assistants
- Duplicate detection and clustering
- Contextual search in enterprise apps

## History
Word embeddings were popularized by Word2Vec (Google, 2013), followed by GloVe (Stanford, 2014) and fastText (Facebook, 2016). Sentence and document embeddings (e.g., Universal Sentence Encoder, BERT) enabled semantic search from 2018 onward. Embedding-based search is now standard in modern AI-powered search engines and APIs.

## Production Apps
- Google Search (RankBrain, BERT)
- Microsoft Bing
- OpenAI Embeddings API
- Pinecone, Weaviate, Milvus (vector databases)
- E-commerce and SaaS platforms for recommendations and semantic search

## Pros
- Captures meaning and context, not just keywords
- Handles synonyms, polysemy, and natural language queries
- Enables semantic similarity, clustering, and recommendations
- Scalable with vector databases and ANN libraries

## Cons
- Requires pre-trained models or training data
- More complex to implement than keyword search
- May need GPU/accelerator for large-scale inference
- Less transparent scoring (harder to interpret than TF-IDF)

## Definition
**Embeddings** are dense vector representations of words, sentences, or documents, learned from large datasets. Semantic search uses these vectors to find items with similar meaning, even if the exact words differ. Similarity is typically measured using cosine similarity or other distance metrics.
