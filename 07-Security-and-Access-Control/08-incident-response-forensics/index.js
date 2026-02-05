function incidentChecklist(event) {
  return [
    `Revoke credentials for ${event.credential}`,
    'Snapshot affected indexes',
    'Notify stakeholders'
  ];
}

console.log(incidentChecklist({ credential: 'api-key-123' }));
// Output:
// [ 'Revoke credentials for api-key-123', 'Snapshot affected indexes', 'Notify stakeholders' ]
