const crypto = require('crypto');

function encrypt(text, key) {
  const cipher = crypto.createCipheriv('aes-192-cbc', crypto.scryptSync(key, 'salt', 24), Buffer.alloc(16, 0));
  return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
}

console.log(encrypt('customer@example.com', 'kms-key'));
// Output:
// <hex string>
