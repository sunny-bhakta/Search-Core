function respondWithError(code, message) {
  const traceId = `trace-${Math.random().toString(16).slice(2, 8)}`;
  return { errors: [{ code, message, traceId }] };
}

const errorResponse = respondWithError('upstream_timeout', 'Search shard took too long');
console.log(JSON.stringify(errorResponse));
// Output:
// {"errors":[{"code":"upstream_timeout","message":"Search shard took too long","traceId":"trace-<random>"}]}
