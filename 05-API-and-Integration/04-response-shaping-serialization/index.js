const documents = [
  { id: 1, title: 'Laptop', price: 899, inventory: 12 },
  { id: 2, title: 'Tablet', price: 399, inventory: 5 }
];

function shapeResponse(fields) {
  const projected = documents.map((doc) => {
    const view = {};
    fields.forEach((field) => {
      view[field] = doc[field];
    });
    return view;
  });
  return { data: projected, meta: { count: projected.length } };
}

const shaped = shapeResponse(['title', 'price']);
console.log(JSON.stringify(shaped));
// Output:
// {"data":[{"title":"Laptop","price":899},{"title":"Tablet","price":399}],"meta":{"count":2}}
