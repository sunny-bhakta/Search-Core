function simulateRequest(latencyMs) {
  const deadline = 300;
  if (latencyMs > deadline) {
    return { status: 'timeout', retry: true };
  }
  return { status: 'ok', retry: false };
}

const firstAttempt = simulateRequest(420);
const secondAttempt = simulateRequest(180);

console.log('First attempt:', firstAttempt);
console.log('Second attempt:', secondAttempt);
// Output:
// First attempt: { status: 'timeout', retry: true }
// Second attempt: { status: 'ok', retry: false }
