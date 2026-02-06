function maintenancePlan(day) {
  return day === 'sunday'
    ? ['vacuum analyze', 'base backup']
    : ['monitor'];
}

console.log(maintenancePlan('sunday'));
// Output: ['vacuum analyze', 'base backup']
