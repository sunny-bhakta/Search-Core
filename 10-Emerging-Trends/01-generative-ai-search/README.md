# 01. Generative AI in Search

Overview: mix classic retrieval with large language models (LLMs) that summarize or answer questions.

### Description
- Fetch top documents, pass them to an LLM, and return a concise answer plus references.
- Track latency, hallucinations, and prompt changes just like code changes.

### History Snapshot
- Early chatbots guessed answers without grounding in documents.
- Retrieval-augmented generation (RAG) added context windows to keep answers accurate.
- Teams now version prompts, guardrails, and safety filters for each release.

### Pros
- Gives users direct answers instead of long result lists.
- Surfaces insights hidden across multiple documents.
- Creates reusable summaries for chat, email, or API clients.

### Cons
- LLMs can hallucinate facts if grounding fails.
- Higher cost and latency than pure keyword search.
- Requires prompt security to block prompt-injection attacks.

### Production Apps
- Help centers summarize troubleshooting steps with citations.
- E-commerce sites explain why certain products match a user’s question.
- Internal search portals create meeting-ready briefs from policy docs.

### Tiny Example
- **Input:** user asks “How do I reset my smart lock?”
- **Output steps:**
	1. Retrieve 5 reset articles from the index.
	2. LLM rewrites them into a 3-step answer and adds source links.
	3. System logs latency + hallucination score before responding.
