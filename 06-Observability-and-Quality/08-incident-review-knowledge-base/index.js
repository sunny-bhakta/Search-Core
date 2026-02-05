function createIncidentSummary({ id, impact, rootCause }) {
  return `Incident ${id}: impact=${impact}, rootCause=${rootCause}`;
}

console.log(createIncidentSummary({ id: 'INC-42', impact: 'EU search outage 12m', rootCause: 'cache TTL' }));
// Output:
// Incident INC-42: impact=EU search outage 12m, rootCause=cache TTL
