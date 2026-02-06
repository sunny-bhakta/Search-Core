// Demonstrates a simple ingestion + visualization flow.
const beatsEvent = {
  source: "nginx",
  message: "GET /shop 200",
  timestamp: Date.now()
};

const logstashTransform = (event) => ({
  "@timestamp": new Date(event.timestamp).toISOString(),
  service: event.source,
  route: event.message.split(" ")[1],
  status: Number(event.message.split(" ")[2])
});

const indexedDoc = logstashTransform(beatsEvent);

const kibanaLensConfig = {
  visualization: "metric",
  metricField: "status",
  title: "HTTP Status" 
};

console.log("Beats event sent:", beatsEvent);
console.log("Document indexed by Logstash:", indexedDoc);
console.log("Kibana Lens config consuming the index:", kibanaLensConfig);
