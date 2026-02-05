const analyzers = {
  lowercase: (text) => text.toLowerCase().split(/\W+/).filter(Boolean),
};

function validate(doc) {
  const errors = [];
  if (!doc.title) errors.push('title is required');
  if (typeof doc.price !== 'number' || doc.price <= 0) errors.push('price must be > 0');
  return errors;
}

function analyze(doc) {
  return analyzers.lowercase(doc.title || '');
}

function runSuite(docs) {
  return docs.map((doc) => ({
    id: doc.id,
    tokens: analyze(doc),
    errors: validate(doc),
  }));
}

if (require.main === module) {
  const results = runSuite([
    { id: 'ok-1', title: 'Trail Shoes', price: 49.99 },
    { id: 'bad-1', title: '', price: 0 },
  ]);
  console.log(results);
}

module.exports = { runSuite, validate, analyze };

/*
Sample Output
=============
[
  {
    id: 'ok-1',
    tokens: [ 'trail', 'shoes' ],
    errors: []
  },
  {
    id: 'bad-1',
    tokens: [],
    errors: [ 'title is required', 'price must be > 0' ]
  }
]
*/
