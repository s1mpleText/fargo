//
// // bot.setChatMenuButton([
// //     { command: "sr [Название розыгрыша]", description: "Запустить розыгрыш" },
// //     // { command: "ir", description: "Подвести итоги розыгрыша" },
// //     // { command: "er", description: "Остановить розыгрыш" },
// // ]);
//
// // bot.onText(/^\/start$/, function (msg) {
// //     const opts = {
// //         reply_to_message_id: msg.message_id,
// //         reply_markup: {
// //             resize_keyboard: true,
// //             one_time_keyboard: true,
// //             keyboard: [
// //                 [{text: 'Level 1'}],
// //             ],
// //         }
// //     };
// //
// //     bot.sendMessage(msg.chat.id, "I'm a test robot", opts);
// // });
//
// // bot.on('message', (msg) => {
// //     console.log(msg)
// // });
// //
// // bot.onText(/\/gip/, (msg) => {
// //     fetch("https://checkip.amazonaws.com/").then(res => res.text()).then(data =>
// //         bot.sendMessage(msg.chat.id,
// //             'Информация о Вашем IP-адресе: \n' +
// //             data
// //         )
// //         // bot.sendMessage(msg.chat.id, data)
// //     )
// // })
//
// //
// // bot.onText(/\/gip/, (msg) => {
// //     fetch("http://ip-api.com/json/" + msg.text.split(' ')[1]).then(res => res.text()).then(data => {
// //         if (JSON.parse(data).status == 'success') {
// //             bot.sendMessage(msg.chat.id,
// //                 "*Информация об IP: *" + msg.text.split(' ')[1] + "\n" +
// //                 "\n" +
// //                 '*Страна:* ' + JSON.parse(data).country + '\n' +
// //                 '*Регион:* ' + JSON.parse(data).regionName + '\n' +
// //                 '*Город:* ' + JSON.parse(data).city, options
// //             )
// //         }
// //         else {
// //             bot.sendMessage(msg.chat.id, 'Произошла ошибка!')
// //         }
// //     })
// // })
//
//
// // async function testFunc() {
// //     try {
// //         let testdopInfo = await dopInfo;
// //         return testdopInfo
// //     }
// //     catch (err) {
// //         return err
// //     }
// //     // console.log(testEventName)
// // }
// // testFunc().then(r => console.log(r))
//
// //     .then(() => {
// //         bot.on('message', (msg) => {
// //             eventName = msg.text;
// //         })
// //     }
// // ).then(() => {
// //         bot.sendMessage(msg.chat.id, 'Введите *дополнительную* информацию для розыгрыша!\n\nДля пропуска этого шага используйте /rskip', options).then(() => {
// //                 bot.on('message', (msg) => {
// //                     bot.sendMessage(msg.chat.id, 'tetetet')
// //                 })
// //             }
// //         )
// //     }
// // )
//
//
//
// }
// })
//
//
// bot.onText(/^\/sr$/, (msg) => {
//     if (isAdmin(msg.from.id)) {
//         bot.sendMessage(msg.chat.id, 'Введите название розыгрыша!')
//         // let eventName;
//         bot.on('message', (msg) => {
//             const eventName = msg.text;
//
//             bot.sendMessage(msg.chat.id, 'Введите *дополнительную* информацию для розыгрыша!\n\nДля пропуска этого шага используйте /rskip', options);
//
//             let dopInfo
//             bot.onText(/^\/rskip$/, (msg) => {
//                 dopInfo = '';
//             })
//             bot.on('message', (msg) => {
//                 dopInfo = msg.text
//             })
//
//             console.log('tetetete', dopInfo)
//             //
//             //
//             // bot.on('message', (msg) => {
//             //     console.log('mess', msg)
//             //     let dopInfo;
//             //     if (msg.text !== '/rskip') {
//             //         dopInfo = msg.text;
//             //     }
//             if (eventName.length > 0 && dopInfo.length > 0) {
//                 res = bot.sendMessage('@AGradyBotTest', '*' + eventName + '*\n\n' + dopInfo + '\n\nДля участия нажмите кнопку ниже', {
//                         reply_markup: JSON.stringify({
//                             inline_keyboard: [
//                                 [{text: 'Участвовать!', callback_data: 'participate'}]
//                             ],
//                         }), ...options
//                     }
//                 )
//                 sta = bot.sendMessage(msg.chat.id, '*' + eventName + '*\n', {
//                         reply_markup: JSON.stringify({
//                             inline_keyboard: [
//                                 [{text: 'Подвести итоги!', callback_data: 'itogi'}],
//                                 [{text: 'Остановить розыгрыш!', callback_data: 'stop'}]
//                             ],
//                         }), ...options
//                     }
//                 )
//                 bot.on('callback_query', (query) => {
//                     if (query.data === 'participate') {
//                         console.log(query)
//                         if (concurs.map(item => item[0]).indexOf(query.from.id) === -1) {
//                             bot.answerCallbackQuery(query.id, {text: '✅ Вы приняли участие в розыгрыше!'})
//                             concurs.push([query.from.id, query.from.username])
//                             // bot.sendMessage('@AGradyBotTest', '+ Участник: @' + query.from.username)
//                         } else {
//                             bot.answerCallbackQuery(query.id, {text: '❌ Вы уже принимали участие в этом розыгрыше!'})
//                         }
//                     }
//                     if (query.data === 'itogi' && isAdmin(msg.from.id)) {
//                         if (concurs.length > 0) {
//                             let temp = res['_rejectionHandler0'];
//                             winner = concurs[getRandomInt(concurs.length)][1];
//                             bot.answerCallbackQuery(query.id, {text: '✅ Итоги успешно подведены!'})
//                             // console.log(concurs[getRandomInt(concurs.length)][1])
//                             bot.editMessageText(
//                                 '<b>' + eventName + '</b>!' + '\n\n' + dopInfo + '\n\n' +
//                                 '<b>Победитель:</b> @' + winner,
//                                 {
//                                     chat_id: temp.chat.id,
//                                     message_id: temp.message_id,
//                                     parse_mode: 'HTML'
//                                 }
//                             )
//                         }
//                         else {
//                             bot.answerCallbackQuery(query.id, {text: '❌ Произошла ошибка!'})
//                         }
//                     }
//                     if (query.data === 'stop' && isAdmin(msg.from.id)) {
//
//                         let temp = sta['_rejectionHandler0'];
//                         let currentdate = new Date();
//
//                         bot.editMessageText('Розыгрыш <b>' + eventName + '</b> окончен!\n\n' + 'Дата проведения: '+ currentdate.getDate() + "/"
//                             + (currentdate.getMonth()+1)  + "/"
//                             + currentdate.getFullYear() + " в "
//                             + currentdate.getHours() + ":"
//                             + currentdate.getMinutes() + "\n"
//                             + 'Победитель: @' + winner,
//                             {
//                                 chat_id: temp.chat.id,
//                                 message_id: temp.message_id,
//                                 parse_mode: 'HTML'
//                             }
//                         )
//                         bot.answerCallbackQuery(query.id, {text: '❌ Розыгрыш остановлен!'})
//                         concurs = [];
//                     }
//                 })
//             }
//             else {
//                 bot.sendMessage(msg.chat.id, 'Используйте /sr [Название для розыгрыша]')
//             }
//             // })
//
//
//         })
//
//         // let eventName = msg.text.split(' ').slice(1).join(' ');
//
//     }
// })
// // bot.onText(/\/ir/, (msg) => {
// //     if (isAdmin(msg.from.id)) {
// //         let temp = res['_rejectionHandler0'];
// //         let winner = concurs[getRandomInt(concurs.length)][1];
// //         // console.log(concurs[getRandomInt(concurs.length)][1])
// //         bot.editMessageText(
// //             '<b>Итоги розыгрыша!</b>' + '\n' +
// //             '\n' +
// //             '<b>Победитель:</b> @' + winner,
// //             {
// //                 chat_id: temp.chat.id,
// //                 message_id: temp.message_id,
// //                 parse_mode: 'HTML'
// //             }
// //         )
// //     }
// // })
// // bot.onText(/\/er/, (msg) => {
// //     if (isAdmin(msg.from.id))
// //         concurs = [];
// // })



