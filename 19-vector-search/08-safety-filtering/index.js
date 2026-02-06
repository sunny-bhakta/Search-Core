function authorizeResult(result, userTeam) {
  if (result.team !== userTeam) return 'deny';
  if (result.flagged) return 'drop';
  return 'allow';
}

console.log(authorizeResult({ team: 'legal', flagged: false }, 'legal'));
// Output: 'allow'
