const removeDuplicate = require('./removeDuplicate');
const decentWords = require('../decent-words.json')["decent-words"];

const isAbuse = (text) => {
  if (typeof text !== 'string') return; // check that it's a text message not sticker or anything else

  text = removeDuplicate(text.toLowerCase());
  return decentWords.some((word) => text.includes(word)); // if text contains "decent" word, return true, else false
};

module.exports = isAbuse;