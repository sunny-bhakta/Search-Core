function buildExport(rowsPerPage, totalRows) {
  const pages = Math.ceil(totalRows / rowsPerPage);
  return Array.from({ length: pages }, (_, i) => `page-${i + 1}`);
}

console.log(buildExport(10000, 25000));
// Output:
// [ 'page-1', 'page-2', 'page-3' ]
