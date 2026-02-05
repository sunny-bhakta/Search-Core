const configStore = { max_connections: 500 };

function updateConfig(key, value) {
  const oldValue = configStore[key];
  configStore[key] = value;
  return { key, oldValue, newValue: value };
}

console.log(updateConfig('max_connections', 600));
// Output:
// { key: 'max_connections', oldValue: 500, newValue: 600 }
