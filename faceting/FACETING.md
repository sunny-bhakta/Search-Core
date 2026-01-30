## Faceting: Concepts and Use Case

Faceting is a search technique that allows users to filter and refine search results based on specific attributes or categories, called facets. Common facets include categories, tags, authors, dates, or any metadata associated with the data.

### Concepts
- **Facets:** Attributes or fields you can filter by (e.g., brand, price, color).
- **Faceted Navigation:** The UI/UX that lets users select filters to narrow down results.
- **Multi-select:** Users can select multiple values within a facet (e.g., "red" and "blue" colors).
- **Hierarchical Facets:** Facets with parent-child relationships (e.g., Category > Subcategory).

### Use Case
Suppose you have an e-commerce website. When a user searches for "shoes," faceting allows them to filter results by:
- Brand (Nike, Adidas, Puma)
- Price range ($50–$100, $100–$200)
- Size (8, 9, 10)
- Color (Black, White, Red)
- Customer ratings

This helps users quickly find products that match their preferences, improving the search experience and increasing conversion rates.

### Code Example: Simple Faceting in JavaScript

Suppose you have a list of products and want to facet by color and brand:

```js
const products = [
	{ name: 'Shoe A', brand: 'Nike', color: 'Red' },
	{ name: 'Shoe B', brand: 'Adidas', color: 'Blue' },
	{ name: 'Shoe C', brand: 'Nike', color: 'Blue' },
	{ name: 'Shoe D', brand: 'Puma', color: 'Red' },
];

function facetBy(products, facet) {
	return products.reduce((acc, product) => {
		const key = product[facet];
		acc[key] = (acc[key] || 0) + 1;
		return acc;
	}, {});
}

console.log('Facet by color:', facetBy(products, 'color'));
console.log('Facet by brand:', facetBy(products, 'brand'));
```

**Output:**
```
Facet by color: { Red: 2, Blue: 2 }
Facet by brand: { Nike: 2, Adidas: 1, Puma: 1 }
```
