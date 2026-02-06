// Mock ingest pipeline simulation with a few processors.
const pipeline = [
  {
    type: "grok",
    pattern: "%{WORD:method} %{URIPATH:route} %{NUMBER:status}"
  },
  {
    type: "set",
    field: "vip",
    value: (doc) => ["alice", "bob"].includes(doc.user)
  },
  {
    type: "rename",
    from: "route",
    to: "http.route"
  }
];

const simulate = (doc) => {
  const output = { ...doc };
  pipeline.forEach((processor) => {
    if (processor.type === "grok") {
      const [, method, route, status] = doc.message.split(" ");
      output.method = method;
      output.route = route;
      output.status = Number(status);
    }
    if (processor.type === "set") {
      output[processor.field] = processor.value(doc);
    }
    if (processor.type === "rename" && output[processor.from]) {
      output[processor.to] = output[processor.from];
      delete output[processor.from];
    }
  });
  return output;
};

const sampleLog = {
  message: "GET /cart 200",
  user: "alice"
};

const transformed = simulate(sampleLog);
console.log("Pipeline output:", transformed);
