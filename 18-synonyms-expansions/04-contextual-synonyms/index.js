function contextualExpand(query, context, rules) {
  const key = `${query}:${context}`;
  return [query, ...(rules[key] || [])];
}

const rules = { 'apple:produce': ['gala', 'fuji'] };
console.log(contextualExpand('apple', 'produce', rules));
// Output: ['apple', 'gala', 'fuji']
