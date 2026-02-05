const crypto = require('crypto');

function verifyFeed(body, signature, secret) {
  const expected = crypto.createHmac('sha256', secret).update(body).digest('hex');
  return expected === signature;
}

console.log(verifyFeed('new product', 'abc123', 'secret'));
// Output:
// false
