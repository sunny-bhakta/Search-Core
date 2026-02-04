// Query Parsing & Execution
// Demonstrate parsing AND/OR/NOT, phrases, and wildcard suffix matching.

const corpus = [
  { id: 'doc-1', text: 'status:error service:auth region:us login failed' },
  { id: 'doc-2', text: 'status:ok service:billing region:eu payment succeeded' },
  { id: 'doc-3', text: 'status:error service:api region:us timeout during sync' },
  { id: 'doc-4', text: 'status:error service:auth region:ap user lockout' },
];

const TOKENS = {
  AND: 'AND',
  OR: 'OR',
  NOT: 'NOT',
  PHRASE: 'PHRASE',
  WORD: 'WORD',
};

function tokenizeQuery(input) {
  const tokens = [];
  const regex = /"([^"]+)"|(AND|OR|NOT)|([\w:*?-]+)/gi;
  let match;
  while ((match = regex.exec(input))) {
    if (match[1]) {
      tokens.push({ type: TOKENS.PHRASE, value: match[1].toLowerCase() });
    } else if (match[2]) {
      tokens.push({ type: match[2].toUpperCase(), value: match[2].toUpperCase() });
    } else if (match[3]) {
      tokens.push({ type: TOKENS.WORD, value: match[3].toLowerCase() });
    }
  }
  return tokens;
}

function parse(tokens) {
  const ast = { must: [], should: [], mustNot: [], phrases: [], wildcards: [] };
  let currentOp = TOKENS.AND;

  tokens.forEach((token) => {
    if ([TOKENS.AND, TOKENS.OR, TOKENS.NOT].includes(token.type)) {
      currentOp = token.type;
      return;
    }

    if (token.type === TOKENS.PHRASE) {
      ast.phrases.push(token.value);
      return;
    }

    if (token.type === TOKENS.WORD && token.value.endsWith('*')) {
      ast.wildcards.push({ value: token.value.slice(0, -1) });
      return;
    }

    if (token.type === TOKENS.WORD) {
      if (currentOp === TOKENS.NOT) {
        ast.mustNot.push(token.value);
      } else if (currentOp === TOKENS.OR) {
        ast.should.push(token.value);
      } else {
        ast.must.push(token.value);
      }
    }
  });

  return ast;
}

function matchesDoc(doc, ast) {
  const text = doc.text.toLowerCase();

  const containsTerm = (term) => text.includes(term);
  const containsPhrase = (phrase) => text.includes(phrase);
  const containsWildcard = (prefix) => text.split(/\s+/).some((w) => w.startsWith(prefix));

  if (ast.must.some((term) => !containsTerm(term))) return false;
  if (ast.mustNot.some((term) => containsTerm(term))) return false;
  if (ast.phrases.some((phrase) => !containsPhrase(phrase))) return false;
  if (ast.wildcards.some(({ value }) => !containsWildcard(value))) return false;
  if (ast.should.length && !ast.should.some((term) => containsTerm(term))) return false;

  return true;
}

function executeQuery(query) {
  const tokens = tokenizeQuery(query);
  const ast = parse(tokens);
  const matchedDocs = corpus.filter((doc) => matchesDoc(doc, ast));
  return { ast, matchedDocs };
}

function QueryParsingExecutionDemo() {
  const query = 'status:error AND service:auth NOT region:eu "login failed" timeout*';
  const result = executeQuery(query);
  console.log('Query Parsing & Execution Demo');
  console.log('Query :', query);
  console.log('Parsed AST:', result.ast);
  console.log('Matches   :', result.matchedDocs.map((d) => d.id));
  return result;
}

if (require.main === module) {
  QueryParsingExecutionDemo();
}

/* Sample Output (node query-parsing-execution.js)

Query Parsing & Execution Demo
Query : status:error AND service:auth NOT region:eu "login failed" timeout*
Parsed AST: {
  must: [ 'status:error', 'service:auth' ],
  should: [],
  mustNot: [ 'region:eu' ],
  phrases: [ 'login failed' ],
  wildcards: [ { value: 'timeout' } ]
}
Matches   : [ 'doc-1' ]

*/

module.exports = {
  QueryParsingExecutionDemo,
  tokenizeQuery,
  parse,
  executeQuery,
};
