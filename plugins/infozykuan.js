let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI ZYKUAN* ´ˎ˗
│ ✎ _Nama_ : Zykuan
│ ✎ _Sekolah_ : Ytta
│ ✎ _Umur_ : 15
│ ✎ _Asal_ : Japan, Tokyo
│ ✎ _Hobi_ : Suka Kamu
│ ✎ _Status_ : Masih Mencintaimu
│ ✎ _Cita-Cita_ : Berdua bersamamu
│ ✎ _WhatsApp_ :
│    wa.me/628979440862
╰───────────────────
`.trim(), m)
}

handler.help = ['infozykuan']
handler.tags = ['main', 'utama']
handler.command = /^(infozykuan)$/i

handler.exp = 150

module.exports = handler