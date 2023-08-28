let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `•💌 ▸ @𝐫𝐮𝐮𝐮𝐥𝐢𝐭𝐨𝐨𝐬𝐬𝐬 ִֶָ : ${pesan}`
let teks = `𝐀𝐧𝐨𝐭𝐞𝐧𝐬𝐞 𝐇𝐨𝐧𝐠𝐮𝐢𝐭𝐚𝐬! 🍄 \n\n❏ ${oi}\n❏ •💌 ▸ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `🍄꒱ ↝  @${mem.id.split('@')[0]}\n`}
teks += `𓍢ִ໋🍄‌֒  ▸ 𝐁𝐨𝐭 𝐃' 𝐂𝐡𝐨𝐟𝐢এ`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
