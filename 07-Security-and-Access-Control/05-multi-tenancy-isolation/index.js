const limits = { tenantA: 100, tenantB: 50 };
const usage = { tenantA: 120, tenantB: 40 };

function checkQuota(tenant) {
  return usage[tenant] <= limits[tenant] ? 'within limit' : 'throttled';
}

console.log(checkQuota('tenantA'));
// Output:
// throttled
