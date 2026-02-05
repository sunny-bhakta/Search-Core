function searchProducts({ cursor = 0, pageSize = 2 }) {
class ProductSearch {
  constructor(mockData) {
    this.mockData = mockData;
  }
  
  searchProducts({ cursor = 0, pageSize = 2 }) {
    const page = this.mockData.slice(cursor, cursor + pageSize);
    const nextCursor = cursor + pageSize < this.mockData.length ? cursor + pageSize : null;
    return { data: page, nextCursor };
  }
}

const productSearch = new ProductSearch(['Laptop', 'Tablet', 'Phone', 'Headphones']);
const firstPage = productSearch.searchProducts({ cursor: 0 });
console.log(firstPage);
// Output:
// { data: [ 'Laptop', 'Tablet' ], nextCursor: 2 }
}

const firstPage = searchProducts({ cursor: 0 });
console.log(firstPage);
// Output:
// { data: [ 'Laptop', 'Tablet' ], nextCursor: 2 }
