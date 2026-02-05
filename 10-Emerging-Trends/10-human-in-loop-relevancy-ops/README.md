# 10. Human-in-the-Loop Relevancy Ops

Overview: combine automated ranking with curated human review queues so experts can correct edge cases quickly.

### Description
- Route low-confidence queries or flagged results into a review inbox for analysts.
- Provide tooling so analysts can annotate relevance, add rules, or supply new training pairs.
- Feed approved feedback back into retrieval, ranking, or LLM prompts with audit trails.

### History Snapshot
- Manual merchandisers once edited search shelves by hand inside CMS tools.
- Relevance engineers later relied fully on algorithmic updates, losing human intuition.
- Modern search stacks blend both, borrowing concepts from active learning workflows.

### Pros
- Humans catch nuanced brand, compliance, or safety issues that models miss.
- Creates labeled data to retrain ranking faster.
- Gives stakeholders confidence that launches have an escalation path.

### Cons
- Needs staffing and scheduling, especially for 24/7 products.
- Without guardrails, analysts might overfit rules to single incidents.
- Integrating human feedback loops adds latency if queues get long.

### Production Apps
- Marketplaces let trust-and-safety specialists down-rank suspicious sellers instantly.
- Streaming services review search trends tied to banned content and apply quarantines.
- Internal knowledge bases allow support leads to pin or demote answers during outages.

### Tiny Example
- **Input:** search result flagged for "medical claim risk" with confidence 0.35.
- **Output steps:**
	1. System auto-queues the result for human review.
	2. Analyst marks it unsafe and adds context.
	3. Feedback pipeline removes that URL and adds the label to the next training batch.
