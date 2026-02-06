function localeSynonym(term, locale, dictionaries) {
  return dictionaries[locale]?.[term] || [term];
}

const dictionaries = { fr: { ordinateur: ['pc'] } };
console.log(localeSynonym('ordinateur', 'fr', dictionaries));
// Output: ['pc']
