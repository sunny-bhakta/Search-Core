# 02. Data Preparation & Chunking

Overview: split documents into manageable pieces and clean text before embedding so vectors stay precise.

### Description
- Choose chunk sizes (sentences, 200-word blocks) and overlap to preserve context.
- Normalize text consistently (lowercase, punctuation, stopwords) before embedding.
- Attach metadata like document ID, heading, tags, and position to each chunk for filtering later.

### History Snapshot
- Early systems embedded entire documents, causing long-context dilution.
- Passage retrieval research showed smaller chunks improve recall.
- Modern RAG stacks use sliding windows and metadata-rich chunks for better answers.

### Pros
- Higher recall since each chunk focuses on one idea.
- Easier filtering and highlighting through metadata.
- Avoids hitting model token limits during embedding and generation.

### Cons
- Too-small chunks lose context; too-large chunks reduce precision.
- Overlap increases storage and compute cost.
- Requires consistent preprocessing across ingestion and query flows.

### Production Apps
- Support portals chunk troubleshooting guides per step.
- Financial research splits filings by section for targeted insights.
- Dev doc sites chunk API references by heading for faster results.

### Tiny Example
- **Input:** 600-word article.
- **Output steps:**
	1. Split into three 250-word chunks with 50-word overlap.
	2. Lowercase + remove HTML tags.
	3. Emit metadata `{ docId: 'guide-7', chunkIndex: 1 }` with each vector.
