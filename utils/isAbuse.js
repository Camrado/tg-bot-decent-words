const removeDuplicate = require('./removeDuplicate');
const decentWords = require('../decent-words.json')["decent-words"];

const isAbuse = (text) => {
  if (typeof text !== 'string') return; // check that it's a text message not sticker or anything else

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