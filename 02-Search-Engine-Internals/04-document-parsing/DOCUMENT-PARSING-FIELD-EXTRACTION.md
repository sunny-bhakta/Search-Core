# Document Parsing & Field Extraction
- Document parsing just means turning messy files (HTML, PDFs, JSON) into clean fields.
- Field extraction says which parts become searchable text, which become filters, and which stay metadata.
- It’s basically ETL for search: read the source, clean it up, map it to your schema.

## Tiny Example (Input → Output)

```
Input HTML:
	<article>
		<h1>Launch Notes</h1>
		<p data-author="Mark">We shipped search boosts.</p>
	</article>

Input JSON:
	{
		"title": "SKU 123",
		"body": "Noise-cancelling headphones",
		"tags": ["audio", "pro"],
		"price": 199
	}

Parser output:
{
	title: 'Launch Notes',
	body: 'We shipped search boosts.',
	author: 'Mark',
	tags: ['audio', 'pro'],
	price: 199
}
```

Both sources end up as the same field set, so the index can treat them consistently.

## Use Cases
- Crawl web pages and split them into title, body, and URL fields.
- Load product feeds (JSON/CSV) into clean e-commerce documents.
- Convert PDFs, docs, or emails into searchable text plus metadata.
- Pull out author/date/tag entities for filters or facets.
- Prep log events so SIEM dashboards can query fields instantly.

## History
- 1990s: Web crawlers hacked HTML with regex and brittle rules.
- 2000s: Open tools like Boilerpipe and Apache Tika handled more formats.
- 2010s: Schema.org/JSON-LD made structured data easier to detect.
- 2020s: ML parsers auto-detect fields, entities, and layouts.

## Production Applications
- Google News / Bing ingest pipelines separating headline, summary, images
- Slack/Teams indexing attachments via OCR + Tika
- Shopify/Amazon parsing merchant feeds into normalized SKU fields
- Legal discovery tools extracting case metadata from PDFs

## Pros
- Good parsing drastically improves relevance, filtering, and highlights
- Enables schema evolution (new fields) without rethinking the entire index
- Rich metadata supports analytics, personalization, and compliance

## Cons
- HTML/PDF parsing is brittle—minor markup changes can break extractors
- OCR and entity extraction can be slow/expensive at scale
- Schema drift between data sources requires ongoing mapping logic
- Mistakes propagate downstream (bad dates, missing IDs)

## Hands-on Objectives
1. Build a parser that ingests both JSON and HTML fixtures, extracting `title`, `body`, `tags`, and `metadata` fields.
2. Add validation + fallback logic (e.g., default values, trimming overly long fields).
3. Capture parsing metrics (docs/sec, failures) and log sample errors for debugging.


