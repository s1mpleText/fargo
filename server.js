const TelegramBot = require('node-telegram-bot-api');

const token = '5797596593:AAG7sa3OUuPn1Yv3x-YSSdSLmqq8IJKR5LU';

const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {


    console.log(msg)

    const chatId = msg.chat.id;
    const text = msg.text;
    const caption = msg.caption

    if(text === '/start') {

        bot.sendMessage(chatId, 'Здравствуйте, за каждый опубликованный мем вы будете получать денежное вознаграждение. \n' +
            'Его нужно отправлять одним сообщением вместе с реквизитами, пример:')
        bot.sendPhoto(chatId, 'images/example-image.png', {caption: 'РЕКВИЗИТЫ + (ПЛАТЕЖНАЯ СИСТЕМА)'});
    }

    if (msg.photo && caption) {
        bot.getFile(msg.photo[0].file_id).then((resp) => {
            bot.sendPhoto(859570946, resp.file_id, {caption: 'Реквизиты: ' + caption + '\nОтправитель: @' + msg.from.username})
            bot.sendPhoto(831238787, resp.file_id, {caption: 'Реквизиты: ' + caption + '\nОтправитель: @' + msg.from.username})
            bot.sendMessage(chatId, 'Ваш мем принят в обработку, пожалуйста, ожидайте.')
        })
    }

})