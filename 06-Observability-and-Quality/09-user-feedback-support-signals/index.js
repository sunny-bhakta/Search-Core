const feedback = [
  { type: 'ticket', tag: 'search_slow' },
  { type: 'ticket', tag: 'search_slow' },
  { type: 'ticket', tag: 'typo' }
];

const slowTickets = feedback.filter((item) => item.tag === 'search_slow').length;
console.log(`Slow search tickets: ${slowTickets}`);
// Output:
// Slow search tickets: 2
