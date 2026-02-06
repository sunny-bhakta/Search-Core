# 01. Text Acquisition & Cleaning

Overview: bring raw documents into the system, extract their text, and clean it so downstream analyzers work reliably.

### Description
- Detect file types (HTML, PDF, DOC) and use the right extractor for each.
- Normalize encodings to UTF-8, remove boilerplate, and capture metadata like author and language.
- Store both the cleaned text and structured metadata so indexing can happen in one pass.

### History Snapshot
- Early crawlers ingested HTML only and ignored PDFs or images.
- Apache Tika and similar toolkits standardized multi-format extraction.
- Today, pipelines enrich documents with language detection, safety tagging, and de-duplication.

### Pros
- Clean input means fewer analyzer bugs and better scores.
- Metadata helps with filtering, ranking, and compliance.
- Reliable extraction reduces manual cleanup for content teams.

### Cons
- Extractors can be slow or fail on malformed files.
- Cleaning rules may strip useful context if tuned poorly.
- Requires monitoring to catch new file formats early.

### Production Apps
- Legal search platforms parse court PDFs and store structured sections.
- News aggregators pull RSS/XML, sanitize HTML, and preserve author tags.
- Enterprise knowledge bases ingest slides, docs, and emails into one corpus.

### Tiny Example
- **Input:** PDF with mixed encoding and header/footer noise.
- **Output steps:**
	1. Extract text and convert to UTF-8.
	2. Remove repeating headers, keep body paragraphs.
	3. Emit clean text plus metadata record for indexing.
