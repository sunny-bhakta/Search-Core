function rateLimit(requestsPerMinute) {
  const limit = 50;
  return requestsPerMinute > limit ? 'block and show captcha' : 'allow';
}

console.log(rateLimit(500));
// Output:
// block and show captcha
