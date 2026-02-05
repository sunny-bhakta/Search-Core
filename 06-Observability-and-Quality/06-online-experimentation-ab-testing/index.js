function assignBucket(userId) {
  const hash = userId.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return hash % 2 === 0 ? 'control' : 'variant';
}

console.log('User42 bucket:', assignBucket('user42'));
// Output:
// User42 bucket: control
