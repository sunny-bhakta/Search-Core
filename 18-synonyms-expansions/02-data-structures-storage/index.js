const fs = require('fs');

function diffSynonyms(oldList, newList) {
  const removed = oldList.filter(item => !newList.includes(item));
  const added = newList.filter(item => !oldList.includes(item));
  return { added, removed };
}

console.log(diffSynonyms(['tv'], ['tv', 'television']));
// Output: { added: ['television'], removed: [] }
