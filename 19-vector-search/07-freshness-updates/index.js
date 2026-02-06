function markUpdate(docId, version) {
  return { docId, version, action: 'reembed' };
}

console.log(markUpdate('FAQ-9', 3));
// Output: { docId: 'FAQ-9', version: 3, action: 'reembed' }
