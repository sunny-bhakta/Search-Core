function updateTsvector(title, body) {
  const tokens = `${title} ${body}`.toLowerCase().split(' ');
  return Array.from(new Set(tokens));
}

console.log(updateTsvector('Reset Lock', 'Steps to reset smart lock quickly'));
// Output: ['reset', 'lock', 'steps', 'to', 'smart', 'quickly']
