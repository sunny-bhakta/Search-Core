# 02. Multimodal Retrieval

Overview: search across text, images, audio, and structured data together using shared embeddings.

### Description
- Encode each modality into the same vector space.
- Route queries to the right mix of indexes (text engine, image store, audio metadata) and merge scores.

### History Snapshot
- Early engines treated images or audio as separate silos.
- Cross-modal models like CLIP joined text and image embeddings.
- Current stacks store multimodal vectors in one ANN index with metadata filters.

### Pros
- Users can search “red sneakers like this photo” or hum a tune to find a song.
- Adds context (image + text) for better recommendations.
- Enables new UX like drag-and-drop search.

### Cons
- Model training is expensive and data hungry.
- Feature parity must be tracked across modalities.
- Tooling for debugging embeddings is still young.

### Production Apps
- Retail apps let shoppers upload a picture to find similar items.
- Media services link podcast transcripts to related articles.
- Social platforms suggest connections by matching profile text + avatar style.

### Tiny Example
- **Input:** user uploads shoe photo + types “waterproof”.
- **Output steps:**
	1. Encode photo & text into shared vector.
	2. Query vector index for nearest neighbors.
	3. Return product list with combined similarity score.
