# Search Algorithms

## History
Search algorithms have evolved significantly since the early days of information retrieval. The first search systems in the 1950s and 1960s used simple keyword matching. In the 1970s, the vector space model and TF-IDF scoring were introduced, laying the foundation for modern document ranking. The 1990s saw the rise of web search engines like AltaVista and Google, which popularized large-scale indexing and advanced ranking algorithms such as PageRank. In recent years, search has shifted towards semantic understanding, using machine learning, embeddings, and neural networks to improve relevance and user experience.

Search algorithms are methods and techniques used to retrieve relevant information from large collections of data, such as documents, databases, or web pages. They are fundamental to building search engines, recommendation systems, and information retrieval applications.

## Use Cases
- Web search engines (Google, Bing)
- E-commerce product search
- Document and knowledge base search
- Recommendation systems
- Enterprise search platforms
- Chatbots and virtual assistants

## Subtopics, Historical Timeline & Industry Adoption
This section covers a variety of search algorithms and approaches, with their historical context, notable industry adoption, and direct documentation links:

| Folder | Technique | Introduced | Industry | Docs |
|--------|-----------|------------|----------|------|
| 01-tfidf | TF-IDF | 1972 (Gerard Salton, Vector Space Model) | Early search engines (SMART, 1970s), academic search | [README](01-tfidf/README.md) |
| 02-fuzzy-fuse | Fuzzy Search (Fuse.js) | 1960s (concepts), 2012 (Fuse.js) | Frontend search/autocomplete, e-commerce | [README](02-fuzzy-fuse/README.md) |
| 03-embeddings | Embeddings | 2013 (Word2Vec), 2015+ (semantic search) | Google (RankBrain), Bing, OpenAI, Pinecone | [README](03-embeddings/README.md) |
| 04-hybrid | Hybrid Search | 2015+ | Google, Bing, Elasticsearch, OpenSearch | [README](04-hybrid/README.md) |
| 05-bm25 | BM25 | 1994 (Stephen Robertson) | Elasticsearch, Solr, OpenSearch, academic IR | [README](05-bm25/README.md) |
| 06-ngram-prefix | N-gram & Prefix | 1950s (n-gram), 1990s (IR) | Autocomplete, spell correction | [README](06-ngram-prefix/README.md) |
| 07-boolean-filter | Boolean Filter | 1950s | All major search engines, databases | [README](07-boolean-filter/README.md) |
| 08-reranking | Reranking | 1990s (IR), 2000s (ML reranking) | Google, Bing, e-commerce, recommendations | [README](08-reranking/README.md) |
| 09-query-expansion | Query Expansion | 1970s | Google, Bing, academic IR, knowledge bases | [README](09-query-expansion/README.md) |

Each subfolder contains code and examples for hands-on learning of these techniques.

Explore them in order or jump to the ones most relevant to your needs.

## References
- TF-IDF & Vector Space Model: Gerard Salton, "A Vector Space Model for Automatic Indexing," Communications of the ACM, 1975. [Link](https://dl.acm.org/doi/10.1145/361219.361220)
- BM25: Stephen Robertson & Karen Spärck Jones, "Simple, proven approaches to text retrieval," 1994. [Link](https://www.staff.city.ac.uk/~sb317/papers/ir_survey.pdf)
- Boolean Model: C.J. van Rijsbergen, "Information Retrieval," 1979. [Link](https://www.dcs.gla.ac.uk/Keith/Preface.html)
- N-gram Models: Fred Jelinek, "Statistical Methods for Speech Recognition," 1997. [Link](https://www.cs.jhu.edu/~jason/book/node19.html)
- Query Expansion: E. Voorhees, "Query Expansion Using Lexical-Semantic Relations," SIGIR 1994. [Link](https://www.aclweb.org/anthology/J94-4002.pdf)
- Word Embeddings: Tomas Mikolov et al., "Efficient Estimation of Word Representations in Vector Space," 2013. [Link](https://arxiv.org/abs/1301.3781)
- Fuzzy Search: Fuse.js library [GitHub](https://github.com/krisk/Fuse)
- Reranking: T. Joachims, "Optimizing Search Engines using Clickthrough Data," KDD 2002. [Link](https://www.cs.cornell.edu/people/tj/publications/joachims_02a.pdf)
- Hybrid Search: J. Guo et al., "A Deep Look into Neural Ranking Models for Information Retrieval," SIGIR 2019. [Link](https://arxiv.org/abs/1903.06902)