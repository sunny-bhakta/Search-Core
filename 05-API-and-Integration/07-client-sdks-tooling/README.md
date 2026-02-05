# 07. Client SDKs & Tooling

ship helper libraries and examples so developers can call search without hand-rolling HTTP code.

### Description
- Provide typed models, retry helpers, and pagination utilities.
- Bundle Postman collections or CLI scripts for quick manual tests.

### History Snapshot
- First clients copied curl snippets from docs and tweaked manually.
- Generated SDKs (Swagger/OpenAPI) plus handwritten niceties simplified usage.
- Today, SDK repos include lint rules, sample apps, and CI tests.

### Pros
- Faster onboarding for partners and internal teams.
- Consistent telemetry and retry behavior baked into every client.
- Easier to evolve contracts when helper functions wrap breaking changes.

### Cons
- Requires release management across languages.
- Auto-generated code can feel clunky without human polish.
- Stale SDKs lead to support load if not updated alongside the API.

### Production Apps
- E-commerce platforms maintain TypeScript, Python, and Java SDKs with matching method names.
- Customer success teams use CLI tooling to replay user searches during support calls.
- Hackathons ship starter apps that import the same SDK, ensuring consistent patterns.

### Tiny Example
- **Input:** developer wants to list products but only knows JavaScript.
- **Output steps:**
	1. Run `npm install search-sdk` to get a helper with `client.searchProducts()`.
	2. Provide a snippet showing pagination iterator returning { data, nextCursor }.
	3. Log sample output so they can confirm the SDK call works end-to-end.

### How to Create a JS SDK (Quick Recipe)
1. Define a tiny client class that stores `baseUrl` and `apiKey`.
2. Wrap `fetch` (or `axios`) so every request sends headers and parses JSON the same way.
3. Expose helper methods like `searchProducts({ query, limit })` that call the shared request layer.
4. Add convenience utilities (pagination iterator, retry wrapper) in the same file or folder.
5. Publish via npm (or keep internal) and include a README snippet showing both install and `client.searchProducts()` output.
