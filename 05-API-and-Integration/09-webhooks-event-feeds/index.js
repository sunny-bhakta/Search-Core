const crypto = require('crypto');

function signPayload(body, secret) {
  return crypto.createHmac('sha256', secret).update(JSON.stringify(body)).digest('hex');
}

const payload = { event: 'document.updated', id: 42 };
const signature = signPayload(payload, 'abc');

console.log('Signature header:', signature);
// Output:
// Signature header: <hex string>
