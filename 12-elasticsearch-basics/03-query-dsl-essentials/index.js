// Simulates building a bool query payload with aggregations.
const buildQuery = ({ text, category, minPrice, brandAgg }) => ({
  query: {
    bool: {
      must: [{ match: { title: text } }],
      filter: [
        { term: { "category.keyword": category } },
        { range: { price: { gte: minPrice } } }
      ]
    }
  },
  aggs: {
    top_brands: { terms: { field: "brand.keyword", size: brandAgg } }
  }
});

const query = buildQuery({
  text: "wireless headphones",
  category: "electronics",
  minPrice: 50,
  brandAgg: 3
});

console.log("Query DSL payload:", JSON.stringify(query, null, 2));

const mockExplain = {
  value: 5.42,
  description: "weight(title:wildfire in 0) [PerFieldSimilarity], result of:",
  details: [
    { value: 2.1, description: "term frequency boost" },
    { value: 1.8, description: "recency decay" },
    { value: 1.52, description: "brand boost" }
  ]
};

console.log("Explain summary:", mockExplain);
