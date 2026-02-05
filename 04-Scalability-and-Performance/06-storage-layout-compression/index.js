// const tiers = [
//   { name: 'hot', codec: 'LZ4', reductionFactor: 1.4, rawTb: 14, days: 7 },
//   { name: 'cold', codec: 'ZSTD', reductionFactor: 2.2, rawTb: 14, days: 30 },
// ];

// function compressedSize(tier) {
//   return +(tier.rawTb / tier.reductionFactor).toFixed(2);
// }

// function summarizeTiers(tierList) {
//   console.table(
//     tierList.map((tier) => ({
//       tier: tier.name,
//       codec: tier.codec,
//       daysRetained: tier.days,
//       compressedTb: compressedSize(tier),
//     }))
//   );
// }

// if (require.main === module) {
//   summarizeTiers(tiers);
// }

// module.exports = { tiers, compressedSize };

// /*
// Sample output
// =============
// ┌─────────┬──────┬───────┬──────────────┬─────────────┐
// │ (index) │ tier │ codec │ daysRetained │ compressedTb│
// ├─────────┼──────┼───────┼──────────────┼─────────────┤
// │    0    │'hot' │'LZ4'  │      7       │   10        │
// │    1    │'cold'│'ZSTD' │      30      │   6.36      │
// └─────────┴──────┴───────┴──────────────┴─────────────┘
// */
