function cleanDocument(doc) {
  const text = doc.text.replace(/HEADER/g, '').trim();
  return { text, metadata: { author: doc.author || 'unknown', language: doc.language || 'en' } };
}

console.log(cleanDocument({ text: 'HEADERImportant body text', author: undefined }));
// Output: { text: 'Important body text', metadata: { author: 'unknown', language: 'en' } }
