// const crypto = require('crypto');

// const documents = [
//   {
//     id: 'prod-1-en',
//     tenantId: 'tenant-a',
//     locale: 'en',
//     title: 'Trail Shoes',
//     titleLocalized: { en: 'Trail Shoes', es: 'Zapatillas de Trail' },
//   },
//   {
//     id: 'prod-1-es',
//     tenantId: 'tenant-a',
//     locale: 'es',
//     title: 'Zapatillas de Trail',
//     titleLocalized: { en: 'Trail Shoes', es: 'Zapatillas de Trail' },
//   },
// ];

// function shardForTenant(tenantId, shardCount = 4) {
//   const hash = crypto.createHash('md5').update(tenantId).digest('hex');
//   const numeric = parseInt(hash.slice(0, 8), 16);
//   return numeric % shardCount;
// }

// function query({ tenantId, locale }) {
//   return documents.filter(
//     (doc) => doc.tenantId === tenantId && doc.locale === locale,
//   );
// }

// if (require.main === module) {
//   console.log('tenant-a shard:', shardForTenant('tenant-a'));
//   console.log('tenant-b shard:', shardForTenant('tenant-b'));
//   console.log('Results for tenant-a/es:', query({ tenantId: 'tenant-a', locale: 'es' }));
// }

// module.exports = { documents, shardForTenant, query };

// /*
// Sample Output
// =============
// tenant-a shard: 1
// tenant-b shard: 3
// Results for tenant-a/es: [
//   {
//     id: 'prod-1-es',
//     tenantId: 'tenant-a',
//     locale: 'es',
//     title: 'Zapatillas de Trail',
//     titleLocalized: { en: 'Trail Shoes', es: 'Zapatillas de Trail' }
//   }
// ]
// */
