// const deadLetterQueue = [];

// async function batchIngest(docs, batchSize = 2) {
//   for (let i = 0; i < docs.length; i += batchSize) {
//     const chunk = docs.slice(i, i + batchSize);
//     await simulateWrite(chunk);
//   }
// }

// async function streamingIngest(event) {
//   await simulateWrite([event]);
// }

// async function simulateWrite(docs) {
//   docs.forEach((doc) => {
//     if (doc.shouldFail) {
//       deadLetterQueue.push({ doc, reason: 'validation-error' });
//     } else {
//       console.log('Indexed', doc.id);
//     }
//   });
//   await new Promise((resolve) => setTimeout(resolve, 50));
// }

// async function demo() {
//   await batchIngest([
//     { id: 'p-1' },
//     { id: 'p-2', shouldFail: true },
//     { id: 'p-3' },
//   ]);

//   await streamingIngest({ id: 'p-stream-1' });

//   console.log('Dead Letter Queue:', deadLetterQueue);
// }

// if (require.main === module) {
//   demo();
// }

// module.exports = { batchIngest, streamingIngest, deadLetterQueue };

// /*
// Sample Output (order may vary slightly)
// ======================================
// Indexed p-1
// Indexed p-3
// Indexed p-stream-1
// Dead Letter Queue: [ { doc: { id: 'p-2', shouldFail: true }, reason: 'validation-error' } ]
// */
