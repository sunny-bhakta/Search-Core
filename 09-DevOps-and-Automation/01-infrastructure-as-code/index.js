const environments = {
  dev: { nodes: 1 },
  staging: { nodes: 3 },
  prod: { nodes: 6 }
};

function planApply(env) {
  return `Applying IaC for ${env} with ${environments[env].nodes} nodes`;
}

console.log(planApply('staging'));
// Output:
// Applying IaC for staging with 3 nodes
