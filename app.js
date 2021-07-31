require('dotenv').config();
let TelegramBot = require('node-telegram-bot-api');
let decentWords = require('./decent-words.json')["decent-words"];
const isAbuse = require('./utils/isAbuse');

let bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

bot.on('message', async (msg) => {
  if (msg.from.id === +process.env.MY_TG_ID) return; // if it's me who wrote curse words, do not delete that message

  let {message_id, text} = msg;
  let chatId = msg.chat.id;
  if (isAbuse(text, decentWords)) {
    await bot.deleteMessage(chatId, message_id);
  }
});