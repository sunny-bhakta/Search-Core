function highlight(text, term) {
  const regex = new RegExp(`(${term})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

console.log(highlight('Reset the router by pressing the button.', 'router'));
// Output: 'Reset the <mark>router</mark> by pressing the button.'
