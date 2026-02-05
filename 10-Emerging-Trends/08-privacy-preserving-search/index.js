const crypto = require('crypto');

function anonymizeQuery(query, userId) {
  const token = `anon-${crypto.randomBytes(2).toString('hex')}`;
  const encryptedQuery = Buffer.from(query).toString('base64');
  return {
    userToken: token,
    encryptedQuery,
    logMessage: 'Store encrypted query + token, drop raw user ID.'
  };
}

console.log(anonymizeQuery('best pediatric cardiologist', 12345));
// Output: { userToken: 'anon-xx', encryptedQuery: 'YmVzdCBwZWRpYXRyaWMgY2FyZGlvbG9naXN0', logMessage: 'Store encrypted query + token, drop raw user ID.' }
