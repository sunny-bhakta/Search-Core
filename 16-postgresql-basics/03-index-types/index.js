function chooseIndex(columnType) {
  if (columnType === 'text[]' || columnType === 'jsonb') return 'GIN';
  if (columnType === 'geometry') return 'GiST';
  return 'B-tree';
}

console.log(chooseIndex('text[]'));
// Output: 'GIN'
