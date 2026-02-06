function parseQuery(input) {
  return {
    phrases: (input.match(/"(.*?)"/g) || []).map(str => str.replace(/"/g, '')),
    excludes: (input.match(/-\w+/g) || []).map(str => str.slice(1))
  };
}

console.log(parseQuery('"wireless mouse" AND -refurbished'));
// Output: { phrases: ['wireless mouse'], excludes: ['refurbished'] }
