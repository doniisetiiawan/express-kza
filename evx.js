module.exports = (word) => {
  let reversed = '';
  let i = word.length - 1;
  while (i > -1) {
    const letter = word[i];
    reversed += letter;
    i -= 1;
  }
  return reversed;
};
