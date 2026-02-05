const sensitivityMap = {
  id: 'low',
  email: 'high',
  phone: 'high',
  title: 'low',
};

const changeLog = [];

function tagFields(schema) {
  return schema.map((field) => ({
    field,
    sensitivity: sensitivityMap[field] || 'unknown',
  }));
}

function logChange({ ticketId, description }) {
  const entry = { ticketId, description, timestamp: new Date().toISOString() };
  changeLog.push(entry);
  return entry;
}

if (require.main === module) {
  console.table(tagFields(['id', 'title', 'email']));
  console.log(logChange({ ticketId: 'SEC-42', description: 'Encrypt email field' }));
}

module.exports = { tagFields, logChange, changeLog };

/*
Sample Output
=============
┌─────────┬────────┬────────────┐
│ (index) │ field  │ sensitivity│
├─────────┼────────┼────────────┤
│    0    │ 'id'   │   'low'    │
│    1    │ 'title'│   'low'    │
│    2    │ 'email'│   'high'   │
└─────────┴────────┴────────────┘
{ ticketId: 'SEC-42', description: 'Encrypt email field', timestamp: '2026-02-04T12:34:56.789Z' }
*/
