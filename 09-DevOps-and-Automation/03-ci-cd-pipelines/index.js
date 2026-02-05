const stages = ['unit-tests', 'integration-tests', 'canary', 'full-rollout'];

function pipelineStatus(stage) {
  const index = stages.indexOf(stage);
  return index === -1 ? 'unknown stage' : `Completed up to ${stages[index]}`;
}

console.log(pipelineStatus('canary'));
// Output:
// Completed up to canary
