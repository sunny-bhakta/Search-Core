// Inverted Index (Basic)
// Build a tiny term -> doc list structure and run a query.

const documents = [
	{ id: 'doc-1', text: 'search engines need fast answers' },
	{ id: 'doc-2', text: 'answers stay fast with inverted indexes' },
];

function tokenize(text) {
	return text.toLowerCase().split(/\W+/).filter(Boolean);
}

function buildInvertedIndex(docs) {
	const index = {};
	docs.forEach((doc) => {
		tokenize(doc.text).forEach((term) => {
			index[term] = index[term] || [];
			const postingList = index[term];
			const existing = postingList.find((entry) => entry.docId === doc.id);
			if (existing) {
				existing.tf += 1;
			} else {
				postingList.push({ docId: doc.id, tf: 1 });
			}
		});
	});
	return index;
}

function queryIndex(index, terms) {
	return terms
		.map((term) => index[term] || [])
		.reduce((acc, postingList) => {
			postingList.forEach((entry) => {
				acc[entry.docId] = (acc[entry.docId] || 0) + entry.tf;
			});
			return acc;
		}, {});
}

function InvertedIndexBasicDemo() {
	const index = buildInvertedIndex(documents);
	const queryTerms = ['fast', 'answers'];
	const scores = queryIndex(index, queryTerms);

	console.log('Inverted Index (Basic)');
	console.log('=======================');
	console.log('Index:', index);
	console.log('Query terms:', queryTerms);
	console.log('Scores:', scores);

	return { index, queryTerms, scores };
}

if (require.main === module) {
	InvertedIndexBasicDemo();
}

/* Sample Output (node inverted-index-basic.js)

Inverted Index (Basic)
=======================
Index: {
	search: [ { docId: 'doc-1', tf: 1 } ],
	engines: [ { docId: 'doc-1', tf: 1 } ],
	need: [ { docId: 'doc-1', tf: 1 } ],
	fast: [ { docId: 'doc-1', tf: 1 }, { docId: 'doc-2', tf: 1 } ],
	answers: [ { docId: 'doc-1', tf: 1 }, { docId: 'doc-2', tf: 1 } ],
	stay: [ { docId: 'doc-2', tf: 1 } ],
	with: [ { docId: 'doc-2', tf: 1 } ],
	inverted: [ { docId: 'doc-2', tf: 1 } ],
	indexes: [ { docId: 'doc-2', tf: 1 } ]
}
Query terms: [ 'fast', 'answers' ]
Scores: { 'doc-1': 2, 'doc-2': 2 }

*/

module.exports = { InvertedIndexBasicDemo, buildInvertedIndex };
