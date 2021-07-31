require('dotenv').config();
let TelegramBot = require('node-telegram-bot-api');
let decentWords = require('./decent-words.json')["decent-words"];

let bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

bot.on('message', async (msg) => {
  let {message_id, text} = msg;
  let chatId = msg.chat.id;
  if(isAbuse(text)) {
    await bot.deleteMessage(chatId, message_id);
  }
})

function isAbuse(msg) {
  let isAbuse = false;
  msg = msg.toLowerCase();

  for (let i = 0; i < decentWords.length; i++) {
    if(msg.includes(decentWords[i])) {
      isAbuse = true;
      break;
    }
  }

  return isAbuse;
}