function validateResponse(response) {
  const hasDataArray = Array.isArray(response.data);
  const hasMetaObject = typeof response.meta === 'object';
  return hasDataArray && hasMetaObject;
}

const apiResponse = { data: ['Laptop'], meta: { total: 1 } };
console.log('Schema valid:', validateResponse(apiResponse));
// Output:
// Schema valid: true
