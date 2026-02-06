function tokenize(text) {
  return text
    .normalize('NFD')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
}

console.log(tokenize('Best-in-class café!'));
// Output: ['best', 'in', 'class', 'cafe']
