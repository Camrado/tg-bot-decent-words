const removeDuplicate = require('./removeDuplicate');

const isAbuse = (text, decentWords) => {
  let isAbuse = false;
  text = removeDuplicate(text.toLowerCase());

  for (let i = 0; i < decentWords.length; i++) {
    if (text.includes(decentWords[i])) {
      isAbuse = true;
      break;
    }
  }

  return isAbuse;
};

module.exports = isAbuse;