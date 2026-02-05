const endpoints = [
  { name: 'searchProducts', style: 'REST', path: '/search/products', params: ['q', 'limit', 'offset'] },
  { name: 'searchProducts', style: 'GraphQL', path: 'query searchProducts($q)', params: ['q'] }
];

function pickSimplestEndpoint(requestNeeds) {
  return endpoints.find((endpoint) => requestNeeds.includes(endpoint.style)) || endpoints[0];
}

const partnerNeeds = ['REST', 'low-latency'];
const chosenEndpoint = pickSimplestEndpoint(partnerNeeds);

console.log(`Chosen endpoint: ${chosenEndpoint.style} ${chosenEndpoint.path}`);
// Output:
// Chosen endpoint: REST /search/products
