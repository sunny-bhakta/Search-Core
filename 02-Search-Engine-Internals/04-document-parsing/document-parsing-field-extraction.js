// Document Parsing & Field Extraction
// Prototype parsing HTML + JSON inputs into consistent fields.

const { JSDOM } = require('jsdom');

const inputDocs = [
  {
    type: 'html',
    label: 'Product Launch HTML',
    payload: `
      <article>
        <h1>Launch Notes</h1>
        <p data-author="sunny" data-tags="release,search">We shipped search boosts.</p>
        <time datetime="2024-05-01">May 1</time>
      </article>
    `,
  },
  {
    type: 'json',
    label: 'Catalog JSON',
    payload: {
      title: 'SKU 123',
      body: 'Noise-cancelling headphones',
      tags: ['audio', 'pro'],
      author: 'catalog-team',
      updated_at: '2024-05-02',
    },
  },
];

function parseHtml(htmlString) {
  const dom = new JSDOM(htmlString);
  const doc = dom.window.document;
  const title = doc.querySelector('h1')?.textContent?.trim() || 'Untitled';
  const body = doc.querySelector('p')?.textContent?.trim() || '';
  const author = doc.querySelector('p')?.getAttribute('data-author') || 'unknown';
  const tagsAttr = doc.querySelector('p')?.getAttribute('data-tags') || '';
  const tags = tagsAttr
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
  const updatedAt = doc.querySelector('time')?.getAttribute('datetime') || null;

  return {
    title,
    body,
    author,
    tags,
    updatedAt,
    source: 'html',
  };
}

function parseJson(jsonPayload) {
  return {
    title: jsonPayload.title || 'Untitled',
    body: jsonPayload.body || '',
    author: jsonPayload.author || 'unknown',
    tags: Array.isArray(jsonPayload.tags) ? jsonPayload.tags : [],
    updatedAt: jsonPayload.updated_at || null,
    source: 'json',
  };
}

function normalizeDoc(doc) {
  if (doc.type === 'html') {
    return parseHtml(doc.payload);
  }
  if (doc.type === 'json') {
    return parseJson(doc.payload);
  }
  throw new Error(`Unsupported type: ${doc.type}`);
}

function DocumentParsingFieldExtractionDemo() {
  const parsed = inputDocs.map((doc) => ({
    label: doc.label,
    fields: normalizeDoc(doc),
  }));

  console.log('Document Parsing & Field Extraction Demo');
  console.log('==========================================\n');
  parsed.forEach(({ label, fields }) => {
    console.log(label);
    console.log(fields);
    console.log();
  });

  return parsed;
}

/*
Sample output:

Document Parsing & Field Extraction Demo
==========================================

Product Launch HTML
{
  title: 'Launch Notes',
  body: 'We shipped search boosts.',
  author: 'sunny',
  tags: [ 'release', 'search' ],
  updatedAt: '2024-05-01',
  source: 'html'
}

Catalog JSON
{
  title: 'SKU 123',
  body: 'Noise-cancelling headphones',
  author: 'catalog-team',
  tags: [ 'audio', 'pro' ],
  updatedAt: '2024-05-02',
  source: 'json'
}
*/

if (require.main === module) {
  DocumentParsingFieldExtractionDemo();
}

module.exports = { DocumentParsingFieldExtractionDemo, normalizeDoc };
