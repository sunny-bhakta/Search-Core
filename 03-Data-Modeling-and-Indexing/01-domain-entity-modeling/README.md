# 01. Domain & Entity Modeling

list the main “things” in your system (products, reviews, tickets) and jot down the key facts you store for each.
It’s basically a shared cheat sheet so every team describes the same entity the same way.

### History Snapshot
- Early search stacks only knew about `title` and `body`, so adding anything else required custom joins.
- Teams started drawing simple entity diagrams to stop re-implementing fields in every service.
- Current platforms encourage storing that entity contract in versioned docs/JSON so schemas stay in sync.

### Pros
- Shared vocabulary (“Product” always means `id`, `title`, `price`).
- Cleaner indexes because you only copy fields that have a job.
- Easier debugging: you know the source and owner for each field.

### Cons
- Needs a little workshop time to align on the model.
- If people add fields without telling others, the contract drifts.
- Bad IDs or relationships stick around until you reindex.

### Production Apps Using Domain Modeling
- Marketplaces (Etsy, eBay) track Products, Sellers, and Listings as separate entities.
- Support platforms (Zendesk) split Tickets, Comments, and Users so each has clear rules.
- Media apps (Spotify podcasts, YouTube) model Shows, Episodes, and Creators for consistent metadata.

### Tiny Example
- **Input:** two entities
  - `Product`: `id`, `title`, `price`
  - `Review`: `id`, `productId`, `rating`, `body`
- **Output:**
  - Put both in one index with a `type` field (`product` or `review`).
  - Use `productId` to tie each review back to its product.

## Quick Checklist
- List every entity type (product, article, ticket, etc.) and its core fields.
- Capture which fields are mandatory, optional, or derived.
- Map relationships (belongs_to, related_to, child_of) between entities.
- Note the upstream data source for each field and how often it updates.
- Decide whether entities share an index (with a `type` field) or use dedicated indexes.

## Mini Exercise
1. Sketch two entities from your domain (say, `Product` and `Review`).
2. Mark primary keys, foreign keys, and update cadences.
3. Decide if a single mixed index or separate indexes make maintenance easier.
