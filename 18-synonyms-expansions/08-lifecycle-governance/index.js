function logChange(term, editor) {
  return `${term} updated by ${editor}`;
}

console.log(logChange('telly -> television', 'content-team'));
// Output: 'telly -> television updated by content-team'
