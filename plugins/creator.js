let handler = function (m) {
  // this.sendContact(m.chat, '6285795431803', 'Andy', m)
  conn.sendContact(m.chat, '6283805279906', 'Ismail Kurama', m)
conn.reply(m.chat, `@${global.owner[0]}
`.trim(), m, { contextIfo: { mentionedJid: [global.owner[0] + '@s.whatsapp.net'] } })
conn.reply(m.chat, `wa.me/6283805279906`, m)
}

handler.command = /^owner|creator$/i

module.exports = handler
