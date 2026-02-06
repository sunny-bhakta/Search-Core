function enforceAcl(doc, tenant, role) {
  const tenantMatch = doc.tenant === tenant;
  const roleMatch = doc.roles.includes(role);
  return tenantMatch && roleMatch;
}

const allowed = enforceAcl(
  { id: 'doc-1', tenant: 'acme', roles: ['manager', 'analyst'] },
  'acme',
  'manager'
);

console.log({ allowed });
// Output: { allowed: true }
