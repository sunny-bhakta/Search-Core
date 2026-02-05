const entities = [
  {
    name: 'Product',
    requiredFields: ['id', 'title', 'price'],
    optionalFields: ['brand', 'categoryId', 'inventory'],
    source: 'catalog-db',
  },
  {
    name: 'Review',
    requiredFields: ['id', 'productId', 'rating', 'body'],
    optionalFields: ['locale', 'verifiedPurchase'],
    source: 'reviews-service',
  },
];

const relationships = [
  { from: 'Review', to: 'Product', type: 'belongs_to', via: 'productId' },
];

const sampleDocs = [
  {
    id: 'prod-101',
    type: 'product',
    title: 'Trail Shoes',
    price: 89.99,
  },
  {
    id: 'rev-5501',
    type: 'review',
    productId: 'prod-101',
    rating: 4,
    body: 'Great grip!',
  },
];

function getIndexDocuments() {
  return sampleDocs;
}

function describeModel() {
  console.table(entities.map((entity) => ({
    Entity: entity.name,
    Required: entity.requiredFields.join(', '),
    Optional: entity.optionalFields.join(', ') || '(none)',
    Source: entity.source,
  })));

  console.table(relationships.map((rel) => ({
    From: rel.from,
    To: rel.to,
    Type: rel.type,
    Key: rel.via,
  })));

  console.log('\nSample index documents (note the type field):');
  console.table(getIndexDocuments().map((doc) => ({
    id: doc.id,
    type: doc.type,
    link: doc.productId || '(n/a)',
  })));
}

if (require.main === module) {
  describeModel();
}

module.exports = { entities, relationships, getIndexDocuments, describeModel };

/*
Sample Output
=============
┌─────────┬──────────┬─────────────────────────────┬─────────────────────────────────┬──────────────┐
│ (index) │ Entity   │          Required           │             Optional            │    Source    │
├─────────┼──────────┼─────────────────────────────┼─────────────────────────────────┼──────────────┤
│    0    │ 'Product'│ 'id, title, price'          │ 'brand, categoryId, inventory'  │ 'catalog-db' │
│    1    │ 'Review' │ 'id, productId, rating, body'│ 'locale, verifiedPurchase'     │'reviews-service'│
└─────────┴──────────┴─────────────────────────────┴─────────────────────────────────┴──────────────┘

┌─────────┬─────────┬─────────┬──────────────┬──────────┐
│ (index) │  From   │   To    │     Type     │   Key    │
├─────────┼─────────┼─────────┼──────────────┼──────────┤
│    0    │ 'Review'│ 'Product'│ 'belongs_to'│'productId'│
└─────────┴─────────┴─────────┴──────────────┴──────────┘

Sample index documents (note the type field):
┌─────────┬────────────┬───────────┬────────────┐
│ (index) │    id      │   type    │    link    │
├─────────┼────────────┼───────────┼────────────┤
│    0    │ 'prod-101' │ 'product' │  '(n/a)'   │
│    1    │ 'rev-5501' │ 'review'  │ 'prod-101' │
└─────────┴────────────┴───────────┴────────────┘
*/
