function bucketFacet(value) {
  const map = {
    red: 'red family',
    crimson: 'red family',
    blue: 'blue family'
  };
  return map[value] || 'other';
}

console.log(bucketFacet('crimson'));
// Output: 'red family'
