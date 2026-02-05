// const crypto = require('crypto');

// const store = new Map();

// function upsert(doc) {
//   const current = store.get(doc.id);
//   if (current && current.version > doc.version) {
//     return { applied: false, reason: 'stale-version' };
//   }

//   const normalizedTitle = doc.title.trim().toLowerCase();
//   const digest = crypto.createHash('sha1').update(normalizedTitle).digest('hex');

//   for (const existing of store.values()) {
//     if (existing.digest === digest && existing.id !== doc.id) {
//       return { applied: false, reason: 'duplicate-detected' };
//     }
//   }

//   store.set(doc.id, { ...doc, title: normalizedTitle, digest });
//   return { applied: true };
// }

// function demo() {
//   console.log(upsert({ id: 'p-1', version: 1, title: '  Red Jacket  ' }));
//   console.log(upsert({ id: 'p-1', version: 0, title: 'red jacket' })); // stale
//   console.log(upsert({ id: 'p-2', version: 1, title: 'Red Jacket' })); // duplicate
// }

// if (require.main === module) {
//   demo();
// }

// module.exports = { upsert, store };

// /*
// Sample Output
// =============
// { applied: true }
// { applied: false, reason: 'stale-version' }
// { applied: false, reason: 'duplicate-detected' }
// */
