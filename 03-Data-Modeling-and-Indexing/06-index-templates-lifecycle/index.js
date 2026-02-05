const indexTemplate = {
  index_patterns: ['products-v*'],
  template: {
    settings: {
      number_of_shards: 3,
      number_of_replicas: 1,
    },
    mappings: {
      properties: {
        title: { type: 'text', analyzer: 'standard' },
        price: { type: 'float' },
        updatedAt: { type: 'date' },
      },
    },
  },
};

const lifecyclePolicy = {
  policy: {
    phases: {
      hot: {
        actions: {
          rollover: { max_age: '7d', max_size: '30gb' },
        },
      },
      warm: {
        actions: {
          forcemerge: { max_num_segments: 1 },
        },
      },
      delete: {
        min_age: '30d',
        actions: { delete: {} },
      },
    },
  },
};

function showPlan() {
  console.log('Template:', JSON.stringify(indexTemplate, null, 2));
  console.log('Lifecycle Policy:', JSON.stringify(lifecyclePolicy, null, 2));
}

if (require.main === module) {
  showPlan();
}

module.exports = { indexTemplate, lifecyclePolicy, showPlan };

/*
Sample Output (trimmed)
=======================
Template: {
  "index_patterns": ["products-v*"],
  "template": {
    "settings": { "number_of_shards": 3, "number_of_replicas": 1 },
    "mappings": { "properties": { "title": { "type": "text" }, ... } }
  }
}
Lifecycle Policy: {
  "policy": {
    "phases": {
      "hot": { "actions": { "rollover": { "max_age": "7d", "max_size": "30gb" } } },
      "warm": { "actions": { "forcemerge": { "max_num_segments": 1 } } },
      "delete": { "min_age": "30d", "actions": { "delete": {} } }
    }
  }
}
*/
