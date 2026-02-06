function nextPageToken(lastDocId) {
  return Buffer.from(lastDocId).toString('base64');
}

console.log(nextPageToken('doc-003'));
// Output: 'ZG9jLTAwMw=='
