// e.g. 'heeeeeey' => 'hey'
//      'heeyyyyeeeeeey' => 'heyey'

const removeDuplicate = (text) => {
  let chars = text.split('');

  let i = 1;
  while (i < chars.length) {
    if (chars[i] === chars[i - 1]) {
      chars.splice(i, 1);
    } else {
      i++;
    }
  }

  return chars.join('');
};

module.exports = removeDuplicate;
