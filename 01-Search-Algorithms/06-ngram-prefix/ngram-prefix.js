// Note:
// The output of prefix search and n-gram generation are not directly related.
// - Prefix search returns all words that start with a given prefix from a list.
// - N-gram generation splits a single word into overlapping substrings of length n.
// They serve different purposes:
//   - Prefix search is for matching beginnings.
//   - N-grams are for pattern and fuzzy matching.

// How n-grams relate to prefix search:
// - Prefix search finds words that start with a given substring (prefix).
// - N-grams break a word into all possible substrings of length n.
// - For example, the bigrams of 'apple' are: ['ap', 'pp', 'pl', 'le'].
// - If you search for the prefix 'ap', it matches the first bigram 'ap'.
// - N-grams can be used for fuzzy matching, typo tolerance, and partial search, while prefix search is for exact beginnings.

// How n-grams are related to each other:
// - Each n-gram overlaps with the next by n-1 characters.
// - For 'apple' and bigrams (n=2):
//     'ap' (positions 0-1), 'pp' (1-2), 'pl' (2-3), 'le' (3-4)
// - This overlapping structure helps capture local patterns in text and is useful for matching even if there are small changes or typos.

// Prefix Search Example
const documents = [
  "apple",
  "application",
  "banana",
  "bandana",
  "apricot"
];

const prefix = "app";
const prefixResults = documents.filter(doc => doc.startsWith(prefix));
console.log("Prefix search results:", prefixResults);
// Output:
// Prefix search results: [ 'apple', 'application' ]

// N-Gram Generation Example (bigrams)
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
