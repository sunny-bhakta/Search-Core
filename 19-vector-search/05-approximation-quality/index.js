function recallAtK(trueSet, approxSet) {
  const hits = approxSet.filter(id => trueSet.includes(id)).length;
  return +(hits / trueSet.length).toFixed(2);
}

console.log(recallAtK(['a', 'b', 'c'], ['a', 'x', 'c']));
// Output: 0.67
