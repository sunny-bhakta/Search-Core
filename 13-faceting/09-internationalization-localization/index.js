const translations = {
  fr: { color: 'Couleur' },
  es: { color: 'Color' }
};

function translateFacet(locale, key) {
  return translations[locale]?.[key] || key;
}

console.log(translateFacet('fr', 'color'));
// Output: 'Couleur'
