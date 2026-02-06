// Simulates defining roles, users, and API keys.
const roles = {
  support_reader: {
    indices: ["tickets-*"],
    privileges: ["read", "view_index_metadata"]
  }
};

const users = [
  {
    username: "support-bot",
    roles: ["support_reader"],
    enabled: true
  }
];

const generateApiKey = ({ name, role }) => ({
  id: `${name}-${Date.now()}`,
  role,
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
});

const apiKey = generateApiKey({ name: "support-bot", role: "support_reader" });

const sampleRequest = {
  method: "GET",
  path: "/tickets-2025/_search",
  headers: { Authorization: `ApiKey ${apiKey.id}` }
};

console.log("Defined roles:", roles);
console.log("Users:", users);
console.log("Generated API key:", apiKey);
console.log("Sample request using API key:", sampleRequest);
