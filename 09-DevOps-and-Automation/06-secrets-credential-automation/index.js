const vault = { apiKey: 'old-key' };

function rotateSecret(newKey) {
  const previous = vault.apiKey;
  vault.apiKey = newKey;
  return { previous, current: newKey };
}

console.log(rotateSecret('new-key-123'));
// Output:
// { previous: 'old-key', current: 'new-key-123' }
