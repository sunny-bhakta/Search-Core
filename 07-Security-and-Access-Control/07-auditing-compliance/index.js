const auditLog = [];

function recordAudit(entry) {
  auditLog.push({ ...entry, timestamp: new Date().toISOString() });
}

recordAudit({ actor: 'admin1', action: 'role_change', target: 'user123' });
console.log(auditLog);
// Output:
// [ { actor: 'admin1', action: 'role_change', target: 'user123', timestamp: '2026-02-05T...' } ]
