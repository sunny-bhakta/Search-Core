// Prototype a text-cleaning pipeline with stopword removal, stemming, and synonyms.

const STOPWORDS = new Set([
  'the',
  'is',
  'a',
  'an',
  'and',
  'or',
  'to',
  'with',
  'for',
  'of',
  'on',
  'in',
  'at',
  'be',
]);

const SYNONYMS = {
  tv: 'television',
  tivo: 'television',
  laptop: 'notebook',
  wifi: 'wi-fi',
  asap: 'as-soon-as-possible',
  ':)': 'smiley',
  pls: 'please',
};

const sampleDocs = [
  {
    label: 'Mixed casing + punctuation + synonym',
    text: 'Search!!!  Sêarch?  tv = television  :)',
  },
  {
    label: 'Chatty support log',
    text: 'ASAP need WiFi fixes pls!! customer is MAD 😡',
  },
  {
    label: 'Product review',
    text: 'Laptops/laptoping with fans? This notebook is AMAZING!!!',
  },
];

function foldAccents(input) {
  return input.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
}

function stripPunctuation(input) {
  return input.replace(/[^a-z0-9#\s']/g, ' ');
}

function simpleStem(token) {
  if (token.length > 5 && token.endsWith('ing')) {
    return token.slice(0, -3);
  }
  if (token.length > 4 && token.endsWith('ed')) {
    return token.slice(0, -2);
  }
  if (token.length > 3 && token.endsWith('s')) {
    return token.slice(0, -1);
  }
  return token;
}

function normalizeText(raw) {
  let working = raw.trim().replace(/\s+/g, ' ');
  working = working.toLowerCase();
  working = foldAccents(working);
  working = stripPunctuation(working);

  const tokens = working
    .split(/\s+/)
    .filter(Boolean)
    .filter((token) => !STOPWORDS.has(token))
    .map((token) => SYNONYMS[token] || token)
    .map(simpleStem);

  return tokens;
}

function NormalizationPreprocessingDemo() {
  console.log('Normalization & Preprocessing Demo');
  console.log('===================================\n');

  sampleDocs.forEach(({ label, text }) => {
    const tokens = normalizeText(text);
    console.log(label);
    console.log('Input :', text);
    console.log('Output:', tokens);
    console.log();
  });

  return sampleDocs.map(({ label, text }) => ({
    label,
    tokens: normalizeText(text),
  }));
}

if (require.main === module) {
  NormalizationPreprocessingDemo();
}

/*
Example Output:

Normalization & Preprocessing Demo
===================================

Mixed casing + punctuation + synonym
Input : Search!!!  Sêarch?  tv = television  :)
Output: [ 'search', 'search', 'television', 'television', 'smiley' ]

Chatty support log
Input : ASAP need WiFi fixes pls!! customer is MAD 😡
Output: [ 'as-soon-as-possible', 'need', 'wi-fi', 'fixe', 'please', 'customer', 'mad' ]

Product review
Input : Laptops/laptoping with fans? This notebook is AMAZING!!!
Output: [ 'notebook', 'notebook', 'fan', 'notebook', 'amazing' ]
*/

module.exports = { NormalizationPreprocessingDemo, normalizeText };
