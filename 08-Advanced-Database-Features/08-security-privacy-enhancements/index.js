function routeByRegion(userRegion) {
  const clusters = { EU: 'cluster-eu', US: 'cluster-us' };
  return clusters[userRegion] || 'cluster-global';
}

console.log(routeByRegion('EU'));
// Output:
// cluster-eu
