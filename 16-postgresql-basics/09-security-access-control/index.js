function enforceRls(rowTenant, userTenant) {
  return rowTenant === userTenant ? 'visible' : 'hidden';
}

console.log(enforceRls('A', 'B'));
// Output: 'hidden'
