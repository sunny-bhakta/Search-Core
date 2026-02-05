# 04. Federated & On-Device Search

Overview: train or personalize ranking locally on devices, then merge learnings without shipping raw data upstream.

### Description
- Keep user click logs and interactions on the device, then send only gradient updates or anonymized stats to the server.
- Blend local signals (recent queries, installed apps) with global signals (overall popularity).
- Rotate small on-device indexes so results stay fast even when offline.

### History Snapshot
- Early mobile search synced everything back to a central data center, raising privacy and bandwidth concerns.
- Federated learning (popularized by mobile keyboards) showed how to share model updates securely.
- Modern search SDKs now bundle lightweight indexes that update during charging or Wi-Fi windows.

### Pros
- Protects sensitive user data because raw logs never leave the device.
- Reduces latency for common queries and offline use-cases.
- Saves bandwidth costs for both the user and the provider.

### Cons
- Devices have limited CPU, memory, and battery budgets for training.
- Debugging quality issues is harder because you cannot inspect per-user data.
- Coordinating global model updates across thousands of device versions is complex.

### Production Apps
- Mobile email clients offer near-instant local search even when flights block connectivity.
- Enterprise document apps cache team knowledge bases on laptops for travel.
- Smart home hubs keep a rolling voice-command index so routine tasks work offline.

### Tiny Example
- **Input:** device observes 3 recent queries ("merge pdf", "add signature", "export doc").
- **Output steps:**
	1. Device counts query frequency locally and nudges "merge pdf" higher.
	2. Sends only the gradient ("boost workflow queries +0.2") to the server.
	3. Local mini-index pins those documents for instant offline retrieval.
