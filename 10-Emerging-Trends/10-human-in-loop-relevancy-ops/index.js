function reviewQueue(result) {
  if (result.confidence < 0.5 || result.flags.includes('policy-risk')) {
    return {
      queued: true,
      reviewerAction: 'needs human decision',
      suggestedRule: `down-rank ${result.url}`
    };
  }
  return {
    queued: false,
    reviewerAction: 'auto-approved'
  };
}

console.log(reviewQueue({
  url: 'https://example.com/unverified-claim',
  confidence: 0.35,
  flags: ['medical-claim', 'policy-risk']
}));
// Output: {
//   queued: true,
//   reviewerAction: 'needs human decision',
//   suggestedRule: 'down-rank https://example.com/unverified-claim'
// }
