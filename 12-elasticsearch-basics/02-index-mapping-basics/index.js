// Demonstrates validating a mapping before indexing documents.
const mapping = {
  properties: {
    title: {
      type: "text",
      fields: {
        keyword: { type: "keyword", ignore_above: 256 }
      },
      analyzer: "standard"
    },
    price: {
      type: "scaled_float",
      scaling_factor: 100
    },
    createdAt: {
      type: "date",
      format: "strict_date_optional_time"
    }
  },
  dynamic: "strict"
};

const validateDocument = (doc) => {
  const errors = [];
  if (typeof doc.title !== "string") errors.push("title must be a string");
  if (typeof doc.price !== "number") errors.push("price must be a number");
  if (!doc.createdAt) errors.push("createdAt is required");
  return errors;
};

const sampleDoc = {
  title: "Blue mug",
  price: 23.5,
  createdAt: new Date().toISOString()
};

const errors = validateDocument(sampleDoc);
if (errors.length) {
  console.log("Document rejected by mapping rules:", errors);
} else {
  console.log("Mapping accepted document:", {
    mappedTitle: sampleDoc.title,
    keywordCandidate: sampleDoc.title.toLowerCase(),
    scaledPrice: Math.round(sampleDoc.price * mapping.properties.price.scaling_factor)
  });
}
