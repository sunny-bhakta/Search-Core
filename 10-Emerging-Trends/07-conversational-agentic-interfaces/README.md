# 07. Conversational & Agentic Interfaces

Overview: search feels like a guided conversation where the system can call tools, clarify intent, and take small actions on the user’s behalf.

### Description
- Frame each turn of the conversation as a search query plus context window.
- Use dialog policies to decide when to ask clarifying questions versus fetching new results.
- Let the agent trigger actions (bookmarks, alerts, workflows) only after grounding and user confirmation.

### History Snapshot
- Simple chatbots returned scripted answers from FAQs.
- Transformer-based assistants added memory so they could reference earlier turns.
- Agent frameworks now orchestrate search, retrieval, and tool execution in the same flow.

### Pros
- Reduces user effort because the agent asks the next question automatically.
- Allows multi-step research tasks (compare, filter, summarize) in one thread.
- Observability is easier because every action is logged as a step in the conversation.

### Cons
- Conversation drift can frustrate users if clarifications never land.
- Tool execution requires strong permissioning to avoid unsafe actions.
- Harder to benchmark because success spans many turns rather than a single query.

### Production Apps
- Travel planners ask follow-up questions about budget, dates, and airports before showing bundles.
- Enterprise assistants can search policy docs, create tickets, and post updates back to chat.
- E-commerce stylists chat with shoppers, then auto-build saved carts through APIs.

### Tiny Example
- **Input:** user says “Find me eco-friendly desk chairs under $300.”
- **Output steps:**
	1. Agent retrieves chairs, then asks "Do you prefer mesh or cushioned?"
	2. After reply, it filters results and presents the top three with sustainability badges.
	3. User confirms one, and the agent schedules a restock alert via API.
