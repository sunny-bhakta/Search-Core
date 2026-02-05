const documents = [
  { id: 1, title: 'HR Policy', privacyLevel: 'internal' },
  { id: 2, title: 'Support Playbook', privacyLevel: 'support' },
  { id: 3, title: 'Executive Forecast', privacyLevel: 'executive' }
];

function filterByRole(role) {
  const visibilityOrder = ['public', 'support', 'internal', 'executive'];
  const allowedIndex = visibilityOrder.indexOf(role);
  return documents.filter((doc) => visibilityOrder.indexOf(doc.privacyLevel) <= allowedIndex);
}

const supportView = filterByRole('support');
console.log('Support can see:', supportView.map((doc) => doc.title));
// Output:
// Support can see: Support Playbook
