const fs = require('fs')
const chalk = require('chalk')


/*
🤖 𝗕𝗢𝗧 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦
*/
global.OFFLINE = true // if you want put bot offline put true
global.BOT_PRIVET = false // if you want use bot privet 
global.AUTO_CHATGPT = false // if you want auto ai bot mod
global.READ_MESSAGE = false // if you want read message from bot
global.ONLY_INBOX = false // Only inbox mod ( only pm ) use
global.ONLY_GROUPS = false // Only Groups Use


/*
🤖 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦
*/
global.OWNER_NAME = 'Sashika' // Owner Name
global.OWNER_NUMBER = ['94757258337'] //Owner Number
global.BOT_ADMINS = ['94752836001','94717671650'] //Bot admins numbers
global.BLOCK_CHAT = [] // If you want Block Bot From Chats Use .jid Command and put Jids



/*
📌⭕ 𝗬𝗢𝗨 𝗠𝗨𝗦𝗧 𝗣𝗥𝗢𝗩𝗜𝗗𝗘 𝗕𝗘𝗙𝗢𝗥𝗘 𝗗𝗘𝗣𝗟𝗢𝗬 𝗕𝗢𝗧 📌⭕
> Ai Bot Password Get From Watching This Video 
*/
global.AI_PASSWORD = 'king-nima-gpt-bot'
global.SESSION_ID = 'elisa_md@;;;0V9gjKoL#6UHWONYjfK1KrwOm_0SO-kYWfT4Dn9FgyU9U7g6o3kw'

/*
🎲 𝗢𝗧𝗛𝗘𝗥 𝗦𝗘𝗧𝗜𝗡𝗚𝗦
*/
global.CMD1 = '' // .ai Command
global.CMD2 = '' // .ai2 Command
global.PORT = process.env.PORT || '5000' // Port No need Change.


mess = {
	owner: '*This Command is only For Owner.*'
}










let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
