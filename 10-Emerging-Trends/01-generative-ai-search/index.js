function blendRetrievalAndLLM(question) {
  const retrievedDocs = ['doc1: reset steps', 'doc2: battery tips'];
  const llmAnswer = `Answer for "${question}": Step 1 reset, Step 2 reconnect.`;
  return { retrievedDocs, llmAnswer };
}

console.log(blendRetrievalAndLLM('How do I reset my smart lock?'));
// Output:
// { retrievedDocs: [ 'doc1: reset steps', 'doc2: battery tips' ], llmAnswer: 'Answer for "How do I reset my smart lock?": Step 1 reset, Step 2 reconnect.' }
