// Security & Access Control
// Enforce doc-level ACLs and field-level masks for different users.

const DOCUMENTS = [
  {
    id: 'doc_1',
    visibility: ['public'],
    fields: {
      title: 'Checking account overview',
      balance: 100,
      notes: 'General info',
    },
  },
  {
    id: 'doc_2',
    visibility: ['admin'],
    fields: {
      title: 'High net-worth client',
      balance: 500,
      notes: 'VIP service',
    },
  },
];

const FIELD_MASKS = {
  balance: ['admin'],
};

const USERS = {
  alice: { roles: ['public'] },
  bob: { roles: ['public', 'admin'] },
};

function canSeeDoc(doc, roles) {
  return doc.visibility.some((allowed) => roles.includes(allowed));
}

function maskFields(fields, roles) {
  const result = {};
  for (const [key, value] of Object.entries(fields)) {
    const requiredRoles = FIELD_MASKS[key];
    if (!requiredRoles || requiredRoles.some((role) => roles.includes(role))) {
      result[key] = value;
    } else {
      result[key] = '***';
    }
  }
  return result;
}

function runQuery(userId) {
  const user = USERS[userId];
  const roles = user?.roles ?? [];
  const visibleDocs = DOCUMENTS.filter((doc) => canSeeDoc(doc, roles));
  return visibleDocs.map((doc) => ({
    docId: doc.id,
    fields: maskFields(doc.fields, roles),
  }));
}

function SecurityAccessControlDemo() {
  console.log('Security & Access Control Demo');
  console.log('================================');

  const aliceResults = runQuery('alice');
  const bobResults = runQuery('bob');

  console.log('\nAlice (roles: public)');
  console.dir(aliceResults, { depth: null });

  console.log('\nBob (roles: public, admin)');
  console.dir(bobResults, { depth: null });

  return { aliceResults, bobResults };
}

if (require.main === module) {
  SecurityAccessControlDemo();
}

/* Sample Output (node security-access-control.js)

Security & Access Control Demo
================================

Alice (roles: public)
[ { docId: 'doc_1', fields: { title: 'Checking account overview', balance: '***', notes: 'General info' } } ]

Bob (roles: public, admin)
[
  { docId: 'doc_1', fields: { title: 'Checking account overview', balance: 100, notes: 'General info' } },
  { docId: 'doc_2', fields: { title: 'High net-worth client', balance: 500, notes: 'VIP service' } }
]

*/

module.exports = { SecurityAccessControlDemo, runQuery };
