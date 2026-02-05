# 10. User-Facing Safety Features

Overview: give end users control over their data and block abusive behavior on public search surfaces.

### Description
- Provide privacy toggles (opt out, delete me) and honest data usage notices.
- Detect scraping or brute-force patterns and throttle them politely.

### History Snapshot
- Support desks once handled every removal request manually.
- Self-serve privacy portals plus rate-limiters reduced load.
- Abuse ML now spots bots before users feel slowdowns.

### Pros
- Builds trust by honoring privacy expectations.
- Keeps infrastructure healthy by blocking bad actors.
- Reduces legal risk under GDPR/CCPA.

### Cons
- Abuse detection can block legitimate high-traffic partners.
- Data deletion workflows must touch many systems.
- Requires ongoing tuning as attackers adapt.

### Production Apps
- Consumer search lets users download and delete their history.
- Developer portals issue per-user tokens with captchas for burst traffic.
- Marketplaces show banners describing personalization opt-outs.

### Tiny Example
- **Input:** IP makes 500 requests/minute, normal is 50.
- **Output steps:**
	1. Rate limiter flags IP as abusive.
	2. System replies with 429 plus captcha link.
	3. After captcha success or timeout, traffic is allowed again.
