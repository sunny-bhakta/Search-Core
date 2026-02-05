const userTagBoosts = { graphql: 2, react: 1 };

function personalizeScore(baseScore, tag) {
  return baseScore + (userTagBoosts[tag] || 0);
}

console.log('Personalized score:', personalizeScore(5, 'graphql'));
// Output:
// Personalized score: 7
