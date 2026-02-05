function agentTurn(userMessage) {
  const clarifyingQuestion = 'Do you prefer mesh or cushioned support?';
  const filteredResults = [
    { name: 'EcoMesh Chair', price: 279 },
    { name: 'GreenCushion Chair', price: 289 }
  ];
  return {
    userMessage,
    clarifyingQuestion,
    filteredResults,
    nextAction: 'Set restock alert if user confirms a product.'
  };
}

console.log(agentTurn('Find me eco-friendly desk chairs under $300.'));
// Output: {
//   userMessage: 'Find me eco-friendly desk chairs under $300.',
//   clarifyingQuestion: 'Do you prefer mesh or cushioned support?',
//   filteredResults: [ ... ],
//   nextAction: 'Set restock alert if user confirms a product.'
// }
