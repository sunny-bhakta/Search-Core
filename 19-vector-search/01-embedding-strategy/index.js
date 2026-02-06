function fakeEmbed(text) {
  const vector = Array(4).fill(0).map((_, i) => +(text.length / (i + 2)).toFixed(2));
  return { text, vector };
}

console.log(fakeEmbed('Refund my order'));
// Output: { text: 'Refund my order', vector: [6.5, 4.33, 3.25, 2.6] }
