# 06. Range & Histogram Facets

Overview: let users filter by numeric or date ranges using sliders, inputs, or histograms.

### Description
- Choose sensible default buckets (fixed, quantile, log scale) based on data distribution.
- Allow manual min/max input with validation and localization for units.
- Cache histogram data so charts load instantly.

### History Snapshot
- Price filters started as manual text inputs only.
- Sliders and histograms became standard as JavaScript frameworks improved.
- Analytics now inform dynamic bucketing to avoid empty ranges.

### Pros
- Users quickly narrow results to their budget or timeframe.
- Works well on mobile when implemented as dual-handle sliders.
- Supports analytics because range choices reveal demand bands.

### Cons
- Poor bucket choices confuse users or hide products.
- Sliders can be hard to use for long tails without zooming.
- Requires careful rounding so counts match expectations.

### Production Apps
- Retailers show price histograms with bars representing inventory density.
- SaaS dashboards let admins filter logs by time range with presets.
- Travel sites offer night-count sliders and date pickers in one panel.

### Tiny Example
- **Input:** price data `[10, 20, 40, 90]` with bucket size = 25.
- **Output steps:**
	1. Buckets become 0-25, 25-50, 50-75, 75-100.
	2. Counts per bucket calculated.
	3. UI renders a histogram to drive slider defaults.
