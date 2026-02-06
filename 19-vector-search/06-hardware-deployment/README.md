# 06. Hardware & Deployment Considerations

Overview: decide how to host vector search (CPU vs GPU), how to batch queries, and how to keep memory footprint manageable.

### Description
- Benchmark CPU-only vs GPU-accelerated serving, factoring in throughput, cost, and warmup time.
- Evaluate quantization, distillation, or disk-based indexes to fit vectors within budget.
- Design autoscaling that pre-warms replicas because loading large indexes can take minutes.

### History Snapshot
- Early vector prototypes ran on single GPU boxes without redundancy.
- Faiss and HNSW CPU implementations made commodity clusters viable.
- Managed services now hide hardware, but in-house shops still fine-tune NUMA, batching, and vector cache layers.

### Pros
- Right-sized hardware = lower latency and spend.
- Batching improves GPU utilization significantly.
- Pre-warmed deployments reduce cold-start incidents.

### Cons
- GPUs are expensive and require driver/toolkit upkeep.
- Quantization can hurt accuracy if not calibrated.
- Autoscaling is trickier because replicas take time to load indexes.

### Production Apps
- Conversational AI products run GPU-based vector rerankers with dynamic batching.
- Document search clusters use CPU nodes + SSD caching to handle bursty traffic.
- Media similarity search stores embeddings on NVMe-backed instances with recall tiers.

### Tiny Example
- **Input:** target QPS = 500, p95 latency < 100 ms.
- **Output steps:**
	1. Test CPU vs GPU throughput; GPU hits goal with batch size 16.
	2. Deploy 3 GPU pods with rolling warmup.
	3. Monitor memory to ensure index fits in 80% of VRAM.
