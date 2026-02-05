# 02. Environment Strategy

Overview: keep dev, staging, and production environments consistent so bugs reproduce easily.

### Description
- Document what data, plugins, and instance sizes each environment uses.
- Automate sandbox creation with sanitized data for experiments or customer issues.

### History Snapshot
- Dev environments once drifted far from prod, hiding bugs.
- Refresh scripts and anonymization pipelines narrowed the gap.
- Environment catalogs now track overrides and data freshness dates.

### Pros
- Faster debugging because issues can be replayed in stage.
- Safer experiments using isolated sandboxes.
- Clear ownership of which toggles differ per environment.

### Cons
- Maintaining parity costs time and money.
- Anonymization may remove signals needed for testing.
- Too many sandboxes can sprawl without cleanup.

### Production Apps
- Search teams refresh staging indices nightly with masked prod data.
- Support groups spin up customer-specific sandboxes to reproduce bugs.
- Platform squads track environment drift dashboards in Confluence or Backstage.

### Tiny Example
- **Input:** need to recreate customer issue from prod.
- **Output steps:**
	1. Run script to clone prod index to sandbox with PII scrubbed.
	2. Apply same config files used in prod.
	3. QA reproduces bug, fixes it, and merges change confident it matches prod.
