const cdcEvents = [
  { op: 'insert', id: 1, price: 10 },
  { op: 'update', id: 1, price: 12 }
];

const index = new Map();

cdcEvents.forEach((event) => {
  if (event.op === 'delete') {
    index.delete(event.id);
  } else {
    index.set(event.id, event.price);
  }
});

console.log('Indexed price for id=1:', index.get(1));
// Output:
// Indexed price for id=1: 12
