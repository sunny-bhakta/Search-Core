const policies = {
  support: ['public', 'internal'],
  admin: ['public', 'internal', 'confidential']
};

function canView(role, label) {
  return policies[role]?.includes(label) ?? false;
}

console.log(canView('support', 'confidential'));
// Output:
// false
