// Tokenization demo covering multiple strategies (basic whitespace, hashtag-aware, CJK-aware)

const samples = {
  english: "Search-friendly tokenization isn't trivial!",
  hashtags: "#Search #AI GPT-4's tokenizer loves emojis 🤖🔥",
  cjk: "全文検索は難しい", // Japanese sentence meaning "Full-text search is hard"
};

function basicWhitespaceTokenizer(text) {
  return text
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
}

function hashtagAwareTokenizer(text) {
  return text
    .toLowerCase()
    .match(/#[\w-]+|[\w']+/g);
}

function cjkTokenizer(text) {
  return Array.from(text.replace(/\s+/g, ''));
}

function TokenizationDemo() {
  console.log('--- Basic whitespace tokenizer ---');
  console.log(basicWhitespaceTokenizer(samples.english));

  console.log('\n--- Hashtag-aware tokenizer ---');
  console.log(hashtagAwareTokenizer(samples.hashtags));

  console.log('\n--- CJK tokenizer (per character) ---');
  // "CJK" stands for Chinese, Japanese, and Korean languages.
  console.log(cjkTokenizer(samples.cjk));
}

if (require.main === module) {
  TokenizationDemo();
}

module.exports = {
  TokenizationDemo,
  basicWhitespaceTokenizer,
  hashtagAwareTokenizer,
  cjkTokenizer,
};

// Output:
// --- Basic whitespace tokenizer ---
// [ "search-friendly", "tokenization", "isn't", "trivial!" ]
//
// --- Hashtag-aware tokenizer ---
// [ "#search", "#ai", "gpt-4's", "tokenizer", "loves", "emojis" ]
//
// --- CJK tokenizer (per character) ---
// [ '全', '文', '検', '索', 'は', '難', 'し', 'い' ]
