function choosePlan(stats) {
  return stats.products < stats.inventory ? 'scan_inventory_first' : 'scan_products_first';
}

console.log(choosePlan({ products: 1000, inventory: 100000 }));
// Output:
// scan_inventory_first
