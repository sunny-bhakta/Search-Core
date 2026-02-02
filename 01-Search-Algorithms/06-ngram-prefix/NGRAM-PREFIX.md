# N-Gram & Prefix Search

## Use Case
- Autocomplete and search-as-you-type features in search engines and text editors
- Spell checking and correction
- DNA sequence analysis in bioinformatics
- Plagiarism detection
- Language modeling and text prediction

## History
- N-gram models date back to the 1950s in linguistics and information theory
- Widely adopted in natural language processing (NLP) since the 1980s
- Prefix search became popular with the rise of interactive search interfaces and large-scale search engines

## Production Applications
- Google Search and other web search engines (autocomplete)
- IDEs and code editors (intelligent code completion)
- Mobile keyboards (predictive text)
- E-commerce platforms (product search suggestions)
- Genomics research tools

## Pros
- Fast and efficient for short queries and large datasets
- Simple to implement and scale
- Supports fuzzy matching and partial word search
- Useful for languages without clear word boundaries

## Cons
- Can produce many irrelevant matches for very short prefixes or n-grams
- Does not capture semantic meaning or context
- Memory intensive for large n-gram sizes
- Quality depends on n-gram size and corpus

## Example (Node.js)
```javascript
// Simple prefix search example
const documents = [
  "apple",
  "application",
  "banana",
  "bandana",
  "apricot"
];
const prefix = "app";
const results = documents.filter(doc => doc.startsWith(prefix));
console.log("Prefix search results:", results);
// Output:
// Prefix search results: [ 'apple', 'application' ]

// Simple n-gram generation (bigrams)
function ngrams(text, n) {
  const grams = [];
  for (let i = 0; i <= text.length - n; i++) {
    grams.push(text.slice(i, i + n));
  }
  return grams;
}
console.log("Bigrams for 'apple':", ngrams("apple", 2));
// Output:
// Bigrams for 'apple': [ 'ap', 'pp', 'pl', 'le' ]
```
