# 05. Adaptive Relevancy Models

Overview: continuously re-rank search results using live behavioral signals, feedback loops, and lightweight online learning.

### Description
- Start with a baseline BM25 or vector score and apply realtime boosts from clicks, purchases, or thumbs up/down.
- Deploy small bandit or reinforcement learners that explore new ranking ideas while exploiting proven ones.
- Track drift dashboards so you can revert if fresh signals hurt core KPIs.

### History Snapshot
- Traditional ranking updates shipped quarterly because models had to be rebuilt offline.
- Web personalization teams adopted multi-armed bandits to react within minutes to news cycles.
- Today, search teams stream events into feature stores and update weights every few minutes.

### Pros
- Keeps results aligned with seasonality, promotions, or breaking news without manual rules.
- Allows safe experimentation because exploration traffic is capped.
- Surfaces long-tail content once it starts gaining traction.

### Cons
- Requires reliable telemetry; missing events make the learner blind.
- Bad feedback (bots, fraud) can poison the model quickly.
- Debugging cascading boosts is tricky without strong observability.

### Production Apps
- Retailers push trending sneakers higher the moment influencers mention them.
- News portals highlight developing stories as soon as readership spikes.
- B2B knowledge bases promote fresh policy documents after employees confirm usefulness.

### Tiny Example
- **Input:** clicks show users now prefer "green sneakers" over "blue sneakers".
- **Output steps:**
	1. Bandit updates the reward score for the "green" arm by +0.1.
	2. Search API applies the boosted score on the next request.
	3. Observability graph confirms CTR improved 5% over the control.
