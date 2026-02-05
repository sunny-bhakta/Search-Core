function shouldHibernate(cpuPercent, hoursIdle) {
  return cpuPercent < 5 && hoursIdle >= 4;
}

console.log('Hibernate dev cluster?', shouldHibernate(3, 5));
// Output:
// Hibernate dev cluster? true
