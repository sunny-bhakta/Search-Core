function verifyToken(token) {
  if (token.exp < Date.now()) return { valid: false, reason: 'expired' };
  return { valid: true, role: token.role };
}

const oidcToken = { role: 'analyst', exp: Date.now() + 1000 };
console.log(verifyToken(oidcToken));
// Output:
// { valid: true, role: 'analyst' }
