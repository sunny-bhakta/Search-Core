function bucketPrices(prices, size) {
  const buckets = {};
  prices.forEach(price => {
    const upper = Math.ceil(price / size) * size;
    const lower = upper - size;
    const label = `${lower}-${upper}`;
    buckets[label] = (buckets[label] || 0) + 1;
  });
  return buckets;
}

console.log(bucketPrices([10, 20, 40, 90], 25));
// Output: { '0-25': 2, '25-50': 1, '75-100': 1 }
