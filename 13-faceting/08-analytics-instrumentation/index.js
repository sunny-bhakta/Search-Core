function trackFacetEvent(event) {
  return `event=${event.type}; facet=${event.facet}; value=${event.value}`;
}

console.log(trackFacetEvent({ type: 'apply', facet: 'color', value: 'red' }));
// Output: 'event=apply; facet=color; value=red'
