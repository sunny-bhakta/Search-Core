const baseDocuments = [
  {
    id: 'p-100',
    categoryId: 'cat-01',
    sellerId: 'seller-9',
    price: 25,
    salesLast7Days: 42,
  },
];

const lookups = {
  categories: {
    'cat-01': 'Outdoor Gear',
  },
  sellers: {
    'seller-9': { rating: 4.8, tier: 'gold' },
  },
};

function denormalize(doc) {
  const categoryName = lookups.categories[doc.categoryId] || 'Unknown';
  const seller = lookups.sellers[doc.sellerId] || { rating: 0, tier: 'new' };

  return {
    ...doc,
    categoryName,
    sellerRating: seller.rating,
    sellerTier: seller.tier,
    popularityScore: Number((doc.salesLast7Days / (doc.price || 1)).toFixed(2)),
  };
}

function run() {
  const enriched = baseDocuments.map(denormalize);
  console.table(enriched);
}

if (require.main === module) {
  run();
}

module.exports = { baseDocuments, lookups, denormalize };

/*
Sample Output
=============
┌─────────┬─────────┬────────────┬───────────┬───────┬────────────────┬───────────────┬────────────┬────────────────┐
│ (index) │   id    │ categoryId │ sellerId  │ price │ salesLast7Days │ categoryName  │ sellerTier │ popularityScore │
├─────────┼─────────┼────────────┼───────────┼───────┼────────────────┼───────────────┼────────────┼────────────────┤
│    0    │ 'p-100' │  'cat-01'  │ 'seller-9'│  25   │       42       │ 'Outdoor Gear'│   'gold'   │      1.68       │
└─────────┴─────────┴────────────┴───────────┴───────┴────────────────┴───────────────┴────────────┴────────────────┘
*/
