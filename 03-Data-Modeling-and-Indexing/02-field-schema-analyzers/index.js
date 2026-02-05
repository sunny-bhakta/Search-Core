const schema = [
  {
    field: 'title',
    type: 'text',
    analyzer: 'standard',
    uses: ['scoring', 'highlight'],
    flags: { index: true, store: false, docValues: false, norms: true },
  },
  {
    field: 'brand',
    type: 'keyword',
    analyzer: 'keyword',
    uses: ['filter', 'facet'],
    flags: { index: true, store: true, docValues: true, norms: false },
  },
  {
    field: 'price',
    type: 'float',
    analyzer: null,
    uses: ['sort', 'filter'],
    flags: { index: true, store: false, docValues: true, norms: false },
  },
];

const sampleDocument = {
  id: 'prod-101',
  title: 'Trail Shoes',
  brand: 'Terra',
  price: 89.99,
};

function previewSchema() {
  console.table(schema.map((entry) => ({
    Field: entry.field,
    Type: entry.type,
    Analyzer: entry.analyzer || '(none)',
    Uses: entry.uses.join(', '),
    Flags: Object.entries(entry.flags)
      .map(([key, value]) => `${key}:${value ? 'on' : 'off'}`)
      .join(' | '),
  })));
}

function showSampleDocument() {
  console.table(
    Object.entries(sampleDocument).map(([field, value]) => ({
      field,
      value,
      jsType: typeof value,
    })),
  );
}

if (require.main === module) {
  previewSchema();
  console.log('\nSample document values:');
  showSampleDocument();
}

module.exports = { schema, previewSchema, sampleDocument, showSampleDocument };

/*
Sample Output
=============
┌─────────┬────────┬────────┬───────────┬──────────────────────────────────────────┐
│ (index) │ Field  │  Type  │ Analyzer  │                 Flags                   │
├─────────┼────────┼────────┼───────────┼──────────────────────────────────────────┤
│    0    │'title' │ 'text' │'standard' │ 'index:on | store:off | docValues:off…' │
│    1    │'brand' │'keyword'│'keyword' │ 'index:on | store:on | docValues:on…'  │
│    2    │'price' │ 'float'│ '(none)'  │ 'index:on | store:off | docValues:on…' │
└─────────┴────────┴────────┴───────────┴──────────────────────────────────────────┘

Sample document values:
┌─────────┬────────────┬────────────┬────────┐
│ (index) │   field    │   value    │ jsType │
├─────────┼────────────┼────────────┼────────┤
│    0    │    'id'    │ 'prod-101' │'string'│
│    1    │  'title'   │'Trail Shoes'│'string'│
│    2    │  'brand'   │  'Terra'   │'string'│
│    3    │  'price'   │   89.99    │'number'│
└─────────┴────────────┴────────────┴────────┘
*/
