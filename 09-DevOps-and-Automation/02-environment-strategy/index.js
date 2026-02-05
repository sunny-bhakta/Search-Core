const envConfigs = {
  dev: { dataFreshness: 'daily', anonymized: true },
  prod: { dataFreshness: 'realtime', anonymized: false }
};

function describeEnv(env) {
  const config = envConfigs[env];
  return `${env} -> freshness: ${config.dataFreshness}, anonymized: ${config.anonymized}`;
}

console.log(describeEnv('dev'));
// Output:
// dev -> freshness: daily, anonymized: true