// const options = {
//     parse_mode: 'Markdown'
// }
//
// const admins = [859570946]
//
// let concurs = [];
// let winner = [];
//
// let res = [];
//
// let sta = [];
//
//
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
//
// function isAdmin(id) {
//     return admins.indexOf(id) !== -1
// }
//
// bot.onText(/^\/srt$/, (msg) => {
//     if (isAdmin(msg.from.id)) {
//         let eventName;
//         let dopInfo;
//         bot.sendMessage(msg.chat.id, 'Введите название розыгрыша!', {
//             reply_markup: JSON.stringify({force_reply: true}),
//             ...options
//         }).then((reply) => {
//             bot.onReplyToMessage(reply.chat.id, reply.message_id, (reply) => {
//                 eventName = reply.text;
//                 bot.sendMessage(msg.chat.id, 'Введите *дополнительную* информацию для розыгрыша!\n\nДля пропуска этого шага используйте /rskip', {
//                     reply_markup: JSON.stringify({force_reply: true}),
//                     ...options
//                 }).then((reply) => {
//                     bot.onReplyToMessage(reply.chat.id, reply.message_id, (reply) => {
//                         if (reply.text === '/rskip') {
//                             dopInfo = '';
//                         } else {
//                             dopInfo = reply.text;
//                         }
//                         startEvent()
//                     })
//                 })
//             })
//         })
//
//         function startEvent() {
//             res = bot.sendMessage('@AGradyBotTest', '*' + eventName + '*\n\n' + dopInfo + '\n\nДля участия нажмите кнопку ниже', {
//                     reply_markup: JSON.stringify({
//                         inline_keyboard: [
//                             [{text: 'Участвовать!', callback_data: 'participate'}]
//                         ],
//                     }), ...options
//                 }
//             )
//             sta = bot.sendMessage(msg.chat.id, 'Розыгрыш *' + eventName + '* запущен\n\n' + dopInfo, {
//                     reply_markup: JSON.stringify({
//                         inline_keyboard: [
//                             [{text: 'Подвести итоги!', callback_data: 'itogi'}],
//                             [{text: 'Остановить розыгрыш!', callback_data: 'stop'}]
//                         ],
//                     }), ...options
//                 }
//             )
//             bot.on('callback_query', (query) => {
//                 if (query.data === 'participate') {
//                     console.log(query)
//                     if (concurs.map(item => item[0]).indexOf(query.from.id) === -1) {
//                         bot.answerCallbackQuery(query.id, {text: '✅ Вы приняли участие в розыгрыше!'})
//                         concurs.push([query.from.id, query.from.username])
//                         // bot.sendMessage('@AGradyBotTest', '+ Участник: @' + query.from.username)
//                     } else {
//                         bot.answerCallbackQuery(query.id, {text: '❌ Вы уже принимали участие в этом розыгрыше!'})
//                     }
//                 }
//                 if (query.data === 'itogi' && isAdmin(msg.from.id)) {
//                     if (concurs.length > 0) {
//                         let temp = res['_rejectionHandler0'];
//                         winner = concurs[getRandomInt(concurs.length)][1];
//                         bot.answerCallbackQuery(query.id, {text: '✅ Итоги успешно подведены!'})
//                         // console.log(concurs[getRandomInt(concurs.length)][1])
//                         bot.editMessageText(
//                             '<b>' + eventName + '</b>!' + '\n\n' + dopInfo + '\n' +
//                             '\n' +
//                             '<b>👤 Участников: ' + concurs.length + '</b>\n' +
//                             '<b>🎉 Победитель:</b> @' + winner,
//                             {
//                                 chat_id: temp.chat.id,
//                                 message_id: temp.message_id,
//                                 parse_mode: 'HTML'
//                             }
//                         )
//                     } else {
//                         bot.answerCallbackQuery(query.id, {text: '❌ Произошла ошибка!'})
//                     }
//                 }
//                 if (query.data === 'stop' && isAdmin(msg.from.id)) {
//
//                     let temp = sta['_rejectionHandler0'];
//                     let currentdate = new Date();
//
//                     bot.editMessageText('<b>' + eventName + '</b>\n\n' + dopInfo + '\n\nДата проведения: ' + currentdate.getDate() + "/"
//                         + (currentdate.getMonth() + 1) + "/"
//                         + currentdate.getFullYear() + " в "
//                         + currentdate.getHours() + ":"
//                         + currentdate.getMinutes() + "\n"
//                         + 'Победитель: @' + winner,
//                         {
//                             chat_id: temp.chat.id,
//                             message_id: temp.message_id,
//                             parse_mode: 'HTML'
//                         }
//                     )
//                     bot.answerCallbackQuery(query.id, {text: '❌ Розыгрыш остановлен!'})
//                     concurs = [];
//                 }
//             })
//         }
//     }
// })