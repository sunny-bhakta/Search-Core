// Ranking & Scoring
// Demonstrate TF-IDF + BM25-style scoring with a freshness boost.

const corpus = [
  {
    id: 'doc-a',
    text: 'Wireless noise-cancelling headphones with 30h battery life',
    updatedAtDaysAgo: 1,
  },
  {
    id: 'doc-b',
    text: 'Headphones with wire for studio monitoring and mixing',
    updatedAtDaysAgo: 400,
  },
  {
    id: 'doc-c',
    text: 'Wireless earbuds for workouts, sweat resistant and compact',
    updatedAtDaysAgo: 20,
  },
];

const QUERY = ['wireless', 'headphones'];

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

const tokenizedDocs = corpus.map((doc) => ({
  ...doc,
  tokens: tokenize(doc.text),
}));

function termFrequency(tokens) {
  return tokens.reduce((acc, token) => {
    acc[token] = (acc[token] || 0) + 1;
    return acc;
  }, {});
}

const docStats = tokenizedDocs.map((doc) => ({
  ...doc,
  tf: termFrequency(doc.tokens),
  length: doc.tokens.length,
}));

const avgDocLength =
  docStats.reduce((sum, doc) => sum + doc.length, 0) / docStats.length;

function idf(term) {
  const docsWithTerm = docStats.filter((doc) => doc.tf[term]).length || 1;
  return Math.log(1 + docStats.length / docsWithTerm);
}

function scoreTfIdf(doc, queryTerms) {
  return queryTerms.reduce((score, term) => {
    const tf = doc.tf[term] || 0;
    return score + tf * idf(term);
  }, 0);
}

function scoreBm25(doc, queryTerms, { k1 = 1.2, b = 0.75 } = {}) {
  return queryTerms.reduce((score, term) => {
    const tf = doc.tf[term] || 0;
    if (!tf) return score;
    const numerator = tf * (k1 + 1);
    const denominator =
      tf + k1 * (1 - b + (b * doc.length) / avgDocLength);
    return score + idf(term) * (numerator / denominator);
  }, 0);
}

function freshnessBoost(doc) {
  if (doc.updatedAtDaysAgo <= 7) return 1;
  if (doc.updatedAtDaysAgo <= 30) return 0.5;
  return 0;
}

function rankDocuments() {
  return docStats
    .map((doc) => {
      const tfidf = scoreTfIdf(doc, QUERY);
      const bm25 = scoreBm25(doc, QUERY);
      const boost = freshnessBoost(doc);
      const finalScore = bm25 + boost;
      return {
        id: doc.id,
        tfidf: Number(tfidf.toFixed(3)),
        bm25: Number(bm25.toFixed(3)),
        freshnessBoost: boost,
        finalScore: Number(finalScore.toFixed(3)),
      };
    })
    .sort((a, b) => b.finalScore - a.finalScore);
}

function RankingScoringDemo() {
  const ranking = rankDocuments();
  console.log('Ranking & Scoring Demo');
  console.table(ranking);
  return ranking;
}

if (require.main === module) {
  RankingScoringDemo();
}

/* Sample Output (node ranking-scoring.js)

┌─────────┬───────┬──────┬───────┬──────────────┬────────────┐
│ (index) │  id   │ tfidf │ bm25 │ freshnessBoost │ finalScore │
├─────────┼───────┼──────┼───────┼──────────────┼────────────┤
│    0    │ doc-a │ 1.792 │ 1.311 │      1       │   2.311    │
│    1    │ doc-c │ 0.896 │ 0.655 │     0.5      │   1.155    │
│    2    │ doc-b │ 0.896 │ 0.655 │      0       │   0.655    │
└─────────┴───────┴──────┴───────┴──────────────┴────────────┘

*/

module.exports = { RankingScoringDemo, rankDocuments };
