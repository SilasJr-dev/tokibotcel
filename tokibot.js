
// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ZIM BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮reinhardtuna@mail.uk
//▮WHATSAPP US : +44 7441 437150
//▮YOUTUBE CHANNELL: https://youtube.com/c/DRIPSOFC
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING ZIMBOT
//┃THANKS TO DikaArdnt
//┃BEHOLD THE NEW
//┃
//┃LET LOVE LEAD
//┃
//┃YOU WANNA RE UPLOAD GIVE A PROPER CREDIT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//




process.on('uncaughtException', console.error) //Safe Log Error

require('./config')
const { WAConnection, MessageType, BufferJSON, WA_DEFAULT_EPHEMERAL, PresenceUpdate, Presence, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const cheerio = require('cheerio')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const google = require('google-it')
let { msgFilter } = require('./lib/antispam')
const os = require('os')
const hx = require('hxz-api')
const mel = require('kitsune-api')
const xa = require('xfarr-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const level = require('./lib/level')
const { mediafireDl } = require('./lib/mediafire.js')
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const Tokibot = JSON.parse(fs.readFileSync('./database/Tokibot.json'))



//apikeys zvibhorani izvi
const setting = JSON.parse(fs.readFileSync('./apikey.json'))

//buat info zvibhorani zivi
limitawal = '100'
botname = 'TOKI BOT'
wm = 'TOKI BOT'
global.reactmoji = '❤️'
limitCount = setting.limit

//read database
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
const antilinkyt = JSON.parse(fs.readFileSync('./database/antilinkyt.json'))
const antibule = JSON.parse(fs.readFileSync('./database/antibule.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
const dripsanti = JSON.parse(fs.readFileSync('./lib/rude.json'))
let bad = JSON.parse(fs.readFileSync('./lib/rude.json'))
const autoblock = JSON.parse(fs.readFileSync('./database/autoblock.json'))
const dripsno = JSON.parse(fs.readFileSync('./database/autoblock.json'))
const dripswelcome = JSON.parse(fs.readFileSync('./database/welcome.json'))


//////created by zim-bot-inc

module.exports = TokiBotAq = async (TokiBotAq, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await TokiBotAq.decodeJid(TokiBotAq.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const sender = m.sender
        const from = m.chat
        const isBan = banned.includes(m.sender)
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isAutoblock = autoblock.includes('@s.whatsapp.net')

        //GROUP METADATA
        const groupMetadata = m.isGroup ? await TokiBotAq.groupMetadata(m.chat).catch(e => { }) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupowner = m.isGroup ? groupMetadata.owner : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isAntiwame = m.isGroup ? antiwame.includes(m.chat) : false
        const isAntiVirtex = m.isGroup ? _antivirtex.includes(m.chat) : false
        const isAntilinkyt = m.isGroup ? antilinkyt.includes(m.chat) : false
        const isAntibule = m.isGroup ? antibule.includes(m.chat) : false
        const antiToxic = m.isGroup ? dripsanti.includes(from) : false
        const Tokibotincv3 = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const isAntinsfw = m.isGroup ? dripsno.includes(m.chat) : false
        const isWelcome = m.isGroup ? dripswelcome.includes(m.chat) : false
        //TOKI BOT

        const timuu = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
        const hariRaya = new Date('Apr 02, 2022 01:45:00')
        const sekarang = new Date().getTime();
        const Selisih = hariRaya - sekarang;
        const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor(Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const mmmenit = Math.floor(Selisih % (1000 * 60 * 60) / (1000 * 60));
        const ddetik = Math.floor(Selisih % (1000 * 60) / 1000);
        const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
        var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var ikiya = date.getMonth()
        var gakroh = date.getDate();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
        var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
        var tampilWaktu = "" + jam + ":" + menit + ":" + detik;
        myMonths = ["January", "February", "March", "Aprill", "May", "June", "July", "August", "September", "October", "November", "December"];
        myDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        myDoms = ["sacred", "safari", "first ribal", "last ribal", "syawal", "late Friday", "rejab", "syaaban", "ramadan", "early friday"];
        var tgl = new Date();
        detik = tgl.getSeconds();
        menit = tgl.getMinutes();
        jam = tgl.getHours();
        var ampm = jam >= 12 ? 'PM' : 'AM';
        var day = tgl.getDate()
        bulan = tgl.getMonth()
        var thisDay = tgl.getDay(),
            thisDay = myDays[thisDay];
        var yy = tgl.getYear()
        var year = (yy < 1000) ? yy + 1900 : yy;
        const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
        //message filter
        if (isCmd) msgFilter.addFilter(from)

        // TIME 
        const time2 = moment().tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
        if (time2 <= "23:59:00") {
            var ucapannya2 = `Boa Noite 🌒`
        }
        if (time2 >= "18:00:00") {
            var ucapannya2 = `Boa Noite🌙`
        }
        if (time2 <= "18:00:00") {
            var ucapannya2 = `Boa Tarde 🌅`
        }
        if (time2 >= "12:00:00") {
            var ucapannya2 = `Boa Tarde 🌞`
        }
        if (time2 <= "12:00:00") {
            var ucapannya2 = `Bom dia 🌄`
        }
        if (time2 >= "05:00:00") {
            var ucapannya2 = `Bom dia 🌅`
        }

        global.botdev = ['554497433716']
        global.bothelp = ['554497433716']

        // random 

        let medrips = fs.readFileSync('./lib/namaku.js')
        jsonDrips = JSON.parse(medrips)
        randIndex = Math.floor(Math.random() * jsonDrips.length)
        randek = jsonDrips[randIndex];

        // Random Image Simple Menu

        let picaks = [flaming, fluming, flarun, flasmurf, mehk, awog, mohai, mhehe]
        let picak = picaks[Math.floor(Math.random() * picaks.length)]



        //public or self
        if (!TokiBotAq.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            console.log(chalk.blue(chalk.bgWhite('TOKIBOT')), chalk.whiteBright(chalk.bgRed(new Date)), chalk.black(chalk.bgRed(budy || m.mtype)) + '\n' + chalk.magenta('⦿ FROM'), chalk.bgYellowBright(pushname), chalk.bgGray(m.sender) + '\n' + chalk.bgCyanBright('RECIEVED'), chalk.yellowBright(m.isGroup ? pushname : 'DM', m.chat))
        }

        if (global.dripsreadgroup) {
            if (m.isGroup) { TokiBotAq.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
        }
        if (global.dripsreadall) {
            if (m.message) { TokiBotAq.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
        }
        if (global.dripsrecord) {
            if (m.chat) { TokiBotAq.sendPresenceUpdate('recording', m.chat) }
        }

        if (global.dripstyping) {
            if (m.chat) { TokiBotAq.sendPresenceUpdate('composing', m.chat) }
        }
        if (global.available) {
            if (m.chat) { TokiBotAq.sendPresenceUpdate('available', m.chat) }
        }
        if (global.unavailable) {
            if (m.chat) { TokiBotAq.sendPresenceUpdate('unavailable', m.chat) }
        }


        const reply = (teks) => {
            TokiBotAq.sendMessage(m.chat, { text: teks, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": ` BOT GROUP`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./Tokibot/tomioka.jpg`), "sourceUrl": `${global.ytchannel}` } } }, { quoted: m })
        }

        const replay = (teks) => {
            TokiBotAq.sendMessage(m.chat, { text: teks, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `BOT YOUTUBE CHANNEL `, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./Tokibot/tomioka.jpg`), "sourceUrl": `${global.group2}` } } }, { quoted: m })
        }

        //dokumen random
        let doku = [f1, f2, f3, f4, f5, f6]
        let feler = doku[Math.floor(Math.random() * doku.length)]

        function randomNomor(angka) {
            return Math.floor(Math.random() * angka) + 1
        }

        // Monospace

        function monospace(string) {
            return '```' + abantyulidab + '```'

        }


        if (m.chat.startsWith("212")) {
            TokiBotAq.updateBlockStatus(m.sender, 'block')

        }

        //LEVEL

        const levelRole = level.getLevelingLevel(m.sender, _level)
        var role = 'Guerreiro III'
        if (levelRole <= 5) {
            role = 'Guerreiro II'
        } else if (levelRole <= 10) {
            role = 'Guerreiro I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Mestre III'
        } else if (levelRole <= 35) {
            role = 'Mestre II'
        } else if (levelRole <= 40) {
            role = 'Mestre I'
        } else if (levelRole <= 45) {
            role = 'Grande Mestre III'
        } else if (levelRole <= 50) {
            role = 'Grande Mestre II'
        } else if (levelRole <= 55) {
            role = 'Grande Mestre I'
        } else if (levelRole <= 60) {
            role = 'Epico III'
        } else if (levelRole <= 65) {
            role = 'Epico II'
        } else if (levelRole <= 70) {
            role = 'Epico I'
        } else if (levelRole <= 75) {
            role = 'Lendário III'
        } else if (levelRole <= 80) {
            role = 'Lendário II'
        } else if (levelRole <= 85) {
            role = 'Lendário I'
        } else if (levelRole <= 90) {
            role = 'Mítico'
        } else if (levelRole <= 95) {
            role = 'Mítico grorioso'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } else if (levelRole >= 120) {
            role = 'Deus'
        }



        // FUNCTION LEVELING

        if (m.isGroup && !level.isGained(m.sender) && !isCmd) {
            try {
                level.addCooldown(m.sender)
                const currentLevel = level.getLevelingLevel(m.sender, _level)
                const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
                const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
                level.addLevelingXp(m.sender, amountXp, _level)
                if (requiredXp <= level.getLevelingXp(m.sender, _level)) {
                    level.addLevelingLevel(sender, 1, _level)
                    const userLevel = level.getLevelingLevel(m.sender, _level)
                    const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    rep = `*「 LEVEL UP 」*\n\n⬤ *Nama :* ${pushname}\n⬤ *Xp :* ${level.getLevelingXp(m.sender, _level)} / ${fetchXp}\n⬤ *Level :* ${currentLevel} -> ${level.getLevelingLevel(m.sender, _level)} 🆙 \n⬤ *Role*: *${role}*\n\nCongrats!! 🎉🎉`
                    m.reply(`${rep}`)

                    // client.sendMessage(from, gambare, image, {caption: `${rep}`, quoted: rip}).catch((err) => reply(`* terjadi kesalaahan,silahkan coba lagi nanti*`))
                }
            } catch (err) {
                console.error(err)
            }
        }

        // BGM CODE
        for (let drips of Tokibot) {
            if (budy === drips) {
                result = fs.readFileSync(`./bgm/${drips}.mp3`)
                TokiBotAq.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            }
        }

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = TokiBotAq.prepareMessageFromContent(from, { "listMessage": { "title": title, "description": desc, "buttonText": "Pilih Disini", "footerText": "𝐻𝑒𝑟𝑚𝑎𝑛 𝐶ℎ𝑎𝑛𝑒𝑙᭄𓅂", "listType": "SINGLE_SELECT", "sections": list, quoted: mek } }, {})
            return TokiBotAq.relayWAMessage(po, { waitForAck: true, quoted: mek })
        }
        // ajajajakakk				

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }

            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('autoblock' in chats)) chats.autoblock = false
                if (!('isWecome' in chats)) chats.isWelcome = true
                if (!('antilinkall' in chats)) chats.antilinkall = false
                if (!('antiytchannel' in chats)) chats.antiytchannel = false
                if (!('antitiktok' in chats)) chats.antitiktok = false
                if (!('antitelegram' in chats)) chats.antitelegram = false
                if (!('antiinstagram' in chats)) chats.antiinstagram = false
                if (!('antifb' in chats)) chats.antifb = false
                if (!('antibule' in chats)) chats.antibule = false
                if (!('antiwame' in chats)) chats.antiwame = false
                if (!('wame' in chats)) chats.wame = false
                if (!('antitwitter' in chats)) chats.antitwitter = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                wame: false,
                antilink: false,
                antilinkyt: false,
                isWelcome: true,
                antilinkall: false,
                antiytchannel: false,
                antitiktok: false,
                antitelegram: false,
                antiinstagram: false,
                antifb: false,
                antibule: false,
                antiwame: false,
                antitwitter: false,
                autoblock: false
            }
            const reactionMessage = {
                react: {
                    text: args[0],
                    key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                }
            }

            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('templateImage' in setting)) setting.templateImage = false
                if (!('templateLocation' in setting)) setting.templateLocation = false
                if (!('templateGif' in setting)) setting.templateGif = true
                if (!('templateMsg' in setting)) setting.templateMsg = false
                if (!('templateList' in setting)) setting.templateList = false
                if (!('templateDoc' in setting)) setting.templateDoc = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                templateImage: false,
                templateLocation: false,
                templateGif: true,
                templateMsg: false,
                templateList: false,
                templateDoc: false,
            }

        } catch (err) {
            console.error(err)
        }
        //----------ANTILINK ALL--------BY-DRIPS------\\
        //lets go
        if (db.data.chats[m.chat].antilinkall) {
            if (budy.includes("https")) {
                if (!isBotAdmins) return
                Tokibotv3 = `*▊▊▊DETECTED▊▊▊*\n *you are bot admin okay*`
                if (isAdmins) return m.reply(Tokibotv3)
                if (m.key.fromMe) return m.reply(Tokibotv3)
                if (isCreator) return m.reply(Tokibotv3)
                kice = m.sender
                await TokiBotAq.groupParticipantsUpdate(m.chat, [kice], 'remove')
                TokiBotAq.sendMessage(m.chat, { text: `*▊▊▊DETECTED▊▊▊*\n@${kice.split("@")[0]} *I said dont send any links okay*`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            }
        }
        //
        if (m.mtype == 'viewOnceMessage') {
            if (!db.data.chats[m.chat].antionce) return
            teks = `*▊▊▊DETECTED ONCE▊▊▊*

 `
            TokiBotAq.sendTextWithMentions(m.chat, teks, m)
            await sleep(500)
            m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`*I opened it by force*`))
        }

        //

        if (db.data.chats[m.chat].antilinkyt) {
            if (budy.includes("https://youtube.com/")) {
                if (!isBotAdmins) return
                Tokibotv3 = `*▊▊▊DETECTED▊▊▊*\n*you are admin okay*`
                if (isAdmins) return m.reply(Tokibotv3)
                if (m.key.fromMe) return m.reply(Tokibotv3)
                if (isCreator) return m.reply(Tokibotv3)
                kice = m.sender
                await TokiBotAq.groupParticipantsUpdate(m.chat, [kice], 'remove')
                TokiBotAq.sendMessage(from, { text: `*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no yt links here okay, now get out*`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            }
        }
        //
        if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                m.reply(`*▊▊▊ ANTILINK ▊▊▊*\n\n*You have been detected sending a group link, sorry you will be kicked!*`)
                if (!isBotAdmins) return m.reply(`*Bbot must be admin okay*`)
                let gclink = (`https://chat.whatsapp.com/` + await TokiBotAq.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return m.reply(`*sorry I didn't kick you, because you sent the link of this group lucky you*`)
                if (isAdmins) return m.reply(`*Ehh sorry you admin*`)
                if (isCreator) return m.reply(`*whoa you are  bot creator i wont kick you okay*`)
                TokiBotAq.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (budy.length > 3500) {
            if (!m.isGroup) return
            if (!isAntiVirtex) return
            if (groupAdmins) return
            m.reply('Mark as read\n'.repeat(300))
            m.reply(`*▊▊▊DETECTED▊▊▊*\n\n*You sent a virtex, sorry you will be kicked from the group*`)
            //console.log(('[KICK]', 'red'), color('Received a text virus!', 'yellow'))
            TokiBotAq.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        //
        // AntiWame

        if (db.data.chats[m.chat].antiwame) {
            if (budy.includes(`http://wa.me`)) {
                if (!isBotAdmins) return
                Tokibotv3 = `*▊▊▊DETECTED▊▊▊*\n\n*you are admin okay*`
                if (isAdmins) return reply(Tokibotv3)
                if (m.key.fromMe) return reply(Tokibotv3)
                if (isCreator) return reply(Tokibotv3)
                kice = m.sender
                await TokiBotAq.groupParticipantsUpdate(m.chat, [kice], 'remove')
                TokiBotAq.sendMessage(from, { text: `*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no links okay, now get out*`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            }
        }
        //
        if (db.data.chats[m.chat].autoblock) {
            if (m.chat.includes("@s.whatsapp.net")) {
                if (isCreator)
                    block = m.sender
                await TokiBotAq.sendMessage(from, { text: `*▊▊▊AUTO BLOCK▊▊▊*\n\n@${block.split("@")[0]} *today I'm blocking dumps bye you are _blocked_* *if you want to use bot join this group* ${global.group1}\n\n${global.group2}`, m })
                TokiBotAq.updateBlockStatus(m.sender, 'block')
            }
        }
        // AntilinkYt
        if (!isAntilinkyt) {
            if (budy.includes(`https://nando.com`)) {
                if (!isBotAdmins) return m.reply('*BOT MUST BE ADMIN OKAY*')
                m.reply(`*▊▊▊ ANTIYT ▊▊▊*\n\n*SOrry ${botname} will kick you out because what you sent is a youtube link in this group*`)
                if (isAdmins) return m.reply(`*Ehh sorry you admin*`)
                if (isCreator) return m.reply(`*whoa you are  bot creator i wont kick you okay*`)
                kice = m.sender
                await TokiBotAq.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => ads(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                TokiBotAq.sendMessage(m.chat, { text: `*▊▊▊ ANTILINK ▊▊▊*\n\n@${kice.split("@")[0]} *Has been kicked for sending the youtube link in this group*`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            }
        }

        /// Anti Bule
        if (db.data.chats[m.chat].antibule) {
            if (m.sender.includes(`+212`)) {
                if (!isBotAdmins) return m.reply('*BOT MUST BE ADMIN OKAY*')
                m.reply(`*▊▊▊ ANTIBULE ▊▊▊*\n\n*Sorry ${botname} will kick you out because you are a stranger in this group*`)
                if (isAdmins) return m.reply(`*Ehh sorry you admin*`)
                if (isCreator) return m.reply(`*whoa you are  bot creator i wont kick you okay*`)
                kice = m.sender
                await TokiBotAq.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                TokiBotAq.sendMessage(m.chat, { text: `*▊▊▊ ANTILINK ▊▊▊*\n\n@${kice.split("@")[0]} *You shouldn't be in this group*`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            }
        }

        // Mute Chat
        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
            let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
            let { text, mentionedJid } = hash
            let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
                userJid: TokiBotAq.user.id,
                quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = areJidsSameUser(m.sender, TokiBotAq.user.id)
            messages.key.id = m.key.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: 'append'
            }
            TokiBotAq.ev.emit('messages.upsert', msg)
        }

        //TicTacToe
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                m.reply({
                    '-3': 'Game has ended',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                }[ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                }[v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to give up and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await TokiBotAq.sendText(room.x, str, m, { mentions: parseMention(str) })
            await TokiBotAq.sendText(room.o, str, m, { mentions: parseMention(str) })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }

        //Suit PvP
        this.suit = this.suit ? this.suit : {}
        let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let win = ''
            let tie = false
            if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
                    TokiBotAq.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
                    delete this.suit[roof.id]
                    return !0
                }
                roof.status = 'play'
                roof.asal = m.chat
                clearTimeout(roof.waktu)
                //delete roof[roof.id].waktu
                TokiBotAq.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
                if (!roof.pilih) TokiBotAq.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
                if (!roof.pilih2) TokiBotAq.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) TokiBotAq.sendText(m.chat, `*Neither player intends to play,\nSuit cancelled*`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        TokiBotAq.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} *don't choose suit, game over*`, m)
                    }
                    delete this.suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /gunting/i
            let b = /batu/i
            let k = /kertas/i
            let reg = /^(gunting|batu|kertas)/i
            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0]
                roof.text = m.text
                m.reply(`*You have chosen* ${m.text} ${!roof.pilih2 ? `\n\n*Waiting for the opponent to choose*` : ''}`)
                if (!roof.pilih2) TokiBotAq.sendText(roof.p2, '*_Your opponent has chosen_\nNow its your turn*', 0)
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                m.reply(`*You have chosen*${m.text} ${!roof.pilih ? `\n\n*Waiting for the opponent to choose*` : ''}`)
                if (!roof.pilih) TokiBotAq.sendText(roof.p, '*_Your opponent has chosen_\nNow its your turn*', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                TokiBotAq.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
                delete this.suit[roof.id]
            }
        }

        switch (command) {
            case 'ttc': case 'ttt': case 'tictactoe': {

                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*You are still in the game*'
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    m.reply('*Partners found!*')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        }[v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

*Wait* @${room.game.currentTurn.split('@')[0]}

Type *give up* to give up and admit defeat`
                    if (room.x !== room.o) await TokiBotAq.sendText(room.x, str, m, { mentions: parseMention(str) })
                    await TokiBotAq.sendText(room.o, str, m, { mentions: parseMention(str) })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    m.reply('*Waiting for partner*' + (text ? ` *type the command below* ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
                break
            case 'delttc': case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        TokiBotAq.sendText(m.chat, `*Successfully delete the TicTacToe session*`, m)
                    } else if (!this.game) {
                        m.reply(`*Session TicTacToe🎮 does not exist*`)
                    } else throw '?'
                } catch (e) {
                    m.reply('*damaged*')
                }
            }
                break
            case 'suitpvp': case 'suit': {

                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`*Complete your previous suit*`)
                if (m.mentionedJid[0] === m.sender) return m.reply(`*Can not play with yourself !*`)
                if (!m.mentionedJid[0]) return m.reply(`*_Who do you want to challenge?_\nTag the person..*\n\nExemplo : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `*The person you are challenging is playing suit with someone else* :(`
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PVP*_

@${m.sender.split`@`[0]} *challenge* @${m.mentionedJid[0].split`@`[0]} *to play suit*

Please @${m.mentionedJid[0].split`@`[0]}  *type accept/reject*`
                this.suit[id] = {
                    chat: await TokiBotAq.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) TokiBotAq.sendText(m.chat, `*_suit time out_*`, m)
                        delete this.suit[id]
                    }, 60000), poin, poin_lose, timeout
                }
            }
                break
            case 'restart': {
                if (!isCreator) throw mess.owner
                exec(`npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs`)
                m.reply('*Restarting Tokibot....*')
            }
                break
            case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {

                TokiBotAq.sendMessage(m.chat, { image: fs.readFileSync(`./Tokibot/tomioka.jpg`), caption: `*Olá ${m.pushName}*\n\n *obg por doar!! sua contribuição ajudára ainda mais na tradução do bot e melhorá-lo!* ` }, { quoted: m })
            }
                break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    TokiBotAq.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    TokiBotAq.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    TokiBotAq.chatModify({ archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    TokiBotAq.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    TokiBotAq.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    TokiBotAq.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    TokiBotAq.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true } } }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
                break
            case 'bantuan': {

                await m.reply(monospace(q))
            }
                break
            case 'quizmath': case 'math': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "*There Are Still Unfinished Sessions!*"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nUsage Exemplos: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                TokiBotAq.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    //console.log("Jawaban: " + result.jawaban)
                    m.reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
                break
            case 'soulmate': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                let member = participants.map(u => u.id)
                let me = m.sender
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                let ments = [me, jodoh]
                let buttons = [
                    { buttonId: '', buttonText: { displayText: 'SOULMATE❤️' }, type: 1 }
                ]
                await TokiBotAq.sendButtonText(m.chat, buttons, jawab, TokiBotAq.user.name, m, { mentions: ments })
            }
                break
            case 'couple': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                let member = participants.map(u => u.id)
                let orang = member[Math.floor(Math.random() * member.length)]
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `What happened Don't forget the tax

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                let menst = [orang, jodoh]
                let buttons = [
                    { buttonId: '', buttonText: { displayText: 'CHEERS TO THAT❤️' }, type: 1 }
                ]
                await TokiBotAq.sendButtonText(m.chat, buttons, jawab, TokiBotAq.user.name, m, { mentions: menst })
            }
                break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                TokiBotAq.sendMessage(m.chat, reactionMessage)
            }
                break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw '*Enter the Link Group!*'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await TokiBotAq.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await TokiBotAq.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'setexif': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*Exemplo : ${prefix + command} Tokibot|drips*`
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                m.reply(`*Exif successfully changed to\n\n> Packname : ${global.packname}\n> Author : ${global.author}*`)
            }
                break
            case 'kick': case 'remove': {

                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await TokiBotAq.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'add': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isCreator) throw mess.owner


                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await TokiBotAq.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'promote': {

                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin


                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await TokiBotAq.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'pDONO': case 'promoteDONO': { //corded by drips

                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isCreator) throw mess.owner


                let users = m.sender[0] ? m.sender : text.replace(/[^global.owner]/g, '') + '@s.whatsapp.net'
                await TokiBotAq.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }

                break
            case 'demote': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin


                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await TokiBotAq.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'ban': case 'banned': {
                if (!isCreator) return m.reply(mess.owner)
                if (!args[0]) return m.reply(`*Enter Option Select add or delete*`)
                if (args[1]) {
                    orgnye = args[1] + "@s.whatsapp.net"
                } else if (m.quoted) {
                    orgnye = m.quoted.sender
                }
                const isBane = banned.includes(orgnye)
                if (args[0] === "add") {
                    if (isBane) return m.reply('*User has been banned*')
                    banned.push(orgnye)
                    m.reply(`Succes ban`)
                } else if (args[0] === "del") {
                    if (!isBane) return m.reply('*ban lifted you happy*')
                    let delbans = banned.indexOf(orgnye)
                    banned.splice(delbans, 1)
                    m.reply(`*Success Removing Banned Users*`)
                } else {
                    m.reply("Error")
                }
            }
                break
            case 'block': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await TokiBotAq.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'unblock': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await TokiBotAq.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'setname': case 'setsubject': {

                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'


                await TokiBotAq.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'setdesc': case 'setdesk': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await TokiBotAq.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'setppbot': {

                if (!isCreator) throw mess.owner
                if (!quoted) throw `*Send/Reply Image With Caption* ${prefix + command}`
                if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
                if (/webp/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
                let media = await TokiBotAq.downloadAndSaveMediaMessage(quoted)
                await TokiBotAq.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
            }
                break
            case 'setppgroup': case 'setppgrup': case 'setppgc': {

                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `*Send/Reply Image With Caption* ${prefix + command}`
                if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
                if (/webp/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`


                let media = await TokiBotAq.downloadAndSaveMediaMessage(quoted)
                await TokiBotAq.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
            }
                break
            case 'tagall': case 'tag': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let teks = ` 
     ┏━━━━━━━━━━━┑
     ┃🌟𝗧𝗔𝗚𝗔𝗟𝗟🌟
     ┃┄┄┄┄┄┄┄┄┄┄┄┊
     ┃*𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : ${q ? q : 'blank'}*\n\n
     ┗━━━━━━━━ 
    `
                for (let mem of participants) {
                    teks += `🎪 @${mem.id.split('@')[0]}\n`
                }
                TokiBotAq.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break
            case 'hidetag': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                TokiBotAq.sendMessage(m.chat, { text: q ? q : '', mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break
            case 'style': case 'styletext': {

                //  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let { styletext } = require('./lib/scraper3')
                if (!text) throw '*Enter Query text!*'


                let anu = await styletext(text)
                let teks = `*Srtle Text From* ${text}\n\n`
                for (let i of anu) {
                    teks += `> *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
            }
                break
            case 'group': case 'grup': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close') {
                    await TokiBotAq.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Successfully closing group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await TokiBotAq.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Successfully opening the group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                    let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, buttons, `*MODE GROUP*`, TokiBotAq.user.name, m)

                }
            }
                break
            case 'editinfo': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'open') {
                    await TokiBotAq.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Successfully opened edit group info*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await TokiBotAq.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Successfully close edit group info*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                    let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, buttons, `Mode Edit Info`, TokiBotAq.user.name, m)

                }
            }
                break
            case 'antibule': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antibule) return m.reply(`*Already on umm okay*`)
                    db.data.chats[m.chat].antibule = true
                    m.reply(`*Antilink active*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antibule) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].antibule = false
                    m.reply(`*Antilink disabled*`)
                } else {
                    let drips = [
                        { buttonId: 'antibule on', buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: 'antibule off', buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, TokiBotAq.user.name, m)
                }
            }
                break
            case 'antiwame': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antiwame) return m.reply(`*Already on umm okay*`)
                    db.data.chats[m.chat].antiwame = true
                    m.reply(`*Antilink active*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antiwame) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].antiwame = false
                    m.reply(`*Antilink disabled*`)
                } else {
                    let drips = [
                        { buttonId: 'antiwame on', buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: 'antiwame off', buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, TokiBotAq.user.name, m)
                }
            }
                break
            case 'autoblock': { //BY DRIPS

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!isCreator) throw mess.owner
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].autoblock) return m.reply(`*Already on umm okay*`)
                    db.data.chats[m.chat].autoblock = true
                    m.reply(`*Autoblock active*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].autoblock) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].autoblock = false
                    m.reply(`*Autoblock disabled*`)
                } else {
                    let drips = [
                        { buttonId: 'autoblock on', buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: 'autoblock off', buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, TokiBotAq.user.name, m)
                }
            }
                break
            case 'antibadword': {
                if (isBan) return m.reply(mess.ban)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (args[0] === "on") {
                    if (antiToxic) return m.reply('*Already activated*')
                    dripsanti.push(from)
                    m.reply('*Success turning on anti rude in this group*')
                    var group = await TokiBotAq.groupMetadata(from)
                    var members = group['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    TokiBotAq.sendMessage(from, { text: `*▊▊▊ANTILINK RUDE▊▊▊*\n\n*no hate speech anymore, watch space im going to kick dumps*`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!antiToxic) return m.reply('*Already deactivated*')
                    let off = dripsanti.indexOf(from)
                    dripsanti.splice(off, 1)
                    m.reply('*Success in turning off antirude in this group happy now*')
                } else {
                    let buttons = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, buttons, `*▊▊▊ANTILINK BADWORDS▊▊▊*\n\n.`, `${global.botname}`, m)
                }
            }
                break
                /*  case 'welcome': {
                   if (isBan) return m.reply(mess.ban)	 			
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins && !isCreator) return m.reply(mess.admin)
                if (args[0] === "on") {
                if (isWelcome) return m.reply('*Already activated*')
                dripswelcome.push(from)
                m.reply('*Success turning on anti rude in this group*')
                var group = await TokiBotAq.groupMetadata(from)
                var members = group['participants']
                var mems = []
                members.map(async adm => {
                mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                TokiBotAq.sendMessage(from, {text: `*▊▊▊▊▊▊*\n\n**`, contextInfo: { mentionedJid : mems }}, {quoted:m})
                } else if (args[0] === "off") {
                if (!isWelcome) return m.reply('*Already deactivated*')
                let off = dripswelcome.indexOf(from)
                dripswelcome.splice(off, 1)
                m.reply('*Success in turning off antirude in this group happy now*')
                } else {
                  let buttons = [
                  { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                  { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                  ]
                  await TokiBotAq.sendButtonText(m.chat, buttons, `*▊▊▊▊▊▊*\n\n.`, `${global.botname}`, m)
                  }
                  }*/
                break
            case 'antilinkyt': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinkyt) return m.reply(`*Already on umm okay*`)
                    db.data.chats[m.chat].antilinkyt = true
                    m.reply(`*Antilink active*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinkyt) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].antilinkyt = false
                    m.reply(`*Antilink disabled*`)
                } else {
                    let drips = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, TokiBotAq.user.name, m)
                }
            }
                break

            case 'antilink': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return m.reply(`*Already on umm okay*`)
                    db.data.chats[m.chat].antilink = true
                    m.reply(`*Antilink active*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].antilink = false
                    m.reply(`*Antilink disabled*`)
                } else {
                    let drips = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, TokiBotAq.user.name, m)
                }
            }
                break
            case 'antivideo': case 'antivid': case 'antytvid': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antivideo) return m.reply(`*Already on umm okay*`)
                    db.data.chats[m.chat].antivideo = true
                    m.reply(`*Antilink active*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antivideo) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].antivideo = false
                    m.reply(`*Antilink disabled*`)
                } else {
                    let drips = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, TokiBotAq.user.name, m)
                }
            }
                break
            case 'antiytchannel': case 'antilinkyoutubechannel': case 'antiytchannel': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antiytchannel) return m.reply(`*Already on umm okay*`)
                    db.data.chats[m.chat].antiytchannel = true
                    m.reply(`*Antilink active*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antiytchannel) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].antiytchannel = false
                    m.reply(`*Antilink disabled*`)
                } else {
                    let drips = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, TokiBotAq.user.name, m)
                }
            }
                break
            case 'antilinkinstagram': case 'adripsantiig': case 'antiinsta': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antiinstagram) return m.reply(`*Already on umm okay*`)
                    db.data.chats[m.chat].antiinstagram = true
                    m.reply(`*Antilink active*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antiinstagram) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].antiinstagram = false
                    m.reply(`*Antilink disabled*`)
                } else {
                    let drips = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, TokiBotAq.user.name, m)
                }
            }
                break
            case 'antilinkfacebook': case 'antifb': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antifb) return m.reply(`*Already on umm okay*`)
                    db.data.chats[m.chat].antifb = true
                    m.reply(`*Antilink active*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antifb) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].antifb = false
                    m.reply(`*Antilink disabled*`)
                } else {
                    let drips = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, TokiBotAq.user.name, m)
                }
            }
                break
            case 'antitelegram': case 'adripsantitele': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antitelegram) return m.reply(`*Already on umm okay*`)
                    db.data.chats[m.chat].antitelegram = true
                    m.reply(`*Antilink active*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antitelegram) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].antitelegram = false
                    m.reply(`*Antilink disabled*`)
                } else {
                    let drips = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, TokiBotAq.user.name, m)
                }
            }
                break
            case 'antiviewonce': case 'antionce':
                if (isBan) return m.reply(mess.ban)
                if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
                if (args[0] === "on") {
                    if (global.db.data.chats[m.chat].antionce) return m.reply(`*Already activated*`)
                    global.db.data.chats[m.chat].antionce = true
                    m.reply(`${command} *Successfully Activated*`)
                } else if (args[0] === "off") {
                    if (!global.db.data.chats[m.chat].antionce) return m.reply(`*Already deactivated*`)
                    global.db.data.chats[m.chat].antionce = false
                    m.reply(`${command} *Successfully Deactivated*`)
                } else {
                    let drips = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK VIEW▊▊▊*`, `${global.botname}`, m)
                }
                break
            case 'antitiktok': case 'aantitik': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antitiktok) return m.reply(`*Already on umm okay*`)
                    db.data.chats[m.chat].antitiktok = true
                    m.reply(`*Antilink active*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antitiktok) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].antitiktok = false
                    m.reply(`*Antilink disabled*`)
                } else {
                    let drips = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, TokiBotAq.user.name, m)
                }
            }
                break
            case 'antilinkall': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinkall) return m.reply(`*Already on umm okay*`)
                    db.data.chats[m.chat].antilinkall = true
                    m.reply(`*Antilink active*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinkall) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].antilinkall = false
                    m.reply(`*Antilink disabled*`)
                } else {
                    let drips = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, TokiBotAq.user.name, m)
                }
            }
                break
            case 'adripsantitwt': case 'antitwitter': case 'antilinktwit': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antitwitter) return m.reply(`*Already on umm okay*`)
                    db.data.chats[m.chat].antitwitter = true
                    m.reply(`*Antilink active*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antitwitter) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].antitwitter = false
                    m.reply(`*Antilink disabled*`)
                } else {
                    let drips = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, TokiBotAq.user.name, m)
                }
            }
                break
            /*             case 'antilinkall': {
              if (isBan) return m.reply(mess.ban)	 			
           if (!m.isGroup) return m.reply(mess.group)
           if (!isBotAdmins) return m.reply(mess.botAdmin)
           if (!isAdmins && !isCreator) return m.reply(mess.admin)
           if (args[0] === "on") {
           if (isAntiLinkTwitter) return m.reply('**Already activated**')
           antilinkall.push(m.chat)
           fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall))
           m.reply('*Success  turning on all antilink in this group*')
           var group = await TokiBotAq.groupMetadata(from)
           var members = group['participants']
           var mems = []
           members.map(async adm => {
           mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
           })
           TokiBotAq.sendMessage(m.chat, {text: `*▊▊▊ANTILINK ALL▊▊▊*\n*turned on dont play with links*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
           } else if (args[0] === "off") {
           if (!isAntiLinkAll) return m.reply('**Already deactivated**')
           let off = antilinkall.indexOf(m.chat)
           antilinkall.splice(off, 1)
           m.reply('*Success  turning off all antilink in this group*')
           } else {
             let buttonsntilink = [
             { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
             { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
             ]
             await TokiBotAq.sendButtonText(m.chat, buttonsntilink, `*▊▊▊ANTILINK MODE▊▊▊*`, `${global.botname}`, m)
             }
             }
            */

            case 'antitag': {
                if (isBan) return m.reply(mess.ban)
                if (!isCreator) return
                if (args.length < 1) return m.reply(`*ON OR OFF*`)
                if (args[0] === 'on') {
                    if (antitags === true) return
                    global.antitags = true
                    m.reply(`Successfully activated antitag!`)
                } else if (args[0] === 'off') {
                    if (antitags === false) return
                    global.antitags = false
                    m.reply(`Successfully deactivated antitag!`)
                } else {
                    m.reply('Choose on or off')
                }
            }
                break
            case 'mute': {

                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin


                if (args[0] === "on") {
                    if (db.data.chats[m.chat].mute) return m.reply(`*Already on okay*`)
                    db.data.chats[m.chat].mute = true
                    m.reply(`${TokiBotAq.user.name} *has been muted in this group!*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].mute) return m.reply(`*Already off okay*`)
                    db.data.chats[m.chat].mute = false
                    m.reply(`${TokiBotAq.user.name} *has been unmuted in this group!*`)
                } else {
                    let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await TokiBotAq.sendButtonText(m.chat, buttons, `Mute Bot`, TokiBotAq.user.name, m)
                }
            }
                break
            case 'linkgroup': case 'linkgc': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                let response = await TokiBotAq.groupInviteCode(m.chat)
                TokiBotAq.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n*Link Group* : ${groupMetadata.subject}`, m, { detectLink: true })
            }
                break
            case 'ephemeral': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw '*Enter the enable/disable value*'
                if (args[0] === 'enable') {
                    await TokiBotAq.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await TokiBotAq.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
                break
            case 'delete': case 'del': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw '*The message was not sent by a bot!*'
                TokiBotAq.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
                break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*Type some text*\n\nExemplo : ${prefix + command} ZIM-BOT-INC`
                let getGroups = await TokiBotAq.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} second*`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                        urlButton: {
                            displayText: 'GITHUB',
                            url: 'https://github.com/SilasJr-dev/'
                        }
                    }]
                    let txt = `「 *ZIMBOT BROADCAST* 」\n\n${text}`
                    TokiBotAq.send5ButImg(i, txt, botname, global.bc, btn)
                }
                m.reply(` *Send Broadcast To* ${anu.length} *Group*`)
            }
                break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*Type some text*\n\nExemplo : ${prefix + command} ZIM-BOT-INC`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} second`)
                for (let yoi of anu) {
                    await sleep(1500)
                    let btn = [{
                        urlButton: {
                            displayText: 'GITHUB',
                            url: 'https://github.com/SilasJr-dev/'
                        }
                    }]
                    let txt = `「 *ZIMBOT BROADCAST* 」\n\n${text}`
                    TokiBotAq.send5ButImg(yoi, txt, botname, global.bc, btn)
                }
                m.reply('*Success Broadcast*')
            }
                break
            case 'bc2': case 'bcloc': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*Type some text*\n\nExemplo : ${prefix + command} drips|hi5`
                let anu = await store.chats.all().map(v => v.id)
                let [melo, melo2] = text.split`|`
                m.reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} minutes`)
                for (let yoi of anu) {
                    await sleep(1500)
                    var button = [{ buttonId: `${prefix}ho`, buttonText: { displayText: `${melo2}` }, type: 1 }]
                    TokiBotAq.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak + 'Brodcast') }, buttons: button, footer: `${botname}`, mentions: [m.sender] })
                }
            }
                break
            case 'bcimage': case 'bcvideo': case 'bcaudio': {
                if (!isCreator) throw mess.owner
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`
                let anu = await store.chats.all().map(v => v.id)
                let ftroli = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us" }, "message": { orderMessage: { itemCount: 2022, status: 200, thumbnail: fs.readFileSync('./lib/hisoka.jpg'), surface: 200, message: `ZIM-BOT-INC`, orderTitle: 'ZIM-BOT-INC', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
                m.reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} minutes*`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                        urlButton: {
                            displayText: `GITHUB`,
                            url: 'https://github.com/SilasJr-dev/'
                        }
                    },
                    {
                        quickReplyButton: {
                            displayText: 'MENU',
                            id: 'menu'
                        }
                    }]
                    let media = await TokiBotAq.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                        TokiBotAq.sendMessage(i, { sticker: { url: media } }, { quoted: ftroli })
                    } else if (/image/.test(mime)) {
                        let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
                        TokiBotAq.send5ButImg(i, junn, `${global.botname}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                        let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
                        TokiBotAq.sendMessage(i, { video: buffer, caption: `${junn}` }, { quoted: ftroli })
                    } else if (/audio/.test(mime)) {
                        TokiBotAq.sendMessage(i, { audio: buffer, mimetype: 'audio/mpeg' }, { quoted: ftroli })
                    } else {
                        m.reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                }
                m.reply(` *Send Broadcast To* ${anu.length} *Chats*`)
            }
                break
            case 'bctext': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*Type some text*\n\nExemplo : ${prefix + command} zim-ot`
                //let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 666666666,status: 200, thumbnail: await getBuffer(picak+'Brodcast'), surface: 200, message: `© ${botname}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                let ftroli = { key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${TokiBotAq.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak + 'Brodcast'), thumbnail: await getBuffer(picak + 'Brodcast'), sendEphemeral: true } } }
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
                for (let yoi of anu) {
                    await sleep(1500)
                    TokiBotAq.sendMessage(yoi, { text: `${text}` }, { quoted: ftroli })
                }
                m.reply('*Success Broadcast*')
            }
                break
            case 'bcvid': case 'bcvideo': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*use ${prefix + command}|text*`
                let buf = `https://telegra.ph/file/f8b17ce3b28bb5f25f5e1.mp4`
                let ftroli = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us" }, "message": { orderMessage: { itemCount: 999999999999, status: 200, thumbnail: await getBuffer(picak + 'Brodcast'), surface: 200, message: `© ${botname}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} minute*`)
                for (let yoi of anu) {
                    await sleep(1500)
                    TokiBotAq.sendMessage(yoi, { video: await getBuffer(buf), jpegThumbnail: await getBuffer(picak + 'Brodcast'), caption: `${text}` }, { quoted: ftroli }).catch((err) => m.reply('*Sorry, failed to send the video*'))
                }
                m.reply('*Sucecess Broadcast*')
            }
                break
            case 'infochat': case 'sider': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted) m.reply('*Reply message*')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw '*The message was not sent by a bot!*'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `> @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━> *TIME :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} > *STATUS :* ${read ? 'READ' : 'SENT'}\n\n`
                }
                TokiBotAq.sendTextWithMentions(m.chat, teks, m)
            }
                break
            case 'q': case 'quoted': {

                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted) return m.reply('*Reply Messagenya!!*')


                let wokwol = await TokiBotAq.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return m.reply('*The message you replied to does not contain a reply*')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
                break
            case 'listpc': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    teks += `⬡ *NAME :* ${nama}\n⬡ *USER :* @${i.split('@')[0]}\n⬡ *CHAT :* https://wa.me/${i.split('@')[0]}\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
                }
                TokiBotAq.sendTextWithMentions(m.chat, teks, m)
            }
                break
                break
            case 'stickerly': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} patrick`
                anu = await fetchJson(`https://xteam.xyz/sticker/stickerly?q=${text}&APIKEY=${setting.riy}`)
                m.reply(`${util.format(anu)}`)
            }
                break
            case 'stickerline': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} https://store.line.me/stickershop/product/9409/id`
                anu = await fetchJson(`https://xteam.xyz/sticker/stickerline?url=${text}&APIKEY=${setting.riy}`)
                m.reply(`${util.format(anu)}`)
            }
                break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await TokiBotAq.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maximum 10 seconds!*')
                    let media = await quoted.download()
                    let encmedia = await TokiBotAq.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `*Send Image/Video With Caption ${prefix + command}\nDuration 1-9 Seconds*`
                }
            }
                break

            case 'swm': case 'stickerwm': case 'wm': {

                if (!args.join(" ")) return m.reply(`Exemplo :\n${prefix}swm drips love | tuna`)


                const swn = args.join(" ")
                const pcknm = swn.split("|")[0];
                const atnm = swn.split("|")[1];
                if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
                if (m.quoted.isAnimated === true) {
                    TokiBotAq.downloadAndSaveMediaMessage(quoted, "gifee")
                    TokiBotAq.sendMessage(m.chat, { sticker: fs.readFileSync("gifee.webp") }, { quoted: m })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await TokiBotAq.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await TokiBotAq.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                    await fs.unlinkSync(encmedia)
                } else {
                    m.reply(`*Send Image/Video With Caption* ${prefix + command}\n*Duration Video 1-9 seconds*`)
                }
            }
                break
            case 'attp': {

                if (!text) throw `*Exemplo : ${prefix + command} drips hi*`


                await TokiBotAq.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, 'ZIM', 'BOT M D', m, { asSticker: true }).catch((err) => m.reply('*error while sending sticker*'))
            }
                break
            case 'attp4': {

                if (!text) throw `*Exemplo : ${prefix + command} drips hi*`


                await TokiBotAq.sendMedia(m.chat, `https://api.xteam.xyz/attp?file&teks=${text}`, 'ZIM', 'BOT M D', m, { asSticker: true }).catch((err) => m.reply('*error while sending sticker*'))
            }
                break
            case 'ttp1': {

                if (!text) return m.reply(`*NEED TEXT*`)


                TokiBotAq.sendMessage(m.chat, { sticker: { url: `https://cililitan.herokuapp.com/api/texttopng?teks=${text}` }, quoted: m }).catch((err) => m.reply('*error while sending sticker*'))
            }
                break
            case 'ttp2': {

                if (!text) throw `Exemplo : ${prefix + command} text`
                await TokiBotAq.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, { asSticker: true })
            }
                break

            case 'ebinary': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
                let { eBinary } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let eb = await eBinary(teks)
                m.reply(eb)
            }
                break
            case 'dbinary': {

                if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
                let { dBinary } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let db = await dBinary(teks)
                m.reply(db)
            }
                break
            case 'emojimix': {

                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 😅+🤔`


                let [emoji1, emoji2] = text.split`+`
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await TokiBotAq.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                    await fs.unlinkSync(encmedia)
                }
            }
                break
            case 'emojimix2': {

                if (!text) throw `Exemplo : ${prefix + command} 😅`
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await TokiBotAq.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                    await fs.unlinkSync(encmedia)
                }
            }
                break
            case 'semoji': case 'emoji': case 'emoticon': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 😱`


                anu = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${encodeURIComponent(text)}?apikey=${setting.lolkey}`)
                TokiBotAq.sendImageAsSticker(m.chat, anu.result.emoji.whatsapp, m, { packname: global.packname, author: global.author }).catch((err) => m.reply(jsonformat('*Sorry there was an error*')))
            }
                break
            case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {

                let respond = `*Send/reply image/sticker with caption* ${prefix + command} text1|text2`


                if (!/image/.test(mime)) throw respond
                if (!text) throw respond
                m.reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await quoted.download()
                let { floNime } = require('./lib/uploader')
                let fatGans = await floNime(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
                let FaTiH = await TokiBotAq.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
                await fs.unlinkSync(FaTiH)
            }
                break
            case 'toimage': case 'toimg': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
                m.reply(mess.wait)
                let media = await TokiBotAq.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    TokiBotAq.sendMessage(m.chat, { image: buffer, jpegThumbnail: buffer, caption: `*Sticker Toimg By ${botname}*` }, { quoted: m }).catch((err) => m.reply('*Sorry An error occurred*'))
                    fs.unlinkSync(ran)
                })
            }
                break
            case 'ss': case 'ssweb': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Url`


                anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`)
                buf = await getBuffer(anu.screenshot)
                TokiBotAq.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail: buf, caption: `*${command} From ${text}*` }, { quoted: m }).catch((err) => m.reply(jsonformat('*error*')))
            }
                break
            case 'simisimi': case 'simi': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `*Exemplo : ${prefix + command} halo simi*`
                x = await fetchJson(`https://xteam.xyz/simsimi?kata=${text}&APIKEY=${setting.riy}`)
                m.reply(`${x.jawaban}`)
            }
                break
            case 'tomp4': case 'tovideo': {

                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`


                let { webp2mp4File } = require('./lib/uploader')
                let media = await TokiBotAq.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await TokiBotAq.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
                break
            case 'toaud': case 'toaudio': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
                if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`


                let media = await quoted.download()
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                TokiBotAq.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: m })
            }
                break
            case 'tomp3': {

                //  //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
                if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`


                let media = await quoted.download()
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                TokiBotAq.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${TokiBotAq.user.name}.mp3` }, { quoted: m })
            }
                break
            case 'tovn': case 'toptt': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
                if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
                m.reply(mess.wait)
                let media = await quoted.download()
                let { toPTT } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                TokiBotAq.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
            }
                break
            case 'togif': {

                //  //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`


                let { webp2mp4File } = require('./lib/uploader')
                let media = await TokiBotAq.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await TokiBotAq.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
                break
            case 'tourl': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!/image/.test(mime) && !/video/.test(mime)) throw `*Send/Reply Image/video With Caption* ${prefix + command}`
                let { UploadFileUgu, webp2mp4File, floNime, TelegraPh } = require('./lib/uploader')
                m.reply(mess.wait)
                let media = await TokiBotAq.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
                break
            case 'imagenobg': case 'removebg': case 'remove-bg': {

                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)    
                if (!quoted) throw `*Send/Reply Image With Caption* ${prefix + command}`
                if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
                if (/webp/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`


                let remobg = require('remove.bg')
                let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL']
                let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
                hmm = await './src/remobg-' + getRandom('')
                localFile = await TokiBotAq.downloadAndSaveMediaMessage(quoted, hmm)
                outputFile = await './src/hremo-' + getRandom('.png')
                remobg.removeBackgroundFromImageFile({
                    path: localFile,
                    apiKey: apinobg,
                    size: "regular",
                    type: "auto",
                    scale: "100%",
                    outputFile
                }).then(async result => {
                    TokiBotAq.sendMessage(m.chat, { image: fs.readFileSync(outputFile), caption: mess.success }, { quoted: m })
                    await fs.unlinkSync(localFile)
                    await fs.unlinkSync(outputFile)
                })
            }
                break




            case 'nulis': case 'nuliskanan': case 'nuliskiri': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} apa itu javascrip`


                yah = await getBuffer(`https://xteam.xyz/magernulis3?text=${text}&APIKEY=${setting.riy}`)
                TokiBotAq.sendMessage(m.chat, { image: yah }, { quoted: m }).catch((err) => m.reply('*Failed in writing*'))
            }
                break
            case 'magernulis': {

                if (!text) throw `*Exemplo : ${prefix + command} name|drips|class1|the most beautiful*`
                let [tes1, tes2, tes3] = text.split`|`


                buf = await getBuffer(`https://xteam.xyz/magernulis?nama=${tes1}&kelas=${tes2}&text=${text}&APIKEY=${setting.riy}`)
                TokiBotAq.sendMessage(m.chat, { image: buf, jpegThumbnail: buf, caption: `TOKI BOT` }, { quoted: m }).catch((err) => m.reply('*Sorry Failed In Writing*'))
            }
                break
            case 'magernulis2': {

                if (!text) throw `*Exemplo : ${prefix + command} honey have you eaten yet*`
                //let [tes1, tes2, tes3] = text.split`|`


                buf = await getBuffer(`https://xteam.xyz/magernulis2?text=${text}&APIKEY=${setting.riy}`)
                TokiBotAq.sendMessage(m.chat, { image: buf, jpegThumbnail: buf, caption: `TOKI BOT` }, { quoted: m }).catch((err) => m.reply('Sorry Failed In Writing*'))
            }
                break
            case 'magernulis3': {

                if (!text) throw `Exemplo : ${prefix + command} honey have you eaten yet*`
                //let [tes1, tes2, tes3] = text.split`|`


                buf = await getBuffer(`https://xteam.xyz/magernulis3?text=${text}&APIKEY=${setting.riy}`)
                TokiBotAq.sendMessage(m.chat, { image: buf, jpegThumbnail: buf, caption: `TOKI BOT` }, { quoted: m }).catch((err) => m.reply('Sorry Failed In Writing*'))
            }
                break
            case 'magernulis4': {

                if (!text) throw `*Exemplo : ${prefix + command} honey have you eaten yet*`
                //let [tes1, tes2, tes3] = text.split`|`


                buf = await getBuffer(`https://xteam.xyz/magernulis4?text=${text}&APIKEY=${setting.riy}`)
                TokiBotAq.sendMessage(m.chat, { image: buf, jpegThumbnail: buf, caption: `TOKI BOT` }, { quoted: m }).catch((err) => m.reply('Sorry Failed In Writing*'))
            }
                break
            case 'magernulis5': {

                if (!text) throw `8Exemplo : ${prefix + command} honey have you eaten yet*`
                //let [tes1, tes2, tes3] = text.split`|`


                buf = await getBuffer(`https://xteam.xyz/magernulis5?text=${text}&APIKEY=${setting.riy}`)
                TokiBotAq.sendMessage(m.chat, { image: buf, jpegThumbnail: buf, caption: `TOKI BOT` }, { quoted: m }).catch((err) => m.reply('Sorry Failed In Writing*'))
            }
                break
            case 'magernulis6': {

                if (!text) throw `*Exemplo : ${prefix + command} honey have you eaten yet*`
                //let [tes1, tes2, tes3] = text.split`|`


                buf = await getBuffer(`https://xteam.xyz/magernulis6?text=${text}&APIKEY=${setting.riy}`)
                TokiBotAq.sendMessage(m.chat, { image: buf, jpegThumbnail: buf, caption: `TOKI BOT` }, { quoted: m }).catch((err) => m.reply('Sorry Failed In Writing*'))
            }
                break

            //search cmds by Tokibot

            case 'yts': case 'ytsearch': case 'youtubesearch': const _0x244632 = _0x2493; (function (_0x42e7e3, _0x26c668) { const _0x3abfea = _0x2493, _0x4da3ee = _0x42e7e3(); while (!![]) { try { const _0xec78a2 = -parseInt(_0x3abfea(0x17b)) / 0x1 + -parseInt(_0x3abfea(0x180)) / 0x2 * (-parseInt(_0x3abfea(0x17f)) / 0x3) + -parseInt(_0x3abfea(0x18b)) / 0x4 * (-parseInt(_0x3abfea(0x165)) / 0x5) + parseInt(_0x3abfea(0x173)) / 0x6 + -parseInt(_0x3abfea(0x171)) / 0x7 + parseInt(_0x3abfea(0x166)) / 0x8 * (-parseInt(_0x3abfea(0x16f)) / 0x9) + parseInt(_0x3abfea(0x17d)) / 0xa * (-parseInt(_0x3abfea(0x178)) / 0xb); if (_0xec78a2 === _0x26c668) break; else _0x4da3ee['push'](_0x4da3ee['shift']()); } catch (_0x4ab77b) { _0x4da3ee['push'](_0x4da3ee['shift']()); } } }(_0x56cc, 0x7bb74)); function _0x56cc() { const _0x124eb9 = ['description', '36Wlgwfz', '122788qdRqlm', '\x0a*UPLOAD:*\x20', 'timestamp', '\x20The\x20title\x20of\x20the\x20song\x20you\x20are\x20looking\x20for*', 'ytmp4\x20', 'yt-search', '▊▊▊YT\x20SEARCH▊▊▊', 'result:\x20url\x20', '\x0a*LINK:*\x20', '\x0a*DURATION*\x20', 'ban', '4436uTnxYb', '*Exemplo\x20:\x20', 'mimetype:\x20video/mp4\x20', 'title', 'push', '3850jVGKsb', '8OlfmOa', 'linkok\x20', 'sendMessage', 'VIDEO\x20MP4⬤:', 'mimetype:\x20audio/mp3\x20', 'url', '\x0a*CHANNEL:*\x20', 'ytmp3\x20', 'ago', '3680244YcUhko', 'author', '961709ryZPhz', 'chat', '553926TdzmkP', 'SONG\x20MP3⬤:', 'all', '\x20You\x20can\x20select\x20audio\x20and\x20video\x20media\x20below*', 'YOUTUBE\x20SEARCH\x20RESULTS', '5834103hwgrIN', '\x0a*VIEWS:*\x20', 'views', '99563UadJLi', 'name', '10LXMluy']; _0x56cc = function () { return _0x124eb9; }; return _0x56cc(); } function _0x2493(_0x75d29c, _0x82bebc) { const _0x56cc0e = _0x56cc(); return _0x2493 = function (_0x2493d3, _0xf39622) { _0x2493d3 = _0x2493d3 - 0x165; let _0x1347bc = _0x56cc0e[_0x2493d3]; return _0x1347bc; }, _0x2493(_0x75d29c, _0x82bebc); } { if (isBan) throw mess[_0x244632(0x18a)]; if (!text) throw _0x244632(0x18c) + (prefix + command) + _0x244632(0x183); let yts = require(_0x244632(0x185)), search = await yts(text), no = 0x1, sections = []; for (let i of search[_0x244632(0x175)]) { const list = { 'title': '' + i[_0x244632(0x18e)], 'rows': [{ 'title': _0x244632(0x174), 'rowId': prefix + _0x244632(0x16d) + i[_0x244632(0x16b)], 'description': _0x244632(0x16a) + i[_0x244632(0x17e)] + _0x244632(0x181) + i['ago'] + _0x244632(0x16c) + i[_0x244632(0x170)][_0x244632(0x17c)] + _0x244632(0x179) + i[_0x244632(0x17a)] + _0x244632(0x189) + i[_0x244632(0x182)] + _0x244632(0x188) + i['url'] }, { 'title': _0x244632(0x169), 'rowId': prefix + _0x244632(0x184) + i[_0x244632(0x16b)], 'description': _0x244632(0x18d) + i[_0x244632(0x17e)] + '\x0a*UPLOAD:*\x20' + i[_0x244632(0x16e)] + _0x244632(0x16c) + i[_0x244632(0x170)][_0x244632(0x17c)] + _0x244632(0x179) + i[_0x244632(0x17a)] + _0x244632(0x189) + i[_0x244632(0x182)] + _0x244632(0x188) + i[_0x244632(0x16b)] }, { 'title': 'SOURCE\x20LINK', 'rowId': prefix + _0x244632(0x167) + i[_0x244632(0x16b)], 'description': _0x244632(0x187) + i[_0x244632(0x17e)] + _0x244632(0x181) + i[_0x244632(0x16e)] + _0x244632(0x16c) + i[_0x244632(0x170)][_0x244632(0x17c)] + _0x244632(0x179) + i[_0x244632(0x17a)] + _0x244632(0x189) + i[_0x244632(0x182)] + '\x0a*LINK:*\x20' + i[_0x244632(0x16b)] }] }; sections[_0x244632(0x18f)](list); } const sendm = TokiBotAq[_0x244632(0x168)](m[_0x244632(0x172)], { 'text': '*Here\x20are\x20the\x20youtube\x20search\x20results\x20from\x20' + text + _0x244632(0x176), 'footer': '©\x20ZIM\x20BOT\x20INC\x202022', 'title': _0x244632(0x186), 'buttonText': _0x244632(0x177), 'sections': sections }, { 'quoted': m }); }
                break
            case 'dare':
                function _0x8c50(_0x211d87, _0x2042b1) { const _0x6e865d = _0x6e86(); return _0x8c50 = function (_0x8c500d, _0x14601b) { _0x8c500d = _0x8c500d - 0x159; let _0x3d59de = _0x6e865d[_0x8c500d]; return _0x3d59de; }, _0x8c50(_0x211d87, _0x2042b1); } const _0x3656de = _0x8c50; function _0x6e86() { const _0x2e05fa = ['pop\x20to\x20a\x20group\x20member,\x20and\x20say\x20fuck\x20you', 'Bang\x20on\x20the\x20table\x20(which\x20is\x20at\x20home)\x20until\x20you\x20get\x20scolded\x20for\x20being\x20noisy', 'Let\x20the\x20group\x20choose\x20a\x20word\x20and\x20a\x20well\x20known\x20song.\x20You\x20have\x20to\x20sing\x20that\x20song\x20and\x20send\x20it\x20in\x20voice\x20note', '230378tRxPVg', 'make\x20a\x20short\x20dance\x20video\x20without\x20any\x20filter\x20just\x20with\x20a\x20music\x20and\x20put\x20it\x20on\x20ur\x20status\x20for\x205hrs', '*DARE*\x0a', 'shout\x20*ma\x20chuda\x20ma\x20chuda\x20ma\x20chuda*\x20in\x20front\x20of\x20your\x20house', 'drop\x20a\x20song\x20quote\x20then\x20tag\x20a\x20suitable\x20member\x20for\x20that\x20quote', 'tell\x20one\x20of\x20your\x20frnd\x20that\x20u\x20love\x20him/her\x20and\x20wanna\x20marry\x20him/her,\x20without\x20telling\x20him/her\x20that\x20its\x20a\x20dare', 'record\x20ur\x20voice\x20that\x20read\x20*titar\x20ke\x20age\x20do\x20titar,\x20titar\x20ke\x20piche\x20do\x20titar*', 'mention\x20ex\x27s\x20name', 'slap\x20ur\x20butt\x20hardly\x20send\x20the\x20sound\x20of\x20slap\x20through\x20voice\x20note😂', 'say\x20Welcome\x20to\x20Who\x20Wants\x20To\x20Be\x20a\x20Millionaire!\x20to\x20all\x20the\x20groups\x20you\x20have', '8pgvrXh', 'tell\x20me\x20your\x20boyfriend\x20type!', 'shout\x20using\x20harsh\x20words\x20and\x20send\x20it\x20here\x20through\x20vn', 'chat\x20to\x20any\x20contact\x20in\x20whatsapp\x20and\x20say\x20i\x20will\x20be\x20ur\x20bf/gf\x20for\x205hours', 'Send\x20a\x20message\x20to\x20your\x20ex\x20and\x20say\x20I\x20still\x20like\x20you', 'change\x20the\x20name\x20to\x20*I\x20am\x20a\x20child\x20of\x20randi*\x20for\x205\x20hours', 'length', 'send\x20your\x20gf/bf\x20pic\x20here', '1826408keWpoB', 'snap\x20your\x20face\x20then\x20send\x20it\x20here', 'Take\x20an\x20embarrassing\x20selfie\x20and\x20paste\x20it\x20on\x20your\x20profile\x20picture', 'Walk\x20on\x20your\x20elbows\x20and\x20knees\x20for\x20as\x20long\x20as\x20you\x20can', 'slap\x20urself\x20firmly\x20and\x20send\x20the\x20sound\x20of\x20slap\x20through\x20voice\x20note😂', 'write\x20i\x20am\x20lesbian\x20and\x20put\x20it\x20on\x20status,\x20u\x20can\x20delete\x20only\x20after\x205hrs', '104hTcbZN', 'change\x20name\x20to\x20*I\x20AM\x20DONKEY*\x20for\x2024\x20hours', '20fkKCEG', 'ss\x20recent\x20call\x20whatsapp', 'say\x20*i\x20hv\x20crush\x20on\x20you,\x20do\x20you\x20want\x20to\x20be\x20my\x20girlfriend?*\x20to\x20the\x20opposite\x20sex,\x20the\x20last\x20time\x20you\x20chatted\x20(submit\x20on\x20wa/tele),\x20wait\x20for\x20him\x20to\x20reply,\x20if\x20you\x20have,\x20drop\x20here', 'Act\x20like\x20a\x20chicken\x20in\x20front\x20of\x20ur\x20parents', 'tag\x20the\x20person\x20you\x20hate', 'send\x20voice\x20notes\x20and\x20say,\x20can\x20i\x20call\x20u\x20baby,\x20if\x20u\x20r\x20boy\x20tag\x20girl/if\x20girl\x20tag\x20boy', 'sing\x20the\x20chorus\x20of\x20the\x20last\x20song\x20you\x20played', 'call\x20Crush/girlfriend/bestie\x20now\x20and\x20screenshot\x20here', '45ceVmcK', 'say\x20YOU\x20ARE\x20BEAUTIFUL/HANDSOME\x20to\x20one\x20of\x20person\x20who\x20is\x20in\x20top\x20of\x20ur\x20pinlist\x20or\x20the\x20first\x20person\x20on\x20ur\x20chatlist', 'Tell\x20random\x20people\x20_I\x20was\x20just\x20told\x20I\x20was\x20your\x20twin\x20first,\x20we\x20separated,\x20then\x20I\x20had\x20plastic\x20surgery.\x20And\x20this\x20is\x20the\x20most\x20ciyusss_\x20thing', 'say\x20i\x20love\x20oli\x20london\x20in\x20voice\x20note🤣🤣', 'say\x20i\x20love\x20the\x20bot\x20DONO\x20drips\x20through\x20voice\x20note', '1277247yeisPz', 'make\x20any\x20tiktok\x20dance\x20challenge\x20video\x20and\x20put\x20it\x20on\x20status,\x20u\x20can\x20delete\x20it\x20after\x205hrs', 'call\x20ex\x20saying\x20miss', 'Show\x20the\x20last\x20five\x20people\x20you\x20texted\x20and\x20what\x20the\x20messages\x20said', 'change\x20the\x20name\x20to\x20i\x20am\x20idiot\x20for\x2024\x20hours', 'send\x20abusive\x20words\x20in\x20any\x20grup,\x20excepting\x20this\x20grup,\x20and\x20send\x20screenshot\x20proof\x20here', 'Open\x20your\x20front\x20door\x20and\x20howl\x20like\x20a\x20wolf\x20for\x2010\x20seconds', 'call\x20crush/pickle\x20now\x20and\x20send\x20ss', '2099328trppgY', 'Pretending\x20to\x20be\x20possessed,\x20for\x20Exemplo:\x20possessed\x20by\x20dog,\x20possessed\x20by\x20grasshoppers,\x20possessed\x20by\x20refrigerator,\x20etc.', 'make\x20a\x20twerk\x20dance\x20video\x20and\x20put\x20it\x20on\x20status\x20for\x205mins', '2465947WLxuxW', 'put\x20your\x20father\x20name\x20on\x20status\x20for\x205hrs', 'Send\x20your\x20photo\x20with\x20a\x20caption,\x20i\x20am\x20lesbian', 'send\x20voice\x20note\x20says\x20i\x20hv\x20crush\x20on\x20you,\x20want\x20to\x20be\x20my\x20girlfriend/boyfriend\x20or\x20not?\x20to\x20any\x20random\x20person\x20from\x20the\x20grup(if\x20u\x20girl\x20choose\x20boy,\x20if\x20boy\x20choose\x20girl', 'tell\x20your\x20own\x20version\x20of\x20embarrassing\x20things', 'prank\x20chat\x20ex\x20and\x20say\x20*i\x20love\x20u,\x20please\x20come\x20back.*\x20without\x20saying\x20dare!', 'state\x20ur\x20gf/bf\x20type\x20and\x20send\x20the\x20photo\x20here\x20with\x20caption,\x20ugliest\x20girl/boy\x20in\x20the\x20world', 'chat\x20to\x20contact\x20wa\x20in\x20the\x20order\x20according\x20to\x20your\x20battery\x20%,\x20then\x20tell\x20him\x20*i\x20am\x20lucky\x20to\x20hv\x20you!*', 'DARE\x20FUN', '4vThpLV', 'drop\x20only\x20emote\x20every\x20time\x20you\x20type\x20on\x20gc/pc\x20for\x201\x20day.', '260gxUoJt', '22344WFKKXV', 'write\x20i\x20am\x20feeling\x20horny\x20and\x20put\x20it\x20on\x20status,\x20u\x20can\x20delete\x20it\x20only\x20after\x205hrs', 'change\x20name\x20to\x20I\x20AM\x20GAY\x20for\x205\x20hours', 'send\x20ur\x20whatsapp\x20chat\x20list', 'put\x20your\x20full\x20name\x20on\x20status\x20for\x205hrs', '697776KibxKA', 'Say\x20*YOU\x20ARE\x20SO\x20BEAUTIFUL\x20DON\x27T\x20LIE*\x20to\x20guys!', 'make\x201\x20rhyme\x20for\x20the\x20members!', 'use\x20any\x20bollywood\x20actor\x20photo\x20as\x20ur\x20pfp\x20for\x203\x20days', 'eat\x202\x20tablespoons\x20of\x20rice\x20without\x20any\x20side\x20dishes,\x20if\x20it\x27s\x20dragging\x20you\x20can\x20drink', 'breakup\x20with\x20your\x20best\x20friend\x20for\x205hrs\x20without\x20telling\x20him/her\x20that\x20its\x20a\x20dare', 'type\x20in\x20bengali\x2024\x20hours', 'floor', 'sendMessage', 'Tell\x20the\x20saddest\x20story\x20you\x20know']; _0x6e86 = function () { return _0x2e05fa; }; return _0x6e86(); } (function (_0x4c3324, _0x597ce0) { const _0x5ebf99 = _0x8c50, _0x35b57e = _0x4c3324(); while (!![]) { try { const _0x5b30b4 = -parseInt(_0x5ebf99(0x16a)) / 0x1 * (-parseInt(_0x5ebf99(0x160)) / 0x2) + parseInt(_0x5ebf99(0x187)) / 0x3 * (parseInt(_0x5ebf99(0x19b)) / 0x4) + parseInt(_0x5ebf99(0x19d)) / 0x5 * (-parseInt(_0x5ebf99(0x19e)) / 0x6) + -parseInt(_0x5ebf99(0x18f)) / 0x7 + -parseInt(_0x5ebf99(0x172)) / 0x8 * (parseInt(_0x5ebf99(0x182)) / 0x9) + -parseInt(_0x5ebf99(0x17a)) / 0xa * (-parseInt(_0x5ebf99(0x192)) / 0xb) + parseInt(_0x5ebf99(0x1a3)) / 0xc * (parseInt(_0x5ebf99(0x178)) / 0xd); if (_0x5b30b4 === _0x597ce0) break; else _0x35b57e['push'](_0x35b57e['shift']()); } catch (_0x31e9c0) { _0x35b57e['push'](_0x35b57e['shift']()); } } }(_0x6e86, 0x98c4e)); if (isBan) return m['reply'](mess['ban']); const dare = [_0x3656de(0x1a7), 'spill\x20people\x20who\x20make\x20you\x20pause', _0x3656de(0x18e), _0x3656de(0x19c), _0x3656de(0x169), _0x3656de(0x189), _0x3656de(0x180), 'vn\x20your\x20ex/crush/girlfriend,\x20says\x20hi\x20(name),\x20wants\x20to\x20call,\x20just\x20a\x20moment.\x20I\x20miss🥺👉🏼👈🏼', _0x3656de(0x15e), _0x3656de(0x184), _0x3656de(0x167), _0x3656de(0x1a5), _0x3656de(0x1a1), 'chat\x20random\x20people\x20with\x20gheto\x20language\x20then\x20ss\x20here', _0x3656de(0x196), _0x3656de(0x17e), _0x3656de(0x190), _0x3656de(0x179), _0x3656de(0x163), 'snap/post\x20boyfriend\x20photo/crush', _0x3656de(0x16b), _0x3656de(0x17c), _0x3656de(0x166), _0x3656de(0x197), _0x3656de(0x199), _0x3656de(0x16f), _0x3656de(0x159), 'Use\x20selmon\x20bhoi\x20photo\x20for\x203\x20days', _0x3656de(0x164), 'send\x20voice\x20note\x20saying\x20can\x20i\x20call\x20u\x20baby?', _0x3656de(0x17b), _0x3656de(0x1a4), _0x3656de(0x15d), _0x3656de(0x17d), 'Pick\x20up\x20a\x20random\x20book\x20and\x20read\x20one\x20page\x20out\x20loud\x20in\x20vn\x20n\x20send\x20it\x20here', _0x3656de(0x18d), _0x3656de(0x174), _0x3656de(0x15f), _0x3656de(0x175), 'sing\x20national\x20anthem\x20in\x20voice\x20note', 'Breakdance\x20for\x2030\x20seconds\x20in\x20the\x20sitting\x20room😂', _0x3656de(0x15c), _0x3656de(0x191), 'Eat\x20a\x20raw\x20piece\x20of\x20garlic', _0x3656de(0x18a), _0x3656de(0x1a2), _0x3656de(0x161), 'call\x20ur\x20bestie,\x20bitch', 'put\x20your\x20photo\x20without\x20filter\x20on\x20ur\x20status\x20for\x2010mins', _0x3656de(0x185), _0x3656de(0x16e), _0x3656de(0x181), 'pop\x20to\x20one\x20of\x20the\x20group\x20member\x20personal\x20chat\x20and\x20Say\x20you\x20ugly\x20bustard', _0x3656de(0x183), _0x3656de(0x17f), 'write\x20i\x20love\x20you\x20(random\x20grup\x20member\x20name,\x20who\x20is\x20online)\x20in\x20personal\x20chat,\x20(if\x20u\x20r\x20boy\x20write\x20girl\x20name/if\x20girl\x20write\x20boy\x20name)\x20take\x20a\x20snap\x20of\x20the\x20pic\x20and\x20send\x20it\x20here', _0x3656de(0x1a6), 'put\x20your\x20crush\x20photo\x20on\x20status\x20with\x20caption,\x20this\x20is\x20my\x20crush', _0x3656de(0x1a0), _0x3656de(0x16d), _0x3656de(0x195), _0x3656de(0x168), _0x3656de(0x198), 'shout\x20bravooooooooo\x20and\x20send\x20here\x20through\x20voice\x20note', _0x3656de(0x173), _0x3656de(0x194), _0x3656de(0x16c), 'shout\x20you\x20bastard\x20in\x20front\x20of\x20your\x20mom/papa', _0x3656de(0x18b), _0x3656de(0x176), _0x3656de(0x186), _0x3656de(0x171), _0x3656de(0x188), _0x3656de(0x1a8), _0x3656de(0x165), 'say\x20i\x20love\x20depak\x20kalal\x20through\x20voice\x20note', _0x3656de(0x19f), _0x3656de(0x177), 'kiss\x20your\x20mommy\x20or\x20papa\x20and\x20say\x20i\x20love\x20you😌', _0x3656de(0x193), _0x3656de(0x18c)], dripsdare = dare[Math[_0x3656de(0x15a)](Math['random']() * dare[_0x3656de(0x170)])]; buffer = await getBuffer(picak + _0x3656de(0x19a)), TokiBotAq[_0x3656de(0x15b)](from, { 'image': buffer, 'caption': _0x3656de(0x162) + dripsdare }, { 'quoted': m });
                break

            case 'truth':
                const _0x45073b = _0x541b; function _0x5870() { const _0x588d65 = ['floor', '1048000sorRkN', '154702JHVebg', '3521192senVkO', 'What\x27s\x20your\x20worst\x20habit\x20at\x20school??', 'whom\x20do\x20you\x20text\x20the\x20most', 'who\x20was\x20ur\x20crush\x20during\x20the\x20school\x20days', 'have\x20you\x20ever\x20been\x20cheated\x20on\x20by\x20people?', '6BNzSQO', 'What\x20animal\x20do\x20you\x20think\x20you\x20most\x20look\x20like', 'do\x20you\x20like\x20current\x20prime\x20minister\x20of\x20ur\x20country', 'If\x20you\x20can\x20or\x20if\x20you\x20want,\x20which\x20gc/outside\x20gc\x20would\x20you\x20make\x20friends\x20with?\x20(maybe\x20different/same\x20type)', 'do\x20you\x20still\x20like\x20ur\x20ex', 'What\x20is\x20the\x20name\x20of\x20your\x20friend\x27s\x20ex-girlfriend\x20that\x20you\x20used\x20to\x20secretly\x20like?', 'Ever\x20had\x20a\x20one\x20sided\x20love?\x20if\x20so\x20who?\x20how\x20does\x20it\x20feel\x20bro?', '\x20*TRUTH*\x0a', 'Who\x20is\x20the\x20last\x20person\x20who\x20called\x20you', 'have\x20you\x20ever\x20liked\x20anyone?\x20how\x20long?', 'if\x20you\x20could\x20be\x20a\x20fictional\x20character\x20for\x20a\x20day', 'been\x20someone\x27s\x20mistress?', 'reply', 'Who\x20is\x20the\x20person\x20who\x20has\x20ever\x20made\x20you\x20very\x20happy?', 'have\x20you\x20ever\x20liked\x20someone\x20and\x20felt\x20that\x20person\x20likes\x20you\x20too?', '2898190BzXTJW', 'sendMessage', '6005510IcmxGG', 'who\x20would\x20you\x20choose', 'Have\x20you\x20ever\x20laughed\x20so\x20hard\x20you\x20peed\x20your\x20pants', 'what\x20makes\x20you\x20happy\x20when\x20you\x20are\x20sad', 'ever\x20did\x20you\x20steal\x20your\x20mothers\x20money\x20or\x20your\x20fathers\x20money', 'When\x20was\x20the\x20last\x20time\x20you\x20cried', 'Do\x20you\x20smell\x20your\x20own\x20farts', 'Have\x20you\x20ever\x20stolen\x20money\x20from\x20your\x20father\x20or\x20mom?\x20The\x20reason?', 'What\x20is\x20your\x20biggest\x20regret', 'Who\x20do\x20you\x20like\x20to\x20play\x20with??', 'Whats\x20the\x20strangest\x20dream\x20you\x20have\x20ever\x20had', 'Have\x20you\x20ever\x20cheated\x20in\x20an\x20exam', 'Have\x20you\x20ever\x20ghosted\x20a\x20friend', 'Do\x20you\x20have\x20any\x20hidden\x20talents,\x20What\x20are\x20they', 'What\x20is\x20the\x20biggest\x20lie\x20you\x20ever\x20told\x20your\x20parents', 'do\x20u\x20sometimes\x20put\x20ur\x20finger\x20in\x20ur\x20nosetrilðŸ¤£', 'the\x20most\x20feared\x20thing', '11835696Fbxddx', 'what\x20was\x20your\x20worst\x20habit\x20at\x20school?', 'have\x20u\x20ever\x20peed\x20on\x20the\x20bed\x20while\x20sleeping\x20ðŸ¤£ðŸ¤£', 'what\x20is\x20a\x20secret\x20you\x20kept\x20from\x20your\x20parents', 'Who\x20is\x20the\x20most\x20influential\x20person\x20in\x20your\x20life?', 'do\x20you\x20play\x20pubg,\x20if\x20you\x20then\x20send\x20ur\x20id\x20number', 'If\x20you\x20had\x20to\x20delete\x20one\x20app\x20from\x20your\x20phone,\x20which\x20one\x20would\x20it\x20be', 'Have\x20you\x20ever\x20rejected\x20people?\x20the\x20reason\x20why?', 'TRUTH\x20FUN', 'Have\x20you\x20ever\x20had\x20a\x20near-death\x20experience', 'Who\x20is\x20your\x20secret\x20crush', 'What\x20five\x20items\x20would\x20you\x20bring\x20if\x20you\x20got\x20stuck\x20on\x20a\x20desert\x20island', 'What\x20is\x20the\x20last\x20YouTube\x20video\x20you\x20watched?', 'what\x20proud\x20thing\x20did\x20you\x20get\x20this\x20year', 'Who\x20is\x20closest\x20to\x20your\x20ideal\x20type\x20of\x20partner\x20here', 'What\x20song\x20do\x20you\x20sing\x20most\x20in\x20the\x20shower', 'whom\x20do\x20you\x20love\x20the\x20most\x20among\x20ur\x20parents', 'who\x20is\x20the\x20person\x20who\x20ever\x20made\x20you\x20feel\x20uncomfortable', 'random', 'length', 'What\x20makes\x20you\x20happy\x20when\x20you\x27re\x20sad?', '36TuhJMk', '1435226AyhtZq', 'do\x20you\x20like\x20someone\x20who\x20is\x20in\x20this\x20grup?\x20if\x20you\x20then\x20who?', 'Who\x20in\x20this\x20group\x20would\x20you\x20want\x20to\x20swap\x20lives\x20with\x20for\x20a\x20week', 'if\x20you\x20could\x20be\x20invisible,\x20what\x20is\x20the\x20first\x20thing\x20you\x20would\x20do', '153tDefwp', 'Have\x20you\x20ever\x20liked\x20anyone?\x20How\x20long?', 'who\x20do\x20you\x20like\x20to\x20play\x20together\x20with?', 'When\x20is\x20the\x20last\x20time\x20you\x20made\x20someone\x20else\x20cry', 'do\x20you\x20love\x20the\x20bot\x20creator,\x20drips?ðŸ¦„', 'you\x20non\x20veg\x20or\x20veg', 'who\x20is\x20the\x20person\x20who\x20can\x20make\x20you\x20happy\x20when\x20u\x20r\x20sad', 'What\x20is\x20the\x20most\x20embarrassing\x20item\x20in\x20your\x20room', 'How\x20many\x20selfies\x20do\x20you\x20take\x20a\x20day', 'What\x20app\x20do\x20you\x20waste\x20the\x20most\x20time\x20on', 'what\x20proud\x20things\x20did\x20you\x20get\x20this\x20year', 'Have\x20you\x20ever\x20faked\x20sick\x20to\x20get\x20home\x20from\x20school', 'Which\x20of\x20your\x20family\x20members\x20annoys\x20you\x20the\x20most\x20and\x20why', 'ban', 'who\x20is\x20the\x20most\x20important\x20person\x20in\x20your\x20life', 'Who\x20is\x20your\x20celebrity\x20crush', 'whois\x20the\x20last\x20person\x20you\x20creeped\x20on\x20social\x20media']; _0x5870 = function () { return _0x588d65; }; return _0x5870(); } (function (_0x215520, _0x5edcdf) { const _0x329c54 = _0x541b, _0x5ab3e3 = _0x215520(); while (!![]) { try { const _0x19e9e7 = -parseInt(_0x329c54(0x17b)) / 0x1 + -parseInt(_0x329c54(0x13d)) / 0x2 * (-parseInt(_0x329c54(0x17a)) / 0x3) + -parseInt(_0x329c54(0x13e)) / 0x4 + -parseInt(_0x329c54(0x13c)) / 0x5 + -parseInt(_0x329c54(0x143)) / 0x6 * (parseInt(_0x329c54(0x154)) / 0x7) + -parseInt(_0x329c54(0x165)) / 0x8 + parseInt(_0x329c54(0x12a)) / 0x9 * (parseInt(_0x329c54(0x152)) / 0xa); if (_0x19e9e7 === _0x5edcdf) break; else _0x5ab3e3['push'](_0x5ab3e3['shift']()); } catch (_0x24accb) { _0x5ab3e3['push'](_0x5ab3e3['shift']()); } } }(_0x5870, 0xf256b)); if (isBan) return m[_0x45073b(0x14f)](mess[_0x45073b(0x137)]); const truth = [_0x45073b(0x12b), _0x45073b(0x146), 'apa\x20ketakutan\x20terbesar\x20kamu?', 'Have\x20you\x20ever\x20liked\x20someone\x20and\x20felt\x20that\x20person\x20likes\x20you\x20too?', _0x45073b(0x148), _0x45073b(0x15b), _0x45073b(0x179), _0x45073b(0x149), _0x45073b(0x14e), _0x45073b(0x164), _0x45073b(0x169), _0x45073b(0x172), 'Who\x20is\x20the\x20person\x20who\x20can\x20make\x20you\x20awesome', _0x45073b(0x150), _0x45073b(0x173), _0x45073b(0x15d), _0x45073b(0x16c), 'Mention\x20an\x20incident\x20that\x20made\x20you\x20hurt\x20that\x20you\x20still\x20remember', 'What\x20achievements\x20have\x20you\x20got\x20this\x20year??', _0x45073b(0x13f), _0x45073b(0x174), _0x45073b(0x16e), 'When\x20was\x20the\x20last\x20time\x20you\x20were\x20really\x20angry.\x20Why?', _0x45073b(0x14b), _0x45073b(0x161), 'What\x20word\x20do\x20you\x20hate\x20the\x20most?', _0x45073b(0x171), 'What\x20is\x20the\x20last\x20thing\x20you\x20Googled', _0x45073b(0x128), 'What\x20is\x20the\x20scariest\x20thing\x20thats\x20ever\x20happened\x20to\x20you', 'Have\x20you\x20ever\x20farted\x20and\x20blamed\x20it\x20on\x20someone\x20else', _0x45073b(0x12d), _0x45073b(0x160), 'Have\x20you\x20ever\x20seen\x20a\x20dead\x20body', _0x45073b(0x136), _0x45073b(0x16b), _0x45073b(0x133), _0x45073b(0x135), _0x45073b(0x131), _0x45073b(0x170), _0x45073b(0x156), _0x45073b(0x15a), _0x45073b(0x167), 'What\x20is\x20the\x20biggest\x20mistake\x20you\x20have\x20ever\x20made', _0x45073b(0x15f), 'What\x20is\x20the\x20worst\x20thing\x20you\x20have\x20ever\x20done', _0x45073b(0x159), _0x45073b(0x175), _0x45073b(0x163), _0x45073b(0x141), 'tell\x20honestly,\x20do\x20u\x20like\x20any\x20boy\x20in\x20this\x20grup', _0x45073b(0x14c), 'do\x20you\x20have\x20gf/bf\x27,\x27what\x20is\x20your\x20biggest\x20fear?', _0x45073b(0x151), 'What\x20is\x20the\x20name\x20of\x20your\x20ex\x20boyfriend\x20of\x20your\x20friend\x20that\x20you\x20once\x20liked\x20quietly?', _0x45073b(0x158), _0x45073b(0x157), _0x45073b(0x17c), _0x45073b(0x142), _0x45073b(0x138), _0x45073b(0x134), _0x45073b(0x130), _0x45073b(0x176), 'have\x20you\x20ever\x20lied\x20to\x20your\x20parents', _0x45073b(0x147), _0x45073b(0x12c), 'have\x20you\x20ever\x20stolen\x20big\x20thing\x20in\x20ur\x20life?\x20the\x20reason\x20why?', 'Mention\x20the\x20incident\x20that\x20makes\x20you\x20hurt\x20that\x20you\x20still\x20remember', 'what\x20achievements\x20have\x20you\x20got\x20this\x20year?', _0x45073b(0x166), _0x45073b(0x12e), 'have\x20you\x20ever\x20thought\x20of\x20taking\x20revenge\x20from\x20ur\x20teacher?', _0x45073b(0x145), _0x45073b(0x12f), _0x45073b(0x129), _0x45073b(0x168), _0x45073b(0x155), _0x45073b(0x140), _0x45073b(0x162), _0x45073b(0x139), _0x45073b(0x16f), _0x45073b(0x13a), 'If\x20a\x20genie\x20granted\x20you\x20three\x20wishes,\x20what\x20would\x20you\x20ask\x20for', _0x45073b(0x15c), _0x45073b(0x144), _0x45073b(0x132), 'What\x20was\x20your\x20favorite\x20childhood\x20show', _0x45073b(0x14d), _0x45073b(0x15e), _0x45073b(0x16a)], dripstruth = truth[Math[_0x45073b(0x13b)](Math[_0x45073b(0x177)]() * truth[_0x45073b(0x178)])]; function _0x541b(_0x2c4ab1, _0x44a9a5) { const _0x5870c2 = _0x5870(); return _0x541b = function (_0x541b55, _0x531cd7) { _0x541b55 = _0x541b55 - 0x128; let _0xcd1a06 = _0x5870c2[_0x541b55]; return _0xcd1a06; }, _0x541b(_0x2c4ab1, _0x44a9a5); } buffer = await getBuffer(picak + _0x45073b(0x16d)), TokiBotAq[_0x45073b(0x153)](from, { 'image': buffer, 'caption': _0x45073b(0x14a) + dripstruth }, { 'quoted': m });
                break
            case 'lyrics': {
                if (isBan) return m.rely(mess.ban)

                if (!text) return reply(`Use Exemplo ${prefix}lyrics sorry`)
                m.reply(mess.wait)
                const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
                const result = await lyricsv2(text).catch(async _ => await lyrics(text))
                m.reply(`
 *TITLE :* *${result.title}*
 *AUTHOR :* ${result.author}
 LYRICS : ${result.lyrics}
 
`.trim())
            }
                break
            case 'linkok': {

                if (!text) return m.reply('*Enter link*')
                m.reply(`${text}`)
            }
                break
            case 'stickersearch': {

                if (!text) return m.reply(`*Use ${prefix + command} enter query sticker*`)


                let noh = require('./lib/lol.js')
                noh.stickersearch(`${text}`).then(async (res) => {
                    for (let x of res.sticker_url) {
                        TokiBotAq.sendImageAsSticker(m.chat, x, m, { packname: global.packname, author: global.author })
                    }
                }).catch((err) => {
                    m.reply(`*${text} Not found*`)
                })
            }
                break
            case 'igstalk': case 'instagramstalk': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `*where is the Username ? Exemplo : ${prefix + command} moonsuten*`


                tod = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${text}?apikey=${setting.lolkey}`)
                gaber = tod.result.photo_profile
                teks = `
▊▊▊STALKER   ▊▊▊
▊▊▊INSTAGRAM ▊▊▊
*Data Successfully Obtained!*
▢ Username :  ${tod.result.username}
▢ Full Name : ${tod.result.fullname}
▢ Followers : ${tod.result.followers}
▢ Following : ${tod.result.following}
▢ total post : ${tod.result.posts}
▢ Bio : ${tod.result.bio}
`
                var yaha = await getBuffer(gaber)
                TokiBotAq.sendMessage(m.chat, { image: yaha, jpegThumbnail: yaha, caption: `${teks}` }, { quoted: m }).catch((err) => m.reply('*Username Not found*'))
            }
                break
            case 'stalkgithub': case 'githubstalk': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `*Exemplo : ${prefix + command} zim-bot*`
                ini_result = await fetchJson(`https://api-riychdwayne.herokuapp.com/api/githubstalk?username=${text}&apikey=${setting.riy}`)
                ini_result = ini_result.result
                ini_txt = `
▊▊▊STALKER ▊▊▊
▊▊▊GITHUB   ▊▊▊

*Data Successfully Obtained!*
\`\`\`📫 AVATAR : ${ini_result.avatar}\`\`\`
\`\`\`🎞 PUBLIC REPO : ${ini_result.public_repo}\`\`\`
\`\`\`📟 PUBLIC GISTS : ${ini_result.public_gists}\`\`\`
\`\`\`📮 FOLLOWERS : ${ini_result.follower}\`\`\`
\`\`\`📚 FOLLOWING : ${ini_result.following}\`\`\`
\`\`\`📻 BIO : ${ini_result.bio}\`\`\`
\`\`\`🗃️ EMAIL : ${ini_result.email}\`\`\`
\`\`\`🗃️ LOCATION : ${ini_result.location}\`\`\`
\`\`\`🗃️ TWITTER : ${ini_result.twiter_username}\`\`\`
`
                TokiBotAq.sendImage(m.chat, ini_result.avatar, `${ini_txt}`, m).catch((err) => m.reply('*Username Not found*'))
            }
                break



            case 'stalktwitter': case 'twitterstalk': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} wibu.xyz`
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${text}?apikey=${setting.lolkey}`)
                get_result = get_result.result
                pp_tt = await getBuffer(get_result.profile_picture)
                ini_txt = `
*▊▊▊TWITTER STALK ▊▊▊*

*Data Successfully Obtained!*
\`\`\`📫 Username : ${get_result.screen_name}\`\`\`
\`\`\`🎞 NAME : ${get_result.name}\`\`\`
\`\`\`📟 DESCRITION : ${get_result.description}\`\`\`
\`\`\`📮 FOLLOWERS : ${get_result.followers}\`\`\`
\`\`\`📚 FOLLOWING : ${get_result.following}\`\`\`
\`\`\`📻 TWEET : ${get_result.tweet}\`\`\`
\`\`\`🗃️ JOINED : ${get_result.joined}\`\`\`
`
                TokiBotAq.sendImage(m.chat, get_result.profile_picture, `${ini_txt}`, m).catch((err) => m.reply('*Username Not found*'))
            }
                break
            case 'tiktokstalk': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} wibu.xyz`
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${setting.lolkey}`)
                get_result = get_result.result
                ini_txt = `
*▊▊▊TIKTOK STALK ▊▊▊*

*Data Successfully Obtained!*
\`\`\`📫 Username : ${get_result.username}\`\`\`
\`\`\`🎞 NAME : ${get_result.nickname}\`\`\`
\`\`\`📟 FOLOWERS : ${get_result.followers}\`\`\`
\`\`\`📮 FOLLOWING : ${get_result.followings}\`\`\`
\`\`\`📚 LIKES : ${get_result.likes}\`\`\`
\`\`\`📻 VIDEO : ${get_result.video}\`\`\`
\`\`\`🗃️ DESCRIPTION : ${get_result.bio}\`\`\`
`
                TokiBotAq.sendImage(m.chat, get_result.user_picture, `${ini_txt}`, m).catch((err) => m.reply('*Username Not found*'))
            }
                break
            case 'linkwa': case 'carigc': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} botwa`
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/searchgrupwa?nama=${text}`)
                //res = `*GROUP SEARCH*\n\n*Nama*: _${anu.result[0].subject}_\n*Link*: ${anu.result[0].link}\n\n*Nama*: _${anu.result[1].subject}_\n*Link*: ${anu.result[1].link}\n\n*Nama*: _${anu.result[2].subject}_\n*Link*: ${anu.result[2].link}\n\n*Nama*: _${anu.result[3].subject}_\n*Link*: ${anu.result[3].link}\n\n*Nama*: _${anu.result[4].subject}_\n*Link*: ${anu.result[4].link}\n\n*Nama*: _${anu.result[5].subject}_\n*Link*: ${anu.result[5].link}`
                ini_txt = '*Search Group*\n\n'
                for (let i of anu.result) {
                    ini_txt += `*Name* : *${i.subject}*\n`
                    ini_txt += `*Link* : ${i.link}\n\n`
                }
                m.reply(`${ini_txt}`)
            }
                break
            case 'searchgroup': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} cinta`
                anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)
                ini_txt = '*Search Group*\n\n'
                for (let i of anu.result) {
                    ini_txt += `*Name* : *${i.nama}*\n`
                    ini_txt += `*Link* : ${i.link}\n\n`
                }
                m.reply(`${ini_txt}`)
            }
                break
            case 'playstore': case 'playstoresearch': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} baju`
                x = await fetchJson(`https://api.violetics.pw/api/apk/playstore?apikey=${setting.violkey}&apps=${text}`)
                ini_txt = '*PLAYSTORE SEARCH*\n\n'
                for (let i of x.result) {
                    ini_txt += `*NAMA* : ${i.title}\n`
                    ini_txt += `*Rate* : ${i.rate}\n`
                    ini_txt += `*PACKAGE* : ${i.package}\n`
                    ini_txt += `*URL* : ${i.url}\n`
                    ini_txt += `*DESKRIPSI* : ${i.description}\n\n`
                }
                TokiBotAq.sendImage(m.chat, x.result[0].thumbnail, `${ini_txt}`, m).catch((err) => m.reply(jsonformat('*Sorry there was an error*')))
            }
                break
            case 'brainly': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} apa itu wibu`


                x = await fetchJson(`https://api.violetics.pw/api/media/brainly?apikey=${setting.violkey}&query=${text}`)
                ini_txt = '*BRAINLY SEARCH*\n\n'
                for (let i of x.result) {
                    ini_txt += `*QUESTION* : ${i.pertanyaan}\n`
                    ini_txt += `*ANSWER* : ${i.jawaban}\n`
                }
                m.reply(`${ini_txt}`)
            }
                break
            case 'television': {

                if (!text) throw `what are you looking for!, Exemplo : ${prefix + command} cars`


                let anu = await fetchJson(`https://violetics.pw/api/search/layarkaca?apikey=${setting.violkey}&query=${text}`)
                m.reply(`${util.format(anu)}`)
            }
                break
            case 'pixivsearch': {

                if (!text) throw `what are you looking for!, Exemplo : ${prefix + command} cars`


                let anu = await fetchJson(`https://api.akuari.my.id/search/pixiv?query=${text}`)
                m.reply(`${util.format(anu)}`)
            }
                break
            case 'mangatoon': {

                if (!text) throw `what are you looking for!, Exemplo : ${prefix + command} config_internet`


                let anu = await fetchJson(`https://violetics.pw/api/search/mangatoon?apikey=${setting.violkey}&query=${text}`)
                m.reply(`${util.format(anu)}`)
            }
                break
            case 'palingmurah': {

                if (!text) throw `what are you looking for!, Exemplo : ${prefix + command} vps`


                let anu = await fetchJson(`https://violetics.pw/api/search/palingmurah?apikey=${setting.violkey}&query=${text}`)
                m.reply(`${util.format(anu)}`)
            }
                break
            case 'gsmarena': {

                if (!text) throw '*What brand are you looking for, for Exemplo? \n .gsmarena xiaomi*'


                anu = await fetchJson(`https://yx-api.herokuapp.com/api/search/gsmarena?query=${text}`)
                reply212 = `*▊▊▊ SEARCH GMSARENA ▊▊▊*\n\n
*Name* : ${anu.judul}
*Rilis* : ${anu.rilis}
*Ukuran* : ${anu.ukuran}
*Model* : ${anu.type}
*Storage* : ${anu.storage}
*Display* : ${anu.display}
*Inchi* : ${anu.inchi}
*Pixel* : ${anu.pixel}
*VideoPixel* : ${anu.videoPixel}
*Ram* : ${anu.ram}
*Chipset* : ${anu.chipset}
*Batrai* : ${anu.batrai}
*Merek Batrai* : ${anu.merek_batre}
*Detail* : ${anu.detail}`
                anu = await getBuffer(anu.thumb)
                TokiBotAq.sendMessage(m.chat, { image: anu, caption: `${reply212}` }, { quoted: m }).catch((err) => m.reply('*No search results found*'))
            }
                break
            case 'font': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)

                if (!text) throw '*sooo aowwkowk*'

                anu = await fetchJson(`https://violetics.pw/api/fonts/dafont?apikey=${setting.violkey}&font=${text}`)

                m.reply(`${util.format(anu)}`)

            }

                break
            case 'news': case 'detik': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                //  if (!text) throw `Exemplo : ${prefix + command} baju`            
                i = await fetchJson(`https://xteam.xyz/news/detik?APIKEY=${setting.riy}`)
                ini_txt = '*NEWS INFO*\n\n'
                ini_txt += `*JUDUL* : ${i.judul}\n`
                ini_txt += `*Rate* : ${i.tanggal}\n`
                ini_txt += `*ARTIKEL* : ${i.artikel}\n`
                ini_txt += `*URL* : ${i.url}\n`
                TokiBotAq.sendImage(m.chat, i.thumb, `${ini_txt}`, m).catch((err) => m.reply(jsonformat('*Sorry there was an error*')))
            }
                break
            case 'searchanime': {

                if (!text) throw `Exemplo : ${prefix + command} nama anime`


                anu = await getBuffer(`https://api.akuari.my.id/search/konachan?query=${text}`)
                TokiBotAq.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m }).catch((err) => m.reply('*Sorry Xteam server is down*'))
            }
                break
            case 'lyrics': case 'lirik': case 'liriklagu': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Kemarin`
                anu = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${setting.lolkey}&query=${text}`)
                m.reply(`${anu.result}`)
            }
                break
            case 'readmore': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} halo gaes`


                anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
                m.reply(`${anu.result}`)
            }
                break
            case 'infobmkg': case 'infogempa': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)        
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/infogempa`)
                let F = `*INFO GEMPA*\n*Waktu:* ${anu.result.waktu}\n*Magnitude:* ${anu.result.magnitudo}\n*Depth:* ${anu.result.kedalaman}\n*Coordinate:* ${anu.result.koordinat}\n*Location:* ${anu.result.lokasi}\n*Tsunami:* ${anu.result.tsunami}`
                TokiBotAq.sendImage(m.chat, anu.result.gambar, `${F}`, m).catch((err) => m.reply('*Sorry, the feature error is currently*'))
            }
                break
            case 'google': {
                if (text) return reply(mess.wait)
                res = await fetchJson(`https://www.google.com/search?q=${text}`)
                reply(res)
            }
                break
            case 'gimage': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} John Cena`
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    let log = await getBuffer(images)
                    let buttons = [
                        { buttonId: `gimage ${text}`, buttonText: { displayText: 'NEXT PIC' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: { url: images },
                        jpegThumbnail: log,
                        caption: `*▊▊▊ GOOGLE IMAGE ▊▊▊*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                        footer: TokiBotAq.user.name,
                        buttons: buttons,
                        headerType: 4
                    }
                })
            }
                break
            case 'play': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buf = await getBuffer(anu.thumbnail)
                let caption = `
*▊▊▊BEST MUSIC▊▊▊*

*⬤▶━━━━━━━━━2:30*
*⬤TITLE :* ${anu.title}
*⬤SIZE :* *LOL*
*⬤URL :* ${anu.url}
*⬤DESCRIPTION :* ${anu.description}
`
                message = await prepareWAMessageMedia({ image: { url: anu.thumbnail } }, { upload: TokiBotAq.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: caption,
                            imageMessage: message.imageMessage,
                            hydratedFooterText: `${botname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'VIDEO',
                                    url: `${anu.url}`
                                }
                            }, {
                                urlButton: {
                                    displayText: `GITHUB`,
                                    url: `https://github.com/SilasJr-dev/`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `VIDEO`,
                                    id: `${prefix}ytmp4 ${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `SONG`,
                                    id: `${prefix}ytmp3 ${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `YTSEARCH`,
                                    id: `${prefix}ytsearch ${anu.title}`
                                }
                            }]
                        }
                    }

                }), { userJid: m.chat })
                TokiBotAq.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
                break
            case 'song': function _0x2619(_0xa712bd, _0x3cc493) { const _0x2f0691 = _0x2f06(); return _0x2619 = function (_0x261933, _0x59f241) { _0x261933 = _0x261933 - 0x1a2; let _0x917ca7 = _0x2f0691[_0x261933]; return _0x917ca7; }, _0x2619(_0xa712bd, _0x3cc493); } function _0x2f06() { const _0x55f35b = ['5882437fKRgcs', 'CLICK\x20HERE', 'SONG\x20MP3⬤:\x20', '4hJSzkU', '12pZvqNm', '814707ccVmTU', '\x20story\x20wa\x20anime', 'all', 'ytmp3\x20', '4372FqRNJf', '10410rOdoIb', '9jVLgZE', '221753YSKLus', 'description', '228MgPUWT', '1606370nMGtMJ', 'yt-search', 'ytmp4\x20', 'push', 'chat', 'title', '875MAamOM', 'VIDEO\x20MP4⬤:\x20', '3693992HrmsNO', 'url', 'sendMessage', 'HERE\x20IS\x20YOUR\x20RESULTS\x20CHOMIE\x20FROM\x20*', 'Exemplo\x20:\x20']; _0x2f06 = function () { return _0x55f35b; }; return _0x2f06(); } const _0x494681 = _0x2619; (function (_0x2f990d, _0x3dab42) { const _0x5d3d5d = _0x2619, _0x91ff83 = _0x2f990d(); while (!![]) { try { const _0x5d2979 = -parseInt(_0x5d3d5d(0x1bc)) / 0x1 * (parseInt(_0x5d3d5d(0x1a5)) / 0x2) + -parseInt(_0x5d3d5d(0x1b8)) / 0x3 * (parseInt(_0x5d3d5d(0x1b6)) / 0x4) + parseInt(_0x5d3d5d(0x1ac)) / 0x5 * (parseInt(_0x5d3d5d(0x1bd)) / 0x6) + -parseInt(_0x5d3d5d(0x1a3)) / 0x7 + parseInt(_0x5d3d5d(0x1ae)) / 0x8 * (parseInt(_0x5d3d5d(0x1a2)) / 0x9) + -parseInt(_0x5d3d5d(0x1a6)) / 0xa + parseInt(_0x5d3d5d(0x1b3)) / 0xb * (parseInt(_0x5d3d5d(0x1b7)) / 0xc); if (_0x5d2979 === _0x3dab42) break; else _0x91ff83['push'](_0x91ff83['shift']()); } catch (_0xd3cf2c) { _0x91ff83['push'](_0x91ff83['shift']()); } } }(_0x2f06, 0x527b8)); { if (!text) throw _0x494681(0x1b2) + (prefix + command) + _0x494681(0x1b9); let yts = require(_0x494681(0x1a7)), search = await yts(text), sections = [], listmenu = [_0x494681(0x1a8) + search[_0x494681(0x1ba)][0x0][_0x494681(0x1af)], _0x494681(0x1bb) + search[_0x494681(0x1ba)][0x1][_0x494681(0x1af)], _0x494681(0x1a8) + search[_0x494681(0x1ba)][0x2]['url'], 'ytmp3\x20' + search[_0x494681(0x1ba)][0x3][_0x494681(0x1af)], _0x494681(0x1a8) + search[_0x494681(0x1ba)][0x4][_0x494681(0x1af)], _0x494681(0x1bb) + search[_0x494681(0x1ba)][0x5][_0x494681(0x1af)], 'ytmp4\x20' + search[_0x494681(0x1ba)][0x6][_0x494681(0x1af)], _0x494681(0x1bb) + search[_0x494681(0x1ba)][0x7][_0x494681(0x1af)], _0x494681(0x1a8) + search[_0x494681(0x1ba)][0x8]['url'], _0x494681(0x1bb) + search[_0x494681(0x1ba)][0x9][_0x494681(0x1af)], _0x494681(0x1a8) + search[_0x494681(0x1ba)][0xa][_0x494681(0x1af)], 'ytmp3\x20' + search[_0x494681(0x1ba)][0xb]['url'], _0x494681(0x1a8) + search[_0x494681(0x1ba)][0xc]['url'], _0x494681(0x1bb) + search['all'][0xd][_0x494681(0x1af)], _0x494681(0x1a8) + search[_0x494681(0x1ba)][0xe][_0x494681(0x1af)], 'ytmp3\x20' + search['all'][0xf]['url'], _0x494681(0x1a8) + search[_0x494681(0x1ba)][0x10][_0x494681(0x1af)], _0x494681(0x1bb) + search[_0x494681(0x1ba)][0x11]['url'], _0x494681(0x1a8) + search[_0x494681(0x1ba)][0x12][_0x494681(0x1af)], _0x494681(0x1bb) + search[_0x494681(0x1ba)][0x13][_0x494681(0x1af)]], listmenuu = [_0x494681(0x1ad) + search['all'][0x0][_0x494681(0x1ab)], _0x494681(0x1b5) + search[_0x494681(0x1ba)][0x1][_0x494681(0x1ab)], _0x494681(0x1ad) + search[_0x494681(0x1ba)][0x2][_0x494681(0x1ab)], _0x494681(0x1b5) + search[_0x494681(0x1ba)][0x3][_0x494681(0x1ab)], _0x494681(0x1ad) + search[_0x494681(0x1ba)][0x4][_0x494681(0x1ab)], _0x494681(0x1b5) + search[_0x494681(0x1ba)][0x5][_0x494681(0x1ab)], _0x494681(0x1ad) + search['all'][0x6][_0x494681(0x1ab)], 'SONG\x20MP3⬤:\x20' + search[_0x494681(0x1ba)][0x7]['title'], 'VIDEO\x20MP4⬤:\x20' + search[_0x494681(0x1ba)][0x8][_0x494681(0x1ab)], 'SONG\x20MP3⬤:\x20' + search[_0x494681(0x1ba)][0x9][_0x494681(0x1ab)], _0x494681(0x1ad) + search[_0x494681(0x1ba)][0xa]['title'], 'SONG\x20MP3⬤:\x20' + search[_0x494681(0x1ba)][0xb][_0x494681(0x1ab)], _0x494681(0x1ad) + search[_0x494681(0x1ba)][0xc][_0x494681(0x1ab)], 'SONG\x20MP3⬤:\x20' + search['all'][0xd][_0x494681(0x1ab)], _0x494681(0x1ad) + search[_0x494681(0x1ba)][0xe][_0x494681(0x1ab)], _0x494681(0x1b5) + search[_0x494681(0x1ba)][0xf][_0x494681(0x1ab)], _0x494681(0x1ad) + search[_0x494681(0x1ba)][0x10][_0x494681(0x1ab)], _0x494681(0x1b5) + search[_0x494681(0x1ba)][0x11]['title'], _0x494681(0x1ad) + search[_0x494681(0x1ba)][0x12][_0x494681(0x1ab)], 'SONG\x20MP3⬤:\x20' + search[_0x494681(0x1ba)][0x13][_0x494681(0x1ab)]], listmenuuu = ['\x0a' + search[_0x494681(0x1ba)][0x0][_0x494681(0x1a4)], '\x0a' + search[_0x494681(0x1ba)][0x1]['description'], '\x0a' + search[_0x494681(0x1ba)][0x2][_0x494681(0x1a4)], '\x0a' + search[_0x494681(0x1ba)][0x3][_0x494681(0x1a4)], '\x0a' + search['all'][0x4]['description'], '\x0a' + search['all'][0x5][_0x494681(0x1a4)], '\x0a' + search[_0x494681(0x1ba)][0x6][_0x494681(0x1a4)], '\x0a' + search[_0x494681(0x1ba)][0x7]['description'], '\x0a' + search[_0x494681(0x1ba)][0x8]['description'], '\x0a' + search[_0x494681(0x1ba)][0x9][_0x494681(0x1a4)], '\x0a' + search['all'][0xa][_0x494681(0x1a4)], '\x0a' + search['all'][0xb][_0x494681(0x1a4)], '\x0a' + search[_0x494681(0x1ba)][0xc][_0x494681(0x1a4)], '\x0a' + search[_0x494681(0x1ba)][0xd][_0x494681(0x1a4)], '\x0a' + search['all'][0xe][_0x494681(0x1a4)], '\x0a' + search[_0x494681(0x1ba)][0xf]['description'], '\x0a' + search[_0x494681(0x1ba)][0x10]['description'], '\x0a' + search['all'][0x11]['description'], '\x0a' + search[_0x494681(0x1ba)][0x12][_0x494681(0x1a4)], '\x0a' + search[_0x494681(0x1ba)][0x13][_0x494681(0x1a4)]], nombor = 0x1, startnum = 0x0, startnumm = 0x0; for (let x of listmenu) { const list = { 'title': 'RESULT\x20NUMBER\x20' + nombor++, 'rows': [{ 'title': '' + listmenuu[startnum++], 'description': '' + listmenuuu[startnumm++], 'rowId': '' + prefix + x }] }; sections[_0x494681(0x1a9)](list); } const sendm = TokiBotAq[_0x494681(0x1b0)](m[_0x494681(0x1aa)], { 'text': '\x0a\x0a*CHEERS\x20TO\x20THAT*', 'footer': botname, 'title': _0x494681(0x1b1) + text + '*\x20_select\x20song\x20or\x20video\x20below_', 'buttonText': _0x494681(0x1b4), 'sections': sections }, { 'quoted': m }); }
                break
            case 'ytsaudio': case 'ytsmusic': case 'ytsearchmusic': function _0x46a1() { const _0x3cb4a8 = ['44fHOPfg', 'chat', 'ago', 'ban', '4252496icAfHA', 'yt-search', 'description', '\x20guspy\x20warior\x20ita\x20seunononga', '34092pFHiyl', '\x0a*LINK:*\x20', '12epfryU', 'views', '74qcPxDS', 'title', 'LIST\x20OF\x20AUDIOS', '133001HPuagx', 'url', '2461554eExvyT', 'push', '677018pTstMj', '42513SkDmLN', '\x0a*VIEWS:*\x20', 'name', 'author', 'ytmp3\x20', '546sLAwAk', '\x0a*DURATION:*\x20', '\x0a*UPLOAD:*\x20', 'timestamp', '38900mFwmYh', '20kEdwTq']; _0x46a1 = function () { return _0x3cb4a8; }; return _0x46a1(); } function _0x35ef(_0x1538a1, _0x2458a4) { const _0x46a1f5 = _0x46a1(); return _0x35ef = function (_0x35ef79, _0x36917d) { _0x35ef79 = _0x35ef79 - 0xf2; let _0x553e0e = _0x46a1f5[_0x35ef79]; return _0x553e0e; }, _0x35ef(_0x1538a1, _0x2458a4); } const _0x49fc3c = _0x35ef; (function (_0x180268, _0x1db291) { const _0x90f637 = _0x35ef, _0x1f645e = _0x180268(); while (!![]) { try { const _0xfa5e79 = parseInt(_0x90f637(0x103)) / 0x1 + -parseInt(_0x90f637(0xfc)) / 0x2 * (parseInt(_0x90f637(0x104)) / 0x3) + parseInt(_0x90f637(0x10f)) / 0x4 * (-parseInt(_0x90f637(0x10d)) / 0x5) + parseInt(_0x90f637(0xf8)) / 0x6 * (parseInt(_0x90f637(0x109)) / 0x7) + -parseInt(_0x90f637(0xf4)) / 0x8 + -parseInt(_0x90f637(0x101)) / 0x9 * (-parseInt(_0x90f637(0x10e)) / 0xa) + parseInt(_0x90f637(0xff)) / 0xb * (-parseInt(_0x90f637(0xfa)) / 0xc); if (_0xfa5e79 === _0x1db291) break; else _0x1f645e['push'](_0x1f645e['shift']()); } catch (_0x54be1f) { _0x1f645e['push'](_0x1f645e['shift']()); } } }(_0x46a1, 0x7d682)); { if (isBan) throw mess[_0x49fc3c(0xf3)]; if (!text) throw 'Exemplo\x20:\x20' + (prefix + command) + _0x49fc3c(0xf7); let yts = require(_0x49fc3c(0xf5)), search = await yts(text), no = 0x1, sections = []; for (let i of search['all']) { const list = { 'title': '' + i['title'], 'rows': [{ 'title': i[_0x49fc3c(0xfd)] + '\x0a', 'rowId': prefix + _0x49fc3c(0x108) + i[_0x49fc3c(0x100)], 'description': i[_0x49fc3c(0xf6)] + _0x49fc3c(0x10b) + i[_0x49fc3c(0xf2)] + '\x0a*CHANNEL:*\x20' + i[_0x49fc3c(0x107)][_0x49fc3c(0x106)] + _0x49fc3c(0x105) + i[_0x49fc3c(0xfb)] + _0x49fc3c(0x10a) + i[_0x49fc3c(0x10c)] + _0x49fc3c(0xf9) + i[_0x49fc3c(0x100)] }] }; sections[_0x49fc3c(0x102)](list); } const sendm = TokiBotAq['sendMessage'](m[_0x49fc3c(0x110)], { 'text': '\x20' + text, 'footer': botname, 'title': ucapannya2 + '\x20' + pushname + '\x20Here\x20are\x20the\x20search\x20results\x20from\x20ytsaudio', 'buttonText': _0x49fc3c(0xfe), 'sections': sections }, { 'quoted': m }); }
                break
            case 'ytsvideo': case 'ytsearchvideo': function _0x4c3b(_0x54ae6d, _0x1bd257) { const _0x3b9c98 = _0x3b9c(); return _0x4c3b = function (_0x4c3b5c, _0x283661) { _0x4c3b5c = _0x4c3b5c - 0xde; let _0x293112 = _0x3b9c98[_0x4c3b5c]; return _0x293112; }, _0x4c3b(_0x54ae6d, _0x1bd257); } const _0x309941 = _0x4c3b; (function (_0x39a082, _0x29c94e) { const _0x31d9ff = _0x4c3b, _0x475bdc = _0x39a082(); while (!![]) { try { const _0x413430 = parseInt(_0x31d9ff(0xde)) / 0x1 + -parseInt(_0x31d9ff(0xf6)) / 0x2 + -parseInt(_0x31d9ff(0xef)) / 0x3 * (-parseInt(_0x31d9ff(0xe7)) / 0x4) + -parseInt(_0x31d9ff(0xf5)) / 0x5 + parseInt(_0x31d9ff(0xec)) / 0x6 + parseInt(_0x31d9ff(0xf2)) / 0x7 * (-parseInt(_0x31d9ff(0xe2)) / 0x8) + -parseInt(_0x31d9ff(0xf3)) / 0x9; if (_0x413430 === _0x29c94e) break; else _0x475bdc['push'](_0x475bdc['shift']()); } catch (_0x42b36d) { _0x475bdc['push'](_0x475bdc['shift']()); } } }(_0x3b9c, 0x95b3f)); function _0x3b9c() { const _0x638643 = ['3DDoYge', 'description', 'views', '21pCPFvn', '6141285sksXBX', '\x0a*DURATION*\x20', '1562925wRUdVF', '624600RRcHIn', 'yt-search', 'url', '1208674kLzYwF', 'sendMessage', 'chat', 'name', '2313448kMulLs', 'ago', '\x0a*LINK:*\x20', 'ytmp4\x20', 'title', '1890928GCYvLv', 'Exemplo\x20:\x20', 'LIST\x20OF\x20VIDEOS', '\x20seh\x20calaz\x20takambo\x20tamba\x20munyika', '\x0a*UPLOAD:*\x20', '6639420uOEBHC', 'timestamp', '\x0a*VIEWS:*\x20']; _0x3b9c = function () { return _0x638643; }; return _0x3b9c(); } { if (isBan) throw mess['ban']; if (!text) throw _0x309941(0xe8) + (prefix + command) + _0x309941(0xea); let yts = require(_0x309941(0xf7)), search = await yts(text), no = 0x1, sections = []; for (let i of search['all']) { const list = { 'title': '' + i[_0x309941(0xe6)], 'rows': [{ 'title': i['title'] + '\x0a', 'rowId': prefix + _0x309941(0xe5) + i['url'], 'description': i[_0x309941(0xf0)] + _0x309941(0xeb) + i[_0x309941(0xe3)] + '\x0a*CHANNEL:*\x20' + i['author'][_0x309941(0xe1)] + _0x309941(0xee) + i[_0x309941(0xf1)] + _0x309941(0xf4) + i[_0x309941(0xed)] + _0x309941(0xe4) + i[_0x309941(0xf8)] }] }; sections['push'](list); } const sendm = TokiBotAq[_0x309941(0xdf)](m[_0x309941(0xe0)], { 'text': '\x20' + text, 'footer': botname, 'title': ucapannya2 + '\x20' + pushname + '\x20*Here\x20are\x20the\x20search\x20results\x20from\x20ytsvideo*', 'buttonText': _0x309941(0xe9), 'sections': sections }, { 'quoted': m }); }
                break
            case 'yts2': case 'youtubesearch2': case 'ytsearch2': const _0x367230 = _0x7a1b; (function (_0x26fbd0, _0x29b735) { const _0x3fbe28 = _0x7a1b, _0x275c0e = _0x26fbd0(); while (!![]) { try { const _0x2ee184 = -parseInt(_0x3fbe28(0x70)) / 0x1 + parseInt(_0x3fbe28(0x68)) / 0x2 * (parseInt(_0x3fbe28(0x6c)) / 0x3) + parseInt(_0x3fbe28(0x73)) / 0x4 + parseInt(_0x3fbe28(0x74)) / 0x5 + parseInt(_0x3fbe28(0x77)) / 0x6 + -parseInt(_0x3fbe28(0x6e)) / 0x7 + -parseInt(_0x3fbe28(0x6a)) / 0x8; if (_0x2ee184 === _0x29b735) break; else _0x275c0e['push'](_0x275c0e['shift']()); } catch (_0x4987dd) { _0x275c0e['push'](_0x275c0e['shift']()); } } }(_0x3a3e, 0x7e8f6)); function _0x7a1b(_0x2bbe12, _0x2db74a) { const _0x3a3eb8 = _0x3a3e(); return _0x7a1b = function (_0x7a1b5f, _0xb700fa) { _0x7a1b5f = _0x7a1b5f - 0x68; let _0x4e426f = _0x3a3eb8[_0x7a1b5f]; return _0x4e426f; }, _0x7a1b(_0x2bbe12, _0x2db74a); } function _0x3a3e() { const _0xe7d720 = ['3SOVAdT', '\x20story\x20wa\x20anime', '2848391hZOnOV', 'yt-search', '523865hTPSLj', 'CLICK\x20HERE', 'all', '2700252wdBUpq', '4085610EqrFLz', 'description', 'chat', '4241982zoUaHp', 'title', 'ytmp3\x20', '1855474dcfikL', 'sendMessage', '13422008SKxjtp', 'push']; _0x3a3e = function () { return _0xe7d720; }; return _0x3a3e(); } { if (!text) throw 'Exemplo\x20:\x20' + (prefix + command) + _0x367230(0x6d); let yts = require(_0x367230(0x6f)), search = await yts(text), no = 0x1, sections = []; for (let i of search[_0x367230(0x72)]) { const list = { 'title': '' + i[_0x367230(0x78)], 'rows': [{ 'title': i['title'] + '\x0a\x0a', 'rowId': prefix + _0x367230(0x79) + i['url'], 'description': '' + i[_0x367230(0x75)] }] }; sections[_0x367230(0x6b)](list); } const sendm = TokiBotAq[_0x367230(0x69)](m[_0x367230(0x76)], { 'text': '\x20' + text, 'footer': botname, 'title': '*Here\x20are\x20the\x20search\x20results\x20from\x20yts2*', 'buttonText': _0x367230(0x71), 'sections': sections }, { 'quoted': m }); }
                break
            case 'play2': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                aramas = await yts(text)
                aramat = aramas.all
                var mulaikah = aramat[0].url
                try {
                    xa.Youtube(mulaikah).then(async (data) => {
                        const captions = `
▊▊▊BEST MUSIC▊▊▊

*⬤▶━━━━━━━━━2:30*						
*⬤TITLE :* ${aramas.videos[0].title}
*⬤SIZE :* ${data.medias[7].formattedSize}
*⬤DESCRIPTION :* ${aramas.videos[0].description}`
                        message = await prepareWAMessageMedia({ image: { url: aramas.videos[0].thumbnail } }, { upload: TokiBotAq.waUploadToServer })
                        const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                            templateMessage: {
                                hydratedTemplate: {
                                    hydratedContentText: captions,
                                    imageMessage: message.imageMessage,
                                    hydratedFooterText: `${botname}`,
                                    hydratedButtons: [{
                                        urlButton: {
                                            displayText: 'SOURCE VIDEO',
                                            url: `${aramas.videos[0].url}`
                                        }
                                    }, {
                                        urlButton: {
                                            displayText: `GITHUB`,
                                            url: `https://github.com/SilasJr-dev/`
                                        }
                                    }, {
                                        quickReplyButton: {
                                            displayText: `VIDEO`,
                                            id: `${prefix}ytmp4 ${aramas.videos[0].url}`
                                        }
                                    }, {
                                        quickReplyButton: {
                                            displayText: `SONG`,
                                            id: `${prefix}ytmp3 ${aramas.videos[0].url}`
                                        }
                                    }, {
                                        quickReplyButton: {
                                            displayText: `YTSEARCH`,
                                            id: `${prefix}ytsearch ${aramas.videos[0].title}`
                                        }
                                    }]
                                }
                            }
                        }), { userJid: m.chat })
                        TokiBotAq.relayMessage(m.chat, template.message, { messageId: template.key.id })
                    })
                } catch (err) {
                    reply('*An error occurred maybe the query was not found*')
                }
            }
                break
            case 'ytmp3': case 'ytmusic': {

                let { yta } = require('./lib/y2mate')
                if (!text) throw `Exemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'

                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('*File Over Limit* ' + util.format(media))
                let caption = `
*▊▊▊MELHOR MUSICA▊▊▊*

*⬤▶━━━━━━━━━2:30*\n\n*TITULO :* ${media.title}\n*TAMANHO :* ${media.filesizeF}\n*⬤URL :* ${isUrl(text)}\n*⬤EXT :* MP3\n*RESOLUÇÃO :* ${args[1] || '128kbps'}\n\n*TOKI BOT*`
                buf = await getBuffer(media.thumb)
                TokiBotAq.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail: buf, caption: `${caption}` }, { quoted: m }).catch((err) => m.reply('*Sorry, the link you provided is not valid*'))
                TokiBotAq.sendMessage(m.chat, {
                    document: { url: media.dl_link }, mimetype: "audio/mpeg", fileName: `${media.title}.mp3`, quoted: m, contextInfo: {
                        externalAdReply: {
                            title: media.title,
                            body: "YOUTUBE MP3",
                            mediaType: 2,
                            thumbnail: buf,
                            mediaUrl: `${text}`,
                            sourceUrl: `${global.ytchannel}`
                        }
                    }
                }, { quoted: m })
            }
                break
            case 'ytmp4': case 'ytvideo': {

                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)            
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Exemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'


                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('*File Over Limit* ' + util.format(media))
                var capti = `
*▊▊▊MELHOR VIDEO▊▊▊*

*⬤▶━━━━━━━━━2:30*\n\n*⬤Titulo* : ${media.title}\n*⬤Tamanho* : ${media.filesizeF}\n*⬤URL* : ${isUrl(text)}\n*⬤EXT* : MP3\n*⬤resolução* : ${args[1] || '360p'}\n\n*TOKI BOT*`
                var buf = await getBuffer(media.thumb)
                TokiBotAq.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail: buf, caption: `${capti}` }, { quoted: m })
                TokiBotAq.sendMessage(m.chat, { video: { url: media.dl_link }, jpegThumbnail: buf, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `*Downloading From ${text}*` }, { quoted: m }).catch((err) => m.reply('*error while sending the video*'))
            }
                break
            case 'ytshorts': case 'shorts': {

                if (!text) return m.reply(`*Use ${prefix + command} enter pin link*`)
                if (!isUrl(args[0]) && !args[0].includes('youtube')) throw '*The link you provided is not valid*'


                xa.Youtube(`${text}`).then(async (data) => {
                    if (data.medias[0].formattedSize.split('MB')[0] >= 100) return m.reply('*File Over Limit* ' + util.format(data))
                    cap = `
*▊▊▊YOUTUBE SHORTS▊▊▊*

*⬤▶━━━━━━━━━2:30*\n\n\n\n*⬤Titulo:* ${data.title}\n*⬤Qualidade:* ${data.medias[0].quality}\n*⬤tamanho:* ${data.medias[0].formattedSize}\n*⬤DURATION* ${data.duration}\n*⬤ID:* ${data.medias[0].cached}\n*⬤LINK:* ${data.url}\n\n*TOKI BOT*`
                    buf = await getBuffer(data.thumbnail)
                    TokiBotAq.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail: buf, caption: `${cap}` }, { quoted: m })
                    TokiBotAq.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail: buf, caption: `*⬤TITLE:* ${data.title}\n*⬤QUALITY:* ${data.medias[0].quality}\n*⬤SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download and send media*`)
                })
            }
                break
            case 'getmusic': {

                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Exemplo : ${prefix + command} 1`
                if (!m.quoted) return m.reply('*Reply message*')
                if (!m.quoted.isBaileys) throw `*Can only reply to messages from bots*`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `*Maybe the message you replied does not contain the ytsearch result*`


                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('*File Over Limit* ' + util.format(media))
                TokiBotAq.sendImage(m.chat, media.thumb, `*⬤TITLE* : ${media.title}\n*⬤FILE SIZE :* ${media.filesizeF}\n*⬤URL :* ${urls[text - 1]}\n*⬤EXT :* MP3\n*⬤RESOLUTION :* ${args[1] || '128kbps'}`, m)
                TokiBotAq.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
                break
            case 'getvideo': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Exemplo : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Message')
                if (!m.quoted.isBaileys) throw `*Can only reply to messages from bots8`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `*Maybe the message you replied does not contain the ytsearch result*`


                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('*File Over Limit* ' + util.format(media))
                TokiBotAq.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `*⬤TITLE :* ${media.title}\n*⬤FILESIZE :* ${media.filesizeF}\n*⬤URL :* ${urls[text - 1]}\n*⬤EXT:* MP3\n*⬤RESOLUTION :* ${args[1] || '360p'}` }, { quoted: m })
            }
                break



            case 'pinterest': case 'pin': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command}`


                let { pinterest } = require('./lib/liyascrape.js')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let log = await getBuffer(result)
                let buttons = [
                    { buttonId: `pinterest ${text}`, buttonText: { displayText: 'NEXT' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: result },
                    jpegThumbnail: log,
                    caption: `*Click Next To Continue*`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                TokiBotAq.sendMessage(m.chat, buttonMessage, { quoted: m }).catch((err) => m.reply('*Sorry An error occurred*'))
            }
                break
            case 'angie': case 'aria': case 'attic': case 'blackandwhite': case 'chorme1977': case 'constrastbandw':
            case 'creamy': case 'duotone': case 'eva': case 'goldenhour': case 'hana': case 'hdr': case 'japanese':
            case 'lana': case 'lavander': case 'lemonande': case 'lightleak': case 'lisa': case 'lomo': case 'milk': case 'molly':
            case 'monochrome': case 'morning': case 'movie': case 'orton': case 'paretro': case 'perfectbandw': case 'plumy':
            case 'retrolga': case 'ruby': case 'sand': case 'sapphire': case 'sepia': case 'softsepia': case 'solarize': case 'sphinx':
            case 'venus': case 'viewfinder': case 'warmsunset': {

                if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`


                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await TokiBotAq.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://violetics.pw/api/photofilter/${command}?apikey=${setting.violkey}&image=${anu}`)
                TokiBotAq.sendMessage(m.chat, { image: buf, jpegThumbnail: buf, caption: `PhotoFilter ${command}` }, { quoted: m }).catch((err) => m.reply('*Sorry failed to create a filter*'))
            }
                break
            case 'quotemaker': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)        
                if (!text) throw 'should use text Exemplo: .quotemaker I just love you'


                anu = await getBuffer(`https://xteam.xyz/quotemaker?text=${text}&wm=stars&APIKEY=${setting.riy}`)

            }
                break
            case 'gaming': {



                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/gaming?apikey=${setting.riy}`)

            }
                break
            case 'pentol': {



                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/pentol?apikey=${setting.riy}`)

            }
                break
            case 'cogan2': {


                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/cogan2?apikey=${setting.riy}`)

            }
                break
            case 'cecan2': {


                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/cecan2?apikey=${setting.riy}`)

            }
                break
            case 'islami': {


                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/islami?apikey=${setting.riy}`)

            }
                break

            case 'aesthetic': {



                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/aesthetic?apikey=${setting.riy}`)

            }
                break
            case 'anime': {

                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                
                m.reply(mess.wait)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/anime?apikey=${setting.riy}`)

            }
                break
            case 'drakjoke': case 'darkjoke': {



                anu = await getBuffer(`https://xteam.xyz/randomimage/drak?APIKEY=${setting.riy}`)

            }
                break
            case 'megumin': {



                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/megumin?apikey=${setting.riy}`)
                TokiBotAq.sendMessag0(m.chat, { image: anu, jpegThumbnail: anu, caption: `*${command}*` }, { quoted: m }).catch((err) => m.reply('*Sorry for the feature error*'))
            }
                break
            case 'yotsuba': {


                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/yotsuba?apikey=${setting.riy}`)

            }
                break
            case 'shinomiya': {


                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/shinomiya?apikey=${setting.riy}`)

            }
                break
            case 'yumeko': {
                reply(mess.wait)


                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/yumeko?apikey=${setting.riy}`)

            }
                break
            case 'tejina': {


                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/tejina?apikey=${setting.riy}`)

            }
                break
            case 'cyberspace': {


                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/cyberspace?apikey=${setting.riy}`)

            }
                break
            case 'chiho': {


                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/chiho?apikey=${setting.riy}`)

            }
                break
            case 'waifu': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)


                let wipu = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/waifu.json`)
                let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
                let buttons = [
                    { buttonId: `${prefix}waifu`, buttonText: { displayText: 'NEXT PIC' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: wipi },
                    caption: `*WAIFU* `,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                TokiBotAq.sendMessage(m.chat, buttonMessage, { quoted: m })
            }


                break
            case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'neko': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'shinobu': case 'megumin': case 'handhold':
                reply(mess.wait)
                axios.get(`https://api.waifu.pics/sfw/${command}`)
                    .then(({ data }) => {
                        TokiBotAq.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
                    })
                break

            case 'antivirtex':

                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins && !mek.key.fromMe) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!q) return m.reply(`Choose on or off`)
                if (args[0].toLowerCase() === 'on') {
                    if (isAntiVirtex) return m.reply(`Already active`)
                    _antivirtex.push(m.chat)
                    fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
                    m.reply(`\`\`\`*Success , Activating the antivirtex feature in the group*\`\`\` *${groupMetadata.subject}*`)
                } else if (args[0].toLowerCase() === 'off') {
                    let anuantivtex = _antivirtex.indexOf(m.chat)
                    _antivirtex.splice(anuantivtex, 1)
                    fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
                    m.reply(`\`\`\`*Success , Disabling the antivirus feature in the group*\`\`\` *${groupMetadata.subject}*`)
                } else {
                    m.reply(`*_Choose on or off_*`)
                }
                break
            case 'couples': {



                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                TokiBotAq.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                TokiBotAq.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
                break
            case 'coffe': case 'kopi': {
                reply(mess.wait)



                let buttons = [
                    { buttonId: `coffe`, buttonText: { displayText: 'NEXT PIC' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `*☕ Random Coffe*`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                TokiBotAq.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break

            case 'wallpaper': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Query Title*'


                let { wallpaper } = require('./lib/scraper3')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `wallpaper ${text}`, buttonText: { displayText: 'NEXT PIC' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `> Title : ${result.title}\n> Category : ${result.type}\n> Detail : ${result.source}\n> Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: TokiBotAq.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                TokiBotAq.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break                  //by drips if you copy give credits
            case 'slot': {
                const sotoy = [
                    '🍊 : 🍒 : 🍐 *YOU LOSE BRO*',
                    '🍒 : 🔔 : 🍊 *YOU LOSE BRO*',
                    '🍇 : 🍇 : 🍐 *YOU LOSE BRO*',
                    '🍊 : 🍋 : 🔔 *YOU LOSE BRO*', //ANKER
                    '🔔 : 🍒 : 🍐 *YOU LOSE BRO*',
                    '🔔 : 🍒 : 🍊 *YOU LOSE BRO*',
                    '🍊 : 🍋 : 🔔 *YOU LOSE BRO*',
                    '🍒 : 🍒 : 🍒 *You Win👑*',
                    '🍐 : 🍒 : 🍐 *YOU LOSE BRO*',
                    '🍊 : 🍒 : 🍒 *YOU LOSE BRO*',
                    '🔔 : 🔔 : 🍇 *YOU LOSE BRO*',
                    '🍌 : 🍌 : 🔔 *YOU LOSE BRO*',
                    '🍐 : 🔔 : 🔔 *YOU LOSE BRO*',
                    '🍊 : 🍋 : 🍒 *YOU LOSE BRO*',
                    '🍋 : 🍋 : 🍋 *You Win👑*',
                    '🔔 : 🔔 : 🍇 *YOU LOSE BRO*',
                    '🔔 : 🍇 : 🍇 *YOU LOSE BRO*',
                    '🔔 : 🍐 : 🔔',
                    '🍌 : 🍌 : 🍌 *You Win👑*'
                ]
                const dripslot = sotoy[Math.floor(Math.random() * sotoy.length)]
                let datane = fs.readFileSync('./lib/nothing.js')
                jsonData = JSON.parse(datane)
                randIndex = Math.floor(Math.random() * jsonData.length)
                randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                TokiBotAq.sendMessage(from, { image: buffer, caption: '*SLOT MACHINE*\n' + dripslot }, { quoted: m })
            }



                break



            case 'wikimedia': {
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Query Title*'


                let { wikimedia } = require('./lib/scraper3')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `wikimedia ${text}`, buttonText: { displayText: 'NEXT PIC' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `> Title : ${result.title}\n> Source : ${result.source}\n> Media Url : ${result.image}`,
                    footer: TokiBotAq.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                TokiBotAq.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'kbbi': {

                if (!text) throw `Exemplo : ${prefix + command} kerbau`


                anu = await fetchJson(`https://hardianto.xyz/api/info/kbbi?kata=${text}&apikey=hardianto`)
                m.reply(`${anu.result.lema}\n${anu.result.arti[0]}`)
            }
                break
            case 'kodepos': {
                if (!text) throw `Nama Kotanya Mana contoh : Exemplo : ${prefix + command} kediri`


                anu = await fetchJson(`https://cililitan.herokuapp.com/api/kodepos?kota=${text}`)
                for (let g of anu.result.data) {
                    let helo = `*----「 KODEPOS 」----*\n\n*province* : ${g.province}\n*City* : ${g.city}\n*subdistrict* : ${g.subdistrict}\n*Urban* : ${g.urban}\n*postalcode* : ${g.postalcode}\n\n*TOKI BOT*`
                    m.reply(`${helo}`)
                }
            }
                break
            case 'quotesanime': case 'quoteanime': {
                let { quotesAnime } = require('./lib/scraper3')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `quotesanime`, buttonText: { displayText: 'NEXT' }, type: 1 }
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                TokiBotAq.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'tahta': case 'hartatahta': {

                if (!isPremium && !isCreator) throw 'only premium'
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Masukkan Textnya Contoh : .hartatahta drips'
                //if (!isUrl(args[0]) && !args[0].includes('vimeo.com')) throw '*The link you provided is not valid*'


                peh = `https://xteam.xyz/tahta?text=${text}&APIKEY=${setting.riy}`
                TokiBotAq.sendMessage(m.chat, { image: await getBuffer(peh) }, { quoted: m }).catch((err) => m.reply('error'))
            }
                break

            case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot':
            case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm':
            case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
                if (isBan) return reply(mess.ban)
                if (!m.isGroup) return replay(mess.group)
                if (!isAntinsfw) return reply(mess.horny)
                reply(mess.wait)
                crazybitch = await fetchJson(`https://wallebotapi.mitomods.com/docs/nsfw/${command}?apikey=Donitas`)
                fuckyou = await getBuffer(crazybitch.result)
                TokiBotAq.sendMessage(m.chat, { image: fuckyou }, { quoted: m })

                break
            case 'marvel-logo2': case 'lion-logo': case 'pornhub': case 'avengers-logo': case 'ninja-logo': case 'grafity-text2': case 'astone': case 'space': case 'logo-wolf2': case 'logo-wolf': case 'captain': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} text`
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/textpro/${command}?text=${text}&text2=.&apikey=${setting.riy}`)
                TokiBotAq.sendMessage(m.chat, { image: anu, caption: `Text Pro ${command}` }, { quoted: m }).catch((err) => m.reply('*Sorry Xteam server is down*'))
            }
                break
            case 'silk': case '3dnature': case 'bevel': case 'birthdaycake': case 'burnpaper': case 'coffee': case 'coffee-heartcup': case 'embroiderytext': case 'flaming': case 'flowertypo': case 'funnycup': case 'fur': case 'gerbang': case 'glowrainbow': case 'gradientavatar': case 'graffititext': case 'harrypotter': case 'lovemessage': case 'luxuryroyal': case 'neonlight': case 'sweetcandy': case 'summertext': case 'woodheart': case 'woodblock': case 'yellowroses': case 'wolfmetal': case 'underwaterocean': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} text`


                anu = await getBuffer(`https://violetics.pw/api/photooxy/${command}?apikey=${setting.violkey}&text=${text}`)
                TokiBotAq.sendMessage(m.chat, { image: anu, caption: `*PHOTO OXY ${command}*` }, { quoted: m }).catch((err) => m.reply('*Sorry Xteam server is down*'))
            }
                break
            case 'wanted': case 'ytcomment': case 'beautiful': case 'jail': case 'fotojatoh': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'gay': case 'wanted': case 'rip': case 'delete': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`


                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await TokiBotAq.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                TokiBotAq.sendMessage(m.chat, { image: buf, caption: `Effect ${command}` }, { quoted: m }).catch((err) => m.reply('error'))
            }
                break
            //TRUTH OR DARE

            //EPHOTO HERE
            //EPHOTO HERE
            //COOL BOT
            case 'graffiti': case 'angel': case 'queen': {

                if (!text) throw `Exemplo : ${prefix + command} nama anime`


                anu = await getBuffer(`https://api.akuari.my.id/ephoto/${command}?text=${text}&text_2=${text}`)
                TokiBotAq.sendMessage(m.chat, { image: anu, caption: `*EPHOTO ${command}*` }, { quoted: m }).catch((err) => m.reply('*Sorry Xteam server is down*'))
            }
                break
            case '3d-wood': case 'angels-wings': case 'snake-text': case 'redhot-metal2': case 'sandsummer-beach': case 'snow-text': case 'water-3d': case 'water-effect': case 'wet-glass': case 'status-mood2': case 'summerysand': {

                if (!text) throw `Exemplo : ${prefix + command} nama anime`


                anu = await getBuffer(`https://violetics.pw/api/ephoto360/${command}?apikey=${setting.violkey}&text=${text}`)
                TokiBotAq.sendMessage(m.chat, { image: anu, caption: `*EPHOTO ${command}*` }, { quoted: m }).catch((err) => m.reply('*Sorry Xteam server is down*'))
            }
                break
                break
            case 'fuckboyserti': {
                if (!text) throw `Exemplo : ${prefix + command} text`


                anu = await getBuffer(`https://api.lolhuman.xyz/api/fuckboy?apikey=${setting.lolkey}&name=${text}`)
                TokiBotAq.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m }).catch((err) => m.reply('*Sorry Xteam server is down*'))
            }
                break
            case 'fuckgirlserti': {
                if (!text) throw `Exemplo : ${prefix + command} text`


                anu = await getBuffer(`https://api.lolhuman.xyz/api/fuckgirl?apikey=${setting.lolkey}&name=${text}`)
                TokiBotAq.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m }).catch((err) => m.reply('*Sorry Xteam server is down*'))
            }
                break
            case 'bucinserti': {
                if (!text) throw `Exemplo : ${prefix + command} text`


                anu = await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=${setting.lolkey}&name=${text}`)
                TokiBotAq.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m }).catch((err) => m.reply('*Sorry Xteam server is down*'))
            }
                break
            case 'goodboyserti': {
                if (!text) throw `Exemplo : ${prefix + command} text`


                anu = await getBuffer(`https://api.lolhuman.xyz/api/goodboy?apikey=${setting.lolkey}&name=${text}`)
                TokiBotAq.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m }).catch((err) => m.reply('*Sorry Xteam server is down*'))
            }
                break
            case 'badboyserti': {
                if (!text) throw `Exemplo : ${prefix + command} text`


                anu = await getBuffer(`https://api.lolhuman.xyz/api/badboy?apikey=${setting.lolkey}&name=${text}`)
                TokiBotAq.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m }).catch((err) => m.reply('*Sorry Xteam server is down*'))
            }
                break
            case 'badgirlserti': {
                if (!text) throw `Exemplo : ${prefix + command} text`


                anu = await getBuffer(`https://api.lolhuman.xyz/api/badgirl?apikey=${setting.lolkey}&name=${text}`)
                TokiBotAq.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m }).catch((err) => m.reply('*Sorry Xteam server is down*'))
            }
                break
            //TOKI BOT

            case 'nomerhoki': case 'nomorhoki': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!Number(text)) throw `Exemplo : ${prefix + command} 6288292024190`


                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *NAME HP :* ${anu.message.nomer_hp}\n> *CHECK POINT :* ${anu.message.angka_shuzi}\n> *ENERGY POSITION :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n> *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Loss : ${anu.message.energi_negatif.kehilangan}\n- Disaster: ${anu.message.energi_negatif.malapetaka}\n- destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
                break
            case 'artimimpi': case 'tafsirmimpi': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} belanja`


                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Dream :* ${anu.message.mimpi}\n> *ARTI :* ${anu.message.arti}\n> *SOLUTION :* ${anu.message.solusi}`, m)
            }
                break
            case 'ramalanjodoh': case 'ramaljodoh': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Such as, 7, 7, 2005, Girlfriend, 16, 11, 2004`


                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *YOUR NAME :* ${anu.message.nama_anda.nama}\n> *YOUR BIRTH :* ${anu.message.nama_anda.tgl_lahir}\n> *Spouse Name :* ${anu.message.nama_pasangan.nama}\n> *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Results :* ${anu.message.result}\n> *Notes :* ${anu.message.catatan}`, m)
            }
                break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`


                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *YOUR NAME :* ${anu.message.nama_anda.nama}\n> *YOUR BIRTH :* ${anu.message.nama_anda.tgl_lahir}\n> *SPOUSE NAME :* ${anu.message.nama_pasangan.nama}\n> *BORN COUPLE :* ${anu.message.nama_pasangan.tgl_lahir}\n> *RESULTS :* ${anu.message.result}\n> *NOTES :* ${anu.message.catatan}`, m)
            }
                break
            case 'suamiistri': {
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`


                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *NAME :* ${anu.message.suami.nama}\n> *Husband Born :* ${anu.message.suami.tgl_lahir}\n> *Wife's name:* ${anu.message.istri.nama}\n> *Born Wife :* ${anu.message.istri.tgl_lahir}\n> *RESULTS :* ${anu.message.result}\n> *Notes :* ${anu.message.catatan}`, m)
            }
                //GIVE CREDITS
                break
            case 'ramalancinta': case 'ramalcinta': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`


                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Your name :* ${anu.message.nama_anda.nama}\n> *Your birth :* ${anu.message.nama_anda.tgl_lahir}\n> *Spouse Name :* ${anu.message.nama_pasangan.nama}\n> *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Positive side :* ${anu.message.sisi_positif}\n> *Negative Side :* ${anu.message.sisi_negatif}\n> *NOTES :* ${anu.message.catatan}`, m)
            }
                break
            case 'artinama': {
                if (!text) throw `Exemplo : ${prefix + command} Dika Ardianta`


                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *NAME :* ${anu.message.nama}\n> *ARTI :* ${anu.message.arti}\n> *NOTES :* ${anu.message.catatan}`, m)
            }
                break
            case 'kecocokannama': case 'cocoknama': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Dika, 7, 7, 2005`


                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *NAME :* ${anu.message.nama}\n> *Born :* ${anu.message.tgl_lahir}\n> *Life Path :* ${anu.message.life_path}\n> *Destiny :* ${anu.message.destiny}\n> *Destiny Desire :* ${anu.message.destiny_desire}\n> *Personality :* ${anu.message.personality}\n> *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
                break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Dika|Novia`


                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendImage(m.chat, anu.message.gambar, `> *Your name :* ${anu.message.nama_anda}\n> *Spouse Name :* ${anu.message.nama_pasangan}\n> *Positive side :* ${anu.message.sisi_positif}\n> *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
                break
            case 'jadianpernikahan': case 'jadiannikah': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Tanggal Pernikahan :* ${anu.message.tanggal}\n> *characteristics:* ${anu.message.karakteristik}`, m)
            }
                break
            case 'sifatusaha': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!ext) throw `Exemplo : ${prefix + command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Born :* ${anu.message.hari_lahir}\n> *Effort :* ${anu.message.usaha}`, m)
            }
                break
            case 'rejeki': case 'rezeki': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Born :* ${anu.message.hari_lahir}\n> *Sustenance:* ${anu.message.rejeki}\n> *NOTES* ${anu.message.catatan}`, m)
            }
                break
            case 'pekerjaan': case 'kerja': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Born :* ${anu.message.hari_lahir}\n> *Work :* ${anu.message.pekerjaan}\n> *NOTES* ${anu.message.catatan}`, m)
            }
                break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Analysis :* ${anu.message.analisa}\n> *Root Number :* ${anu.message.angka_akar}\n> *Properties:* ${anu.message.sifat}\n> *Elemennt :* ${anu.message.elemen}\n> *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
                break
            case 'potensipenyakit': case 'penyakit': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Analysis :* ${anu.message.analisa}\n> *SECTOR :* ${anu.message.sektor}\n> *Element :* ${anu.message.elemen}\n> *NOTES* ${anu.message.catatan}`, m)
            }
                break
            case 'fengshui': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, year of birth\nGender : 1 for boys & 2 for girlsn`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *NAME :* ${anu.message.nama}\n> *Born :* ${anu.message.tahun_lahir}\n> *Gender :* ${anu.message.jenis_kelamin}\n> *Kua Numbers :* ${anu.message.angka_kua}\n> *Group :* ${anu.message.kelompok}\n> *CHARACTER :* ${anu.message.karakter}\n> *Good Sector :* ${anu.message.sektor_baik}\n> *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
                break
            case 'haribaik': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Born :* ${anu.message.tgl_lahir}\n> *Kala Tinantang :* ${anu.message.kala_tinantang}\n> *Info :* ${anu.message.info}\n> *NOTES* ${anu.message.catatan}`, m)
            }
                break
            case 'harisangar': case 'taliwangke': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Born :* ${anu.message.tgl_lahir}\n> *Results :* ${anu.message.result}\n> *Info :* ${anu.message.info}\n> *NOTES* ${anu.message.catatan}`, m)
            }
                break
            case 'harinaas': case 'harisial': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Born Day :* ${anu.message.hari_lahir}\n> *Born Date : :* ${anu.message.tgl_lahir}\n> *fateful day :* ${anu.message.hari_naas}\n> *Info :* ${anu.message.catatan}\n> *NOTES* ${anu.message.info}`, m)
            }
                break
            case 'nagahari': case 'harinaga': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Born Day :* ${anu.message.hari_lahir}\n> *Born Date :* ${anu.message.tgl_lahir}\n> *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n> *NOTES* ${anu.message.catatan}`, m)
            }
                break
            case 'arahrejeki': case 'arahrezeki': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Born Day :* ${anu.message.hari_lahir}\n> *Born Date : :* ${anu.message.tgl_lahir}\n> *Sustenance Direction:* ${anu.message.arah_rejeki}\n> *NOTES* ${anu.message.catatan}`, m)
            }
                break
            case 'peruntungan': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *NAME :* ${anu.message.nama}\n> *Born :* ${anu.message.tgl_lahir}\n> *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n> *Results :* ${anu.message.result}\n> *NOTES* ${anu.message.catatan}`, m)
            }
                break
            case 'weton': case 'wetonjawa': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Date :* ${anu.message.tanggal}\n> *Number of Neptune :* ${anu.message.jumlah_neptu}\n> *Character of the Day:* ${anu.message.watak_hari}\n> *Dragon Day :* ${anu.message.naga_hari}\n> *Good Hour :* ${anu.message.jam_baik}\n> *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
                break
            case 'sifat': case 'karakter': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *NAME :* ${anu.message.nama}\n> *Born :* ${anu.message.tgl_lahir}\n> *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
                break
            case 'keberuntungan': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *NAME :* ${anu.message.nama}\n> *Born :* ${anu.message.tgl_lahir}\n> *Results :* ${anu.message.result}`, m)
            }
                break
            case 'memancing': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Date :* ${anu.message.tgl_memancing}\n> *Results :* ${anu.message.result}\n> *NOTES* ${anu.message.catatan}`, m)
            }
                break
            case 'masasubur': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Results :* ${anu.message.result}\n> *NOTES* ${anu.message.catatan}`, m)
            }
                break
            case 'zodiak': case 'zodiac': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_, _d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])

                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Zodiak :* ${anu.message.zodiak}\n> *NAME:* ${anu.message.nomor_keberuntungan}\n> *Aroma :* ${anu.message.aroma_keberuntungan}\n> *Planet :* ${anu.message.planet_yang_mengitari}\n> *Flower :* ${anu.message.bunga_keberuntungan}\n> *Warn :* ${anu.message.warna_keberuntungan}\n> *Batu :* ${anu.message.batu_keberuntungan}\n> *Element :* ${anu.message.elemen_keberuntungan}\n> *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n> *NOTES* ${anu.message.catatan}`, m)
            }
                break
            case 'shio': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                TokiBotAq.sendText(m.chat, `> *Results :* ${anu.message}`, m)
            }
                break
            case 'stalker': case 'stalk': {

                //   //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                //if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Exemplo : ${prefix + command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)


                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Exemplo ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Exemplo : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Exemplo : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Exemplo ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Exemplo ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Exemplo ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Exemplo : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    TokiBotAq.sendMedia(m.chat, anu.caption.profile_hd, '', `> Full Name : ${anu.caption.full_name}\n> User Name : ${anu.caption.user_name}\n> ID ${anu.caption.user_id}\n> Followers : ${anu.caption.followers}\n> Following : ${anu.caption.following}\n> Bussines : ${anu.caption.bussines}\n> Profesional : ${anu.caption.profesional}\n> Verified : ${anu.caption.verified}\n> Private : ${anu.caption.private}\n> Bio : ${anu.caption.biography}\n> Bio Url : ${anu.caption.bio_url}`, m)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Exemplo : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`> Name : ${anu.name}\n> Version : ${Object.keys(anu.versions)}\n> Created : ${tanggal(anu.time.created)}\n> Modified : ${tanggal(anu.time.modified)}\n> Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n> Description : ${anu.description}\n> Homepage : ${anu.homepage}\n> Keywords : ${anu.keywords}\n> Author : ${anu.author.name}\n> License : ${anu.license}\n> Readme : ${anu.readme}`)
                    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Exemplo : ${prefix + command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
                break

            case 'tiktok4': { //DOWNLOADER
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'


                //m.reply(mess.wait)
                hx.ttdownloader(`${text}`).then(async (data) => {
                    let buttons = [
                        { buttonId: `${prefix}tiktokmp3 ${text}`, buttonText: { displayText: 'AUDIO' }, type: 1 }
                    ]
                    let buttonMessage = {
                        video: { url: data.nowm },
                        caption: `${util.format(data)}`,
                        footer: 'Please Select Below',
                        buttons: buttons,
                        headerType: 5
                    }
                    TokiBotAq.sendMessage(m.chat, buttonMessage, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
                break
            case 'tiktok2': {
                if (!text) throw `Use Exemplo ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'


                anu = await fetchJson(`https://violetics.pw/api/downloader/tiktok?apikey=df7d-425a-3bc8&url=${text}`)
                let listmn = `*▊▊▊TIKTOK DL▊▊▊*\n\n*Title:* ${anu.result.title}\n*Author:* ${anu.result.id}\n*Url:* ${anu.result.url}`
                buf = await getBuffer(anu.result.thumb)
                buf2 = await getBuffer(anu.result.link_dl2)
                let message = await prepareWAMessageMedia({ video: buf2, gifPlayback: false, jpegThumbnail: buf }, { upload: TokiBotAq.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            videoMessage: message.videoMessage,
                            hydratedContentText: listmn,
                            hydratedFooterText: `${botname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SE INSCREVA',
                                    url: 'https://youtube.com/c/TioTomiokaOfc'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: 'https://github.com/SilasJr-dev/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'PING',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'DONO',
                                    id: 'dono'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'DONATE',
                                    id: 'donadi'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                TokiBotAq.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
                break
            case 'tiktok': case 'tiktoknowm': case 'tiktokwm': case 'tt': case 'ttnowm': case 'ttwm': {

                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'


                let bocil = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
                bocil.tiktokdlv3(`${text}`).then(async (video) => {
                    var hadi = randomNomor(100)
                    var hadie = randomNomor(200)
                    var hadir = randomNomor(300)
                    var memek = randomNomor(1000)
                    let caption = `
                  *▊▊▊TIKTOK DL▊▊▊*\n\n*AUTHOR* : DRIPS\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*QUALITY* : nowatermark\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKE* : ${hadie}\n*SOURCE* : ${text}\n\n\n*TOKI BOT*`
                    buf = await getBuffer(video.author.avatar)
                    TokiBotAq.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail: buf, caption: `${caption}` }, { quoted: m })
                    TokiBotAq.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail: buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
                break
            case 'tiktokk': case 'ttk': {
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'


                let bocil = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
                bocil.tiktokdlv3(`${text}`).then(async (video) => {
                    var hadi = randomNomor(100)
                    var hadie = randomNomor(200)
                    var hadir = randomNomor(300)
                    var memek = randomNomor(1000)
                    let caption = `*▊▊▊TIKTOK DL▊▊▊*\n\n*AUTHOR* : DRIPS\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKES* : ${hadie}\n*SOURCE* : ${text}\n\n\n*TOKI BOT*`
                    buf = await getBuffer(video.author.avatar)
                    TokiBotAq.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail: buf, caption: `${caption}` }, { quoted: m })
                    TokiBotAq.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail: buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
                break
            case 'tt3': case 'tiktok3': {
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'


                let bocil = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
                bocil.tiktokdlv3(`${text}`).then(async (video) => {
                    var hadi = randomNomor(100)
                    var hadie = randomNomor(200)
                    var hadir = randomNomor(300)
                    var memek = randomNomor(1000)
                    let caption = `**▊▊▊TIKTOK DL▊▊▊**\n\n*⬤AUTHOR* : DRIPS\n*⬤NICKNAME* : ${video.author.nickname}\n*⬤CAPTION* : ${video.description}\n*⬤COMMENTS* : ${memek}\n*⬤CREATE* ${hadir} Ago\n*⬤LIKES* : ${hadi}\n*⬤DISLIKES* : ${hadie}\n*⬤ SOURCE* : ${text}`
                    buf = await getBuffer(video.author.avatar)
                    let message = await prepareWAMessageMedia({ image: buf, jpegThumbnail: buf }, { upload: TokiBotAq.waUploadToServer })
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: {
                            hydratedTemplate: {
                                imageMessage: message.imageMessage,
                                hydratedContentText: caption,
                                hydratedFooterText: `${botname}`,
                                hydratedButtons: [{
                                    urlButton: {
                                        displayText: 'SOURCE',
                                        url: `${text}`
                                    }
                                }, {
                                    urlButton: {
                                        displayText: 'GITHUB',
                                        url: 'https://github.com/SilasJr-dev/'
                                    }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'WATERMARK',
                                        id: `ttwm ${text}`
                                    }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'NOWATERMARK',
                                        id: `tiktoknowm ${text}`
                                    }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'AUDIO',
                                        id: `tiktokmp3 ${text}`
                                    }
                                }]
                            }
                        }
                    }), { userJid: m.chat, quoted: m })
                    TokiBotAq.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
                break
            case 'tiktokmp3': case 'tiktokaudio': {

                if (!text) throw '*Enter Link Tiktok!*'
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
                let got = require('./lib/tiktok.js')


                got.tiktokDown(`${text}`).then(async (data) => {
                    TokiBotAq.sendMessage(m.chat, { audio: { url: data.result.nowatermark }, mimetype: 'audio/mp4' }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send audio*`)
                })
            }
                break
            case 'ttmp3': {
                if (!text) throw `*Enter link tiktok Exemplo ${prefix + command} https://vt.tiktok.com/zgjbtcsdq/`
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
                let get = require('./lib/scraper.js')


                get.aiovideodl(`${text}`).then(async (res) => {
                    var anu = await getBuffer(res.medias[2].url)
                    TokiBotAq.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg' }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
                break
            case 'ig': case 'igdl': case 'instagram': {



                if (!text) throw '*Please Enter Instagarm Link*'

                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'





                let urlnya = text

                hx.igdl(urlnya)

                    .then(async (result) => {


                        var halo = 0


                        TokiBotAq.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Jumlah Media :* ${result.medias.length}\n*⬤ Url :* ${text}\n\n*TOKI BOT*` }, { quoted: m })


                        for (let i of result.medias) {


                            if (i.url.includes('mp4')) {


                                let link = await getBuffer(i.url)

                                TokiBotAq.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })

                            } else {


                                let link = await getBuffer(i.url)

                                TokiBotAq.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })


                            }


                        }

                    }).catch((err) => m.reply(`*Sorry Instagram Instagram ${text} Not found*`))

            }

                break
            case 'ig3': case 'igdl3': case 'instagram3': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'


                let bicil = require('@bochilteam/scraper')
                let urlnya = text
                bicil.instagramdlv4(urlnya)
                    .then(async (result) => {
                        for (let i of result) {
                            if (i.url.includes('mp4')) {
                                let link = await getBuffer(i.url)
                                TokiBotAq.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m })
                            } else {
                                let link = await getBuffer(i.url)
                                TokiBotAq.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m })
                            }
                        }
                    }).catch((err) => m.reply(`*Failed When Downloading And Sending Media*`))
            }
                break
            case 'ig2': case 'igdl2': case 'instagram2': {
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'


                anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)
                var oi = 1
                for (let i of anu.medias) {
                    var txt = `*▊▊▊INSTA DL▊▊▊*\n\n*Username:* ${anu.user.username}\n*Fullname:* ${anu.user.fullName}\n*Followers:* ${anu.user.followers}\n*Type:* ${anu.medias[0].type}\n*Tipe:* ${anu.medias[0].fileType}\n*ID:* ${anu.user.id}\n*Jumlah Media:* ${oi++}\n*Url:* ${text}\n\n*TOKI BOT*`
                    var buf = await getBuffer(anu.user.profilePicUrl)
                    TokiBotAq.sendMessage(m.chat, { image: { url: anu.user.profilePicUrl }, jpegThumbnail: buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply('error'))
                    TokiBotAq.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail: buf, caption: `${botname}` }, { quoted: m }).catch((err) => m.reply('error'))
                }
            }
                break
            case 'igimage': {
                if (!text) throw '*Enter a Link Query!*'
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'


                instagramdlv3(`${text}`).then(async (data) => {
                    for (let f of data) {
                        TokiBotAq.sendMedia(m.chat, f.url, '', `Download Url Instagram From ${text}`, m)
                    }
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
                break
            case 'igs': case 'igstory': case 'instagramstory': {



                if (!text) throw 'Type  Username!'





                let urlnya = text

                hx.igstory(urlnya)

                    .then(async (result) => {

                        var halo = 0

                        TokiBotAq.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Media :* ${result.medias.length}\n*⬤ Bio :* ${result.user.biography}\n\n*TOKI BOT*` }, { quoted: m })

                        for (let i of result.medias) {

                            if (i.url.includes('mp4')) {

                                let link = await getBuffer(i.url)

                                TokiBotAq.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })

                            } else {

                                let link = await getBuffer(i.url)

                                TokiBotAq.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })

                            }

                        }

                    }).catch((err) => m.reply(`*Sorry Story Instagram ${text} not found*`))

            }

                break
            case 'igs2': case 'igstory2': case 'instagramstory2': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                //   if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'


                anu = await fetchJson(`https://api.akuari.my.id/downloader/igStory?username=${text}`)
                for (let i of anu) {
                    tummb = await getBuffer(i.preview)
                    TokiBotAq.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail: tummb, caption: `*${botname}*` }, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
                }
            }
                break
            case 'igs3': case 'igstory3': case 'instagramstory3': {

                if (!text) throw 'Enter Username!'


                let bicil = require('@bochilteam/scraper')
                let urlnya = text
                bicil.instagramStoryv2(urlnya)
                    .then(async (result) => {
                        var halo = 1
                        TokiBotAq.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTA DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Jumlah Media :* ${halo++}\n*⬤ Bio :* ${result.user.biography}\n\n*TOKI BOT*` }, { quoted: m })
                        for (let i of result.results) {
                            if (i.url.includes('mp4')) {
                                let link = await getBuffer(i.sourceUrl)
                                TokiBotAq.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })
                            } else {
                                let link = await getBuffer(i.url)
                                TokiBotAq.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })
                            }
                        }
                    }).catch((err) => m.reply(`*Sorry Story Instagram ${text} Tnot found*`))
            }
                break
            case 'igtv': {
                if (!text) throw '*Enter a Link Query!*'
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'


                instagramdlv3(`${text}`).then(async (data) => {
                    var buf = await getBuffer(data[0].thumbnail)
                    TokiBotAq.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail: buf, caption: `${botname}` }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
                break
            case 'joox': case 'jooxdl': {

                if (!text) throw '*Enter a Query Title*'


                let anu = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${setting.lolkey}&query=${text}`)
                let msg = `*▊▊▊JOOX DL▊▊▊*\n\n*Title :* ${anu.result.info.song}\n*Album :* ${anu.result.info.album}\n*Singer :* ${anu.result.info.song}\n*Publish :* ${anu.result.info.date}\n*Link :* ${anu.result.audio[0].link}\n\n*TOKI BOT*`
                buf = await getBuffer(anu.result.image)
                TokiBotAq.sendMessage(m.chat, { image: { url: anu.result.image }, jpegThumbnail: buf, caption: `${msg}` }, { quoted: m }).catch((err) => m.reply('*Sorry An error occurred*'))
                TokiBotAq.sendMessage(m.chat, { audio: { url: anu.result.audio[0].link }, mimetype: 'audio/mpeg' }, { quoted: m }).catch((err) => m.reply('*Sorry An error occurred*'))
            }
                break
            case 'soundcloud': case 'scdl': {
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('soundcloud.com')) throw '*The link you provided is not valid*'


                xa.SoundCloud(`${text}`).then(async (data) => {
                    let txt = `*▊▊▊SOUNDCLOUD DL▊▊▊*\n\n`
                    txt += `*⬤Title :* ${data.title}\n`
                    txt += `*⬤Quality :* ${data.medias[0].quality}\n`
                    txt += `*⬤Type :* ${data.medias[0].extension}\n`
                    txt += `*⬤Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*⬤Url Source :* ${data.url}\n\n`
                    txt += `*TOKI BOT*`
                    buf = await getBuffer(data.thumbnail)
                    TokiBotAq.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail: buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply('link error'))
                    TokiBotAq.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mpeg', fileName: data.title + '.m4a' }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send audio*`)
                })
            }
                break
            case 'mediafire': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)            
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
                const baby1 = await mediafireDl(text)
                if (baby1[0].size.split('MB')[0] >= 100) return m.reply('*File Over Limit* ' + util.format(baby1))
                const result4 = `*▊▊▊MEDIAFIRE DL▊▊▊*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait Tokibot processing..._

*TOKI BOT*`
                m.reply(`${result4}`)
                TokiBotAq.sendMessage(m.chat, { document: { url: baby1[0].link }, fileName: baby1[0].nama, mimetype: baby1[0].mime }, { quoted: m }).catch((err) => m.reply('*Failed to download File*'))
            }
                break
            case 'savefrom': {



                if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} link url`)

                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
                let noh = require('@bochilteam/scraper')

                noh.savefrom(`${text}`).then(async (data) => {

                    let sections = []

                    for (let i of data.url) {

                        const list = {
                            title: `${i.type}`,

                            rows: [

                                {

                                    title: `Quality ${i.subname}`,

                                    rowId: `${prefix}get ${text}`,

                                    description: `${data.hosting}`

                                },

                            ]

                        }

                        sections.push(list)

                    }

                    const sendm = TokiBotAq.sendMessage(

                        m.chat,

                        {

                            text: `${data.meta.title} *Here is the list of videos, click the button below to choose, here is the list of videos, click the button below to choose*`,

                            footer: `©TOKI BOT INC 2022`,

                            title: "**▊▊▊TOPEE▊▊▊**",

                            buttonText: "CLICK HERE",

                            sections

                        }, { quoted: m })

                }).catch((err) => {

                    m.reply(`*Sorry An Error Occurred*`)

                })

            }

                break

            case 'get': {



                if (!text) throw 'Enter a Link'





                let bicil = require('@bochilteam/scraper')

                let urlnya = text

                bicil.savefrom(urlnya)

                    .then(async (result) => {

                        for (let i of result.url) {

                            if (i.url.includes('mp4')) {

                                let link = await getBuffer(i.url)

                                TokiBotAq.sendMessage(m.chat, { video: link, caption: `*quality ${i.subname}*` }, { quoted: m })

                            }

                        }

                    }).catch((err) => m.reply(`*Sorry Future Error*`))

            }

                break
            case 'linkedin': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Enter the link!\nExemplo : .linkedin https://www.linkedin.com/posts/franklintempletonindia_reachforbetter-activity-6575703402104348672-SBuX'
                if (!isUrl(args[0]) && !args[0].includes('https://www.linkedin.com')) throw '*The link you provided is not valid*'


                anu = await fetchJson(`https://xteam.xyz/dl/linkedin?url=${text}&APIKEY=${setting.riy}`)
                TokiBotAq.sendMessage(m.chat, { video: await getBuffer(anu.result.resurl), mimetype: 'video/mp4' }, { quoted: m }).catch((err) => m.reply('Failed to download File'))
            }
                break
            case 'smule': {

                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)

                if (!text) throw 'Enter the link!\nExemplo : .smule https://www.smule.com/p/1998769355_3504039030'

                if (!isUrl(args[0]) && !args[0].includes('https://www.smule.com')) throw '*The link you provided is not valid*'





                anu = await fetchJson(`https://xteam.xyz/dl/smule?url=${text}&APIKEY=${setting.riy}`)

                TokiBotAq.sendMessage(m.chat, { video: await getBuffer(anu.result[0]), mimetype: 'video/mp4' }, { quoted: m }).catch((err) => m.reply('*Failed to download File*'))

            }

                break
            case 'vimeo': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Enter link Exemplo : .vimeo https://vimeo.com/384611645'
                if (!isUrl(args[0]) && !args[0].includes('vimeo.com')) throw '*The link you provided is not valid*'


                anu = await fetchJson(`https://xteam.xyz/dl/vimeo?url=${text}&APIKEY=${setting.riy}`)
                TokiBotAq.sendMessage(m.chat, { video: await getBuffer(anu.result.hd.url), mimetype: 'video/mp4' }, { quoted: m }).catch((err) => m.reply('*Failed to download File*'))
            }
                break
            case 'zippyshare': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) throw '*The link you provided is not valid*'


                anu = await fetchJson(`https://violetics.pw/api/downloader/zippyshare?apikey=df7d-425a-3bc8&url=${text}`)
                m.reply(`*${util.format(anu)}*`)
                linkyke = await getBuffer(anu.result.dlink)
                TokiBotAq.sendMessage(m.chat, { document: linkyke, mimetype: 'application/zip', fileName: `${anu.result.filename}` }, { quoted: m }).catch((err) => m.reply('*Failed to download File*'))
            }
                break
            case 'googledrive': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('googledrive.com')) throw '*The link you provided is not valid*'


                anu = await fetchJson(`https://xteam.xyz/dl/drive?url=${text}&APIKEY=${setting.riy}`)
                m.reply(`${util.format(anu)}`)
                TokiBotAq.sendMessage(m.chat, { document: await getBuffer(anu.result.server2), mimetype: 'application/zip', fileName: `${anu.result.title}` }, { quoted: m }).catch((err) => m.reply('*Failed to download File*'))
            }
                break
            case 'imagetopdf': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`


                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let medi = await TokiBotAq.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(medi)
                hayo = `https://xteam.xyz/imagetopdf?url=${anu}&APIKEY=${setting.riy}`
                TokiBotAq.sendMessage(m.chat, { document: await getBuffer(hayo), mimetype: 'application/pdf', fileName: `${botname}.pdf` }, { quoted: m }).catch((err) => m.reply('*Failed to download File*'))
            }
                break
            case 'twitter': case 'td': case 'twitterdl': {
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'


                xa.Twitter(`${text}`).then(async (data) => {
                    let txt = `*▊▊▊TWITTER DL▊▊▊*\n\n`
                    txt += `*⬤TITLE :* ${data.title}\n`
                    txt += `*⬤QUALITY :* ${data.medias[1].quality}\n`
                    txt += `*⬤TYPE :* ${data.medias[1].extension}\n`
                    txt += `*⬤SIZE :* ${data.medias[1].formattedSize}\n`
                    txt += `*⬤DURATION :* ${data.medias.length}\n`
                    txt += `*⬤URL :* ${data.url}\n\n`
                    txt += `*TOKI BOT*`
                    buf = await getBuffer(data.thumbnail)
                    TokiBotAq.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail: buf, caption: `${txt}` }, { quoted: m })
                    for (let i of data.medias) {
                        TokiBotAq.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail: buf, caption: `*Downloading From ${text}*` }, { quoted: m })
                    }
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
                break
            case 'twitter2': case 'td2': case 'twitterdl2': {
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'


                xa.Twitter(`${text}`).then(async (data) => {
                    for (let x of data.medias) {
                        let txt = `*▊▊▊TWITTER DL▊▊▊*n\n`
                        txt += `*⬤TITLE :* ${data.title}\n`
                        txt += `*⬤QUALITY :* ${x.quality}\n`
                        txt += `*⬤TYPE:* ${x.extension}\n`
                        txt += `*⬤SIZE:* ${x.formattedSize}\n`
                        txt += `*⬤URL :* ${data.url}\n\n`
                        txt += `*Hi ${pushname}The bot is doing great job dont forget to subcribe*`
                        buf = await getBuffer(data.thumbnail)
                        TokiBotAq.sendMessage(m.chat, { video: { url: x.url }, jpegThumbnail: buf, caption: `${txt}` }, { quoted: m })
                    }
                }).catch((err) => m.reply(`Sorry the faiture is error`))
            }
                break

            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'


                xa.Twitter(`${text}`).then(async (data) => {
                    TokiBotAq.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4' }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send audio*`)
                })
            }
                break
            case 'fbdl': case 'fb': case 'facebook': case 'pesbuk': {

                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'


                let bocil = require('@bochilteam/scraper')
                bocil.facebookdlv2(`${text}`).then(async (data) => {

                    let txt = `*▊▊▊FB DOWNLOAD▊▊▊*\n\n`

                    txt += `*⬤TITLE :* ${data.title}\n`

                    txt += `*⬤QUALITY :* ${data.result[0].quality}\n`

                    txt += `*⬤DESCRIPTION :* ${data.description}\n`

                    txt += `*⬤ID :* TOKI BOT\n`

                    txt += `*⬤URL :* ${text}\n\n`

                    txt += `*TOKI BOT*`

                    buf = await getBuffer(data.thumbnail)

                    TokiBotAq.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail: buf, caption: `${txt}` }, { quoted: m })

                    for (let i of data.result) {

                        TokiBotAq.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail: buf, caption: `*⬤ Quality :* ${i.quality}` }, { quoted: m })

                    }

                }).catch((err) => {

                    m.reply(`*Failed When Downloading Media and Sending Files*`)

                })

            }

                break
            case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {

                if (!text) return m.reply(`Use${prefix + command} enter facebook link`)
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'


                let noh = require('@bochilteam/scraper')
                noh.savefrom(`${text}`).then(async (anu) => {
                    TokiBotAq.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to link to audio*`)
                })
            }
                break
            case 'fb6': {

                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'


                xa.Facebook(`${text}`).then(async (data) => {
                    let txt = `*▊▊▊FB6 DOWNLOAD▊▊▊*\n\n`
                    txt += `*⬤TITLE :* ${data.title}\n`
                    txt += `*⬤QUALITY :* ${data.medias[1].quality}\n`
                    txt += `*:⬤TYPE* ${data.medias[1].extension}\n`
                    txt += `*⬤SIZE :* ${data.medias[1].formattedSize}\n`
                    txt += `*⬤URL :* ${data.url}\n\n`
                    txt += `*TOKI BOT*`
                    buf = await getBuffer(data.thumbnail)
                    TokiBotAq.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail: buf, caption: `${txt}` }, { quoted: m })
                    TokiBotAq.sendMessage(m.chat, { video: { url: data.medias[1].url }, jpegThumbnail: buf, caption: `*⬤ Quality :* ${data.medias[1].quality}` }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed When Downloading Media and Sending Files*`)
                })
            }
                break
            case 'youtube': case 'ytdl': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'

                if (isLimit < 10) return m.reply(mess.endLimit)
                kurangLimit(m.sender, 10)
                m.reply(`10 limit terpakai`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)
                if (anu.filesize_video >= 100000) return m.reply('*File Over Limit* ' + util.format(anu))
                tummb = await getBuffer(anu.thumb)
                audio = await getBuffer(anu.audio)
                TokiBotAq.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}` }, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
                TokiBotAq.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail: tummb, caption: `${util.format(anu)}` }, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
            }
                break
            case 'igreal': case 'instagramreal': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'


                anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)
                tummb = await getBuffer(anu.medias[0].preview)
                TokiBotAq.sendMessage(m.chat, { video: { url: anu.medias[0].url }, jpegThumbnail: tummb, caption: `${util.format(anu)}` }, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
            }
                break
            case 'fb3': case 'facebook3': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'


                anu = await fetchJson(`https://api-riychdwayne.herokuapp.com/api/downloader/facebook?url=${text}&apikey=${setting.riy}`)
                tummb = await getBuffer(anu.thumbnail)
                TokiBotAq.sendMessage(m.chat, { video: { url: anu.medias }, jpegThumbnail: tummb, caption: `*📽️ FACEBOOK DOWNLOADER*\n\n*Name* : ${anu.title}\n*Filesize* : ${anu.medias[1].formattedSize}\n*Quality* : ${anu.medias[1].quality}\n*Ext* : ${anu.medias[1].extension}\n` }, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
            }
                break
            case 'fb2': case 'facebook2': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'


                anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=${setting.violkey}&url=${text}`)
                tummb = await getBuffer('https://telegra.ph/file/9789a09c964cee5597a05.jpg')
                TokiBotAq.sendMessage(m.chat, { video: { url: anu.result.url[0].url }, jpegThumbnail: tummb, caption: `*📽️ FACEBOOK DOWNLOADER*\n\n*Name* : ${anu.result.meta.title}\n*Quality* : ${anu.result.url[0].subname}\n*Ext* : ${anu.result.url[0].ext}\n` }, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
            }
                break
            case 'pindl': case 'pinterestdl': {

                if (!text) return m.reply(`Use${prefix + command}put in link pin`)
                if (!isUrl(args[0]) && !args[0].includes('pinterest.com')) throw '*The link you provided is not valid*'


                let noh = require('./lib/lol.js')
                noh.pin(`${text}`).then(async (data) => {
                    TokiBotAq.sendMessage(m.chat, { video: { url: data.data.url }, caption: `${data.data.file}` }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*${text}  TOKI BOT*`)
                })
            }
                break
            case 'translate': case 'terjemahan': case 'tr': {
                if (!args.join(" ")) return m.reply("Text?")


                tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
                Infoo = tes.info
                Detek = tes.translate
                m.reply(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
            }
                break
            case 'git': case 'gitclone':
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                       
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                if (!args[0]) throw 'link github  Exemplo: https://github.com/SilasJr-dev/'
                if (!regex1.test(args[0])) throw 'link!'


                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                // 'attachment; filenameq=ZidniGanz.zip'
                m.reply(`*Please wait, sending repository..*`)
                TokiBotAq.sendMessage(m.chat, { document: { url: url }, fileName: filename + '.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply('*Sorry, the github link you provided is private, and cant be made into a file*'))
                break
            case 'umma': case 'ummadl': {
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`


                let { umma } = require('./lib/scraper2')
                let anu = await umma(isUrl(text)[0])
                if (anu.type == 'video') {
                    let buttons = [
                        { buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: { displayText: 'SONG' }, type: 1 },
                        { buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: { displayText: 'VIDEO' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: { url: anu.author.profilePic },
                        caption: `
*TITLE :* ${anu.title}
*AUTHOR :* ${anu.author.name}
*LIKE :* ${anu.like}
*CAPTION :* ${anu.caption}
*URL :* ${anu.media[0]}
*To download media, please click one of the buttons below or enter the ytmp3/ytmp4 command with the url above*
`,
                        footer: TokiBotAq.user.name,
                        buttons,
                        headerType: 4
                    }
                    TokiBotAq.sendMessage(m.chat, buttonMessage, { quoted: m })
                } else if (anu.type == 'image') {
                    anu.media.map(async (url) => {
                        TokiBotAq.sendMessage(m.chat, { image: { url }, caption: `> Title : ${anu.title}\n> Author : ${anu.author.name}\n> Like : ${anu.like}\n> Caption : ${anu.caption}` }, { quoted: m })
                    })
                }
            }
                break

            //BY ZIIM BOT INC

            case 'resepmasakan2': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Nasi padang`
                anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${text}&apikey=${setting.HunterApi}`)
                hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n━━━━━━━━━━━━━━━━━━━━\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
                TokiBotAq.sendImage(m.chat, anu.results.thumb, `${hasilresep}`, m).catch((err) => m.reply('*Sorry, the feature is in error*'))
            }
                break
            case 'resep': case 'resepmasakan': {
                if (!text) return m.reply(`Use${prefix + command} nama_makanan`)
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep-search?text=${text}`)
                let sections = []
                for (let i of anu.results) {
                    const list = {
                        title: `${i.title}`,
                        rows: [
                            {
                                title: `${i.key}\n`,
                                rowId: `${prefix}makanan ${text}`,
                                description: `${i.difficulty}\n${i.times}\n${i.serving}`
                            },
                        ]
                    }
                    sections.push(list)
                }
                const sendm = TokiBotAq.sendMessage(
                    m.chat,
                    {
                        text: `*Results of*  ${text}`,
                        footer: botname,
                        title: "[ Recipes ]",
                        buttonText: "CLICK HERE",
                        sections
                    }, { quoted: m })
            }
                break
            case 'makanan': {
                if (!text) throw 'masakan aap?'


                anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep-search?text=${text}`)
                buf = await getBuffer(anu.results[1].thumb)
                TokiBotAq.sendMessage(m.chat, { image: { url: anu.results[3].thumb }, jpegThumbnail: buf, caption: `${util.format(anu)}` }, { quoted: m }).catch((err) => m.reply('error'))
            }
                break

            case 'cariquotes': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} cinta`
                anu = await fetchJson(`https://api.akuari.my.id/search/quotes?query=${text}`)
                ini_txt = '*Cari Quotes*\n\n'
                for (let i of anu.result.data) {
                    ini_txt += `*Name* : ${i.author}\n`
                    ini_txt += `*Bio* : ${i.bio}\n`
                    ini_txt += `*Quotes* : ${i.quote}`
                }
                m.reply(`${ini_txt}`)
            }
                break

            case 'apk': case 'apkmod': case 'apkdl': {

                if (!text) return m.reply(`Use${prefix + command} vpn`)
                let noh = require('./lib/myfunc2')
                noh.rexdl(`${text}`).then(async (data) => {
                    let sections = []
                    for (let i of data) {
                        const list = {
                            title: `${i.judul}`,
                            rows: [
                                {
                                    title: `${i.judul}`,
                                    rowId: `${prefix}donlod ${i.link}`,
                                    description: `CATEGORY: ${i.kategori}\nPUBLISH: ${i.upload_date}\nINFORMATION: ${i.deskripsi}`
                                },
                            ]
                        }
                        sections.push(list)
                    }
                    const sendm = TokiBotAq.sendMessage(
                        m.chat,
                        {
                            text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
                            footer: `© TOKI BOT`,
                            title: "*▊▊▊APK DOWNLOAD▊▊▊*",
                            buttonText: "CLICK HERE",
                            sections
                        }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*${text} Not found*`)
                })
            }
                break
            case 'donlod': {
                let rex = require('./lib/ApkDown.js')


                if (!text) return m.reply(`Use${prefix + command} whatsapp`)
                if (!isUrl(args[0]) && !args[0].includes('https://rexdl.com/'))



                    rex.ApkDown(`${text}`).then(async (anu) => {
                        if (anu[0].size.split('MB')[0] >= 150) return m.reply('*File Over Limit* ' + util.format(anu))
                        for (let i of anu) {
                            linkye = `*▊▊▊APK DOWNLOAD▊▊▊*\n\n*TITLE:* ${i.title}\n*UPDATE:* ${i.up}\n*VERSION:* ${i.vers}\n*FILESIZE:* ${i.size}\n*URL:* \n*DESCRIPTION:* ${i.desc}\n\n*TOKI BOT*`
                            TokiBotAq.sendMessage(m.chat, { image: await getBuffer(i.thumb), jpegThumbnail: await getBuffer(i.thumb), caption: `${linkye}` }, { quoted: m })
                            TokiBotAq.sendMessage(m.chat, { document: await getBuffer(i.link), mimetype: `application/vnd.android.package-archive`, fileName: `${i.title}` }, { quoted: m })
                        }
                    }).catch((err) => {
                        m.reply(`*Failed When Downloading Media and Sending Files*`)
                    })
            }
                break
            case 'tagme': {
                TokiBotAq.sendMessage(m.chat, { text: `@${m.sender.split("@")[0]}`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
            }

                break
            case 'wiki': case 'wikipedia': {
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Tokibot-v3`


                anu = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${setting.lolkey}&query=${text}`)
                m.reply(`*Wikipedia*\n\n${anu.result}`)
            }
                break
            case 'covid': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                ngtod = await fetchJson(`https://api.lolhuman.xyz/api/corona/zimbabwe?apikey=${setting.lolkey}`)
                m.reply(`*Total corona global*\n*Positivo* : ${ngtod.result.positif}\n*Curado* : ${ngtod.result.sembuh}\n*Tratado* : ${ngtod.result.dirawat}\n*Mortos* : ${ngtod.result.meninggal}`)
            }
                break
            case 'covidglobal': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                      
                ngtod = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${setting.lolkey}`)
                m.reply(`*Total corona global*\n*Positivo* : ${ngtod.result.positif}\n*Curado* : ${ngtod.result.sembuh}\n*Tratado* : ${ngtod.result.dirawat}\n*Mortos* : ${ngtod.result.meninggal}`)
            }
                break
            case 'jadwaltv': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                      
                ngtod = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${setting.lolkey}`)
                m.reply(`*Jadwal Tv Hari Ini*\n*ANTV* : ${ngtod.result.antv}\n*GTV* : ${ngtod.result.gtv}\n*INDOSIAR* : ${ngtod.result.indosiar}\n*KOMPASTV* : ${ngtod.result.kompastv}\n*INEWSTV* : ${ngtod.result.inewstv}\n*MNCTV* : ${ngtod.result.mnctv}\*RCTI* : ${ngtod.result.rcti}\n*SCTV* : ${ngtod.result.sctv}\n*TRANSTV* : ${ngtod.result.transtv}\n*TVRI* : ${ngtod.result.tvri}\n*TRANS7* : ${ngtod.result.trans7}\n*NETTV* : ${ngtod.result.nettv}`)
            }
                break
            case 'cuaca': {
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} Jawatimur`


                anu = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${text}?apikey=${setting.lolkey}`)
                m.reply(`*Tempat* : ${anu.result.tempat}\n*Cuaca* : ${anu.result.cuaca}\n*Angin* ${anu.result.angin}\n*Kelembapan* : ${anu.result.kelembapan}\n*Suhu* ${anu.result.suhu}\n*Permukaan_Laut* : ${anu.result.permukaan_laut}\n*Latitude* : ${anu.result.latitude}\n*Longitude* : ${anu.result.longitude}`)
            }
                break
            case 'ringtone': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} black rover`
                let { ringtone } = require('./lib/scraper3')
                let anu = await ringtone(text)
                let result = anu[Math.floor(Math.random() * anu.length)]
                TokiBotAq.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
            }
                break
            case 'iqra': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                oh = `Exemplo : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
                if (!text) throw oh
                yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                TokiBotAq.sendMessage(m.chat, { document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf` }, { quoted: m }).catch((err) => m.reply(oh))
            }
                break
            case 'juzamma': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (args[0] === 'pdf') {
                    m.reply(mess.wait)
                    TokiBotAq.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf' }, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf' }, { quoted: m })
                } else if (args[0] === 'docx') {
                    m.reply(mess.wait)
                    TokiBotAq.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx' }, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx' }, { quoted: m })
                } else if (args[0] === 'pptx') {
                    m.reply(mess.wait)
                    TokiBotAq.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx' }, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx' }, { quoted: m })
                } else if (args[0] === 'xlsx') {
                    m.reply(mess.wait)
                    TokiBotAq.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx' }, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx' }, { quoted: m })
                } else {
                    m.reply(`Mau format apa ? Exemplo : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
                }
            }
                break
            case 'hadis': case 'hadist': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
                if (!args[1]) throw `How many hadiths? \ N \ nExemplo:\n${prefix + command} muslim 1`
                try {
                    let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
                    let { number, arab, id } = res.find(v => v.number == args[1])
                    m.reply(`No. ${number}

${arab}

${id}`)
                } catch (e) {
                    m.reply(`Hadith not found !`)
                }
            }
                break
            case 'alquran2': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Which Surah Number You Want To Find\nExemplo : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`
                urls = `https://api.lolhuman.xyz/api/quran/${text}?apikey=${setting.lolkey}`
                quran = await fetchJson(urls)
                result = quran.result
                ayat = result.ayat
                ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                for (var x of ayat) {
                    arab = x.arab
                    nomor = x.ayat
                    latin = x.latin
                    indo = x.indonesia
                    ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                }
                ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                m.reply(ini_txt)
            }
                break

            case 'alquranaudio': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Which Surah Number You Want To Find\nExemplo : ${prefix + command} 18 or ${prefix + command} 18/10`
                m.reply('Sabar Sedang Proses...')
                ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=${setting.lolkey}`)
                TokiBotAq.sendMessage(m.chat, { audio: ini_buffer, mimetype: 'audio/mpeg', fileName: `mp3` }, { quoted: m }).catch((err) => m.reply('*error while sending the audio*'))
            }
                break

            case 'asmaulhusna': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${setting.lolkey}`)
                get_result = get_result.result
                txt_nya = `💌 No : ${get_result.index}\n`
                txt_nya += `📖 Latin: ${get_result.latin}\n`
                txt_nya += `🌏 Arab : ${get_result.ar}\n`
                txt_nya += `🌏 Indonesia : ${get_result.id}\n`
                txt_nya += `🌏 English : ${get_result.en}`
                m.reply(txt_nya)
            }
                break

            case 'kisahnabi': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`
                query = args.join(" ")
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${text}?apikey=${setting.lolkey}`)
                get_result = get_result.result
                txt_nya = `💌 Name : ${get_result.name}\n`
                txt_nya += `😇 Born : ${get_result.thn_kelahiran}\n`
                txt_nya += `😇 Age : ${get_result.age}\n`
                txt_nya += `🌏 Tempat : ${get_result.place}\n`
                txt_nya += `📖 Story : \n${get_result.story}`
                m.reply(txt_nya)
            }
                break

            case 'jadwalsholat': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Which City Name\nExemplo : ${prefix + command} Yogyakarta`
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=${setting.lolkey}`)
                get_result = get_result.result
                txt_nya = `🌏 Wilayah : ${get_result.wilayah}\n`
                txt_nya += `💌 Date : ${get_result.tanggal}\n`
                txt_nya += `🍴 Sahur : ${get_result.sahur}\n`
                txt_nya += `🎑 Imsak : ${get_result.imsak}\n`
                txt_nya += `🌅 Subuh : ${get_result.subuh}\n`
                txt_nya += `🌅 Terbit : ${get_result.terbit}\n`
                txt_nya += `🌝 Dhuha : ${get_result.dhuha}\n`
                txt_nya += `🌞 Dzuhur : ${get_result.dzuhur}\n`
                txt_nya += `🌇 Ashar : ${get_result.ashar}\n`
                txt_nya += `🌆 Maghrib : ${get_result.imsak}\n`
                txt_nya += `🌃 Isya : ${get_result.isya}`
                m.reply(txt_nya)
            }
                break
            case 'alquran': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!args[0]) throw `Use Exemplo:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
                if (!args[1]) throw `Use Exemplo:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                m.reply(txt)
                TokiBotAq.sendMessage(m.chat, { audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg' }, { quoted: m })
            }
                break
            case 'tafsirsurah': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!args[0]) throw `Use Exemplo:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                if (!args[1]) throw `Use Exemplo:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                m.reply(txt)
            }
                break



            case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)


                try {
                    let set
                    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                        m.reply(mess.wait)
                        let media = await TokiBotAq.downloadAndSaveMediaMessage(quoted)
                        let ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return m.reply(err)
                            let buff = fs.readFileSync(ran)
                            TokiBotAq.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
                            fs.unlinkSync(ran)
                        })
                    } else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                    m.reply(e)
                }
                break
            case 'runtime': {

                m.reply(`*━━ 「 ${botname} 」 ━━*\n\n*UPTIME* : _${runtime(process.uptime())}_`)

            }

                break
            //BY TOKI BOT

            case 'setcmd': {
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `*For What Commands?*`


                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
                break
            case 'delcmd': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
                break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                TokiBotAq.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], []) })
            }
                break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
                break
            case 'addmsg': {
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted) throw 'Reply Message u want to save to Database'
                if (!text) throw `Exemplo : ${prefix + command} name file`


                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' *has been registered in the message list*`
                msgs[text.toLowerCase()] = quoted.fakeObj
                m.reply(`*Successfully added message in message list as* '${text}'
    
Access with ${prefix}getmsg ${text}

*View list of Messages With* ${prefix}listmsg`)
            }
                break
            case 'getmsg': {
                //  //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`


                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in the message list`
                TokiBotAq.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
                break
            case 'listmsg': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
                let teks = '「 LIST DATABASE 」\n\n'
                for (let i of seplit) {
                    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
                }
                m.reply(teks)
            }
                break
            case 'delmsg': case 'deletemsg': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' *not listed in the message list*`)
                delete msgs[text.toLowerCase()]
                m.reply(`Successfully deleted'${text}' from the message list`)
            }
                break
            //BY TOKI BOT

            case 'bitly': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} https://github.com`
                // if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                anu = await fetchJson(`https://xteam.xyz/shorturl/bitly?url=${text}&APIKEY=${setting.riy}`)
                m.reply(`${anu.result.link}`)
            }
                break
            case 'gg': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} https://github.com`
                anu = await fetchJson(`https://xteam.xyz/shorturl/gg?url=${text}&nama=drips&APIKEY=${setting.riy}`)
                m.reply(`${anu.result}`)
            }
                break
            case 'sid': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} https://github.com`
                anu = await fetchJson(`https://xteam.xyz/shorturl/sid?url=${text}&nama=drips&APIKEY=${setting.riy}`)
                m.reply(`${anu.result}`)
            }
                break
            case 'cuttly': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Exemplo : ${prefix + command} https://github.com`
                anu = await fetchJson(`https://xteam.xyz/shorturl/cuttly?url=${text}&nama=drips&APIKEY=${setting.riy}`)
                m.reply(`${anu.result}`)
            }
                break
            case 'public': {
                if (!isCreator) throw mess.owner
                TokiBotAq.public = true
                m.reply('*Bot working as public now hope you will enjoy*')
            }
                break
            case 'self': {
                if (!isCreator) throw mess.owner
                TokiBotAq.public = false
                m.reply('*Bot working as private now hope you will enjoy*')
            }
                break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
*RESPOND SPEED* ${latensi.toFixed(4)} *SECONDS* \n ${oldd - neww} *MILLISECONDS*\n\n*RUNTIME* : ${runtime(process.uptime())}

💻 *INFO SERVERS*
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*NODEJS MEMORY USAGE*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `*Total CPU USAGE*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
                break
            case 'speedtest': {
                m.reply('Testing Speed...')
                let cp = require('child_process')
                let { promisify } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let { stdout, stderr } = o
                    if (stdout.trim()) m.reply(stdout)
                    if (stderr.trim()) m.reply(stderr)
                }
            }
                break
            case 'dono': case 'creator': {
                TokiBotAq.sendContact(m.chat, global.owner, m)
                const devsound = fs.readFileSync('./Tokibot/bot.mp3')
                TokiBotAq.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })

            }

                break
            case 'developer': case 'botdev': {
                TokiBotAq.sendContact(m.chat, global.botdev, m)
                const devsound = fs.readFileSync('./Tokibot/bot.mp3')
                TokiBotAq.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }


                break

            case 'bothelp': {
                TokiBotAq.sendContact(m.chat, global.bothelp, m)
                const devsound = fs.readFileSync('./Tokibot/bot.mp3')
                TokiBotAq.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }

                break

            case 'once': case 'toonce': { //by DRIPS
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) {
                    anu = await TokiBotAq.downloadAndSaveMediaMessage(quoted)
                    TokiBotAq.sendMessage(m.chat, { image: { url: anu }, viewOnce: true }, { quoted: m })
                } else if (/video/.test(mime)) {
                    anu = await TokiBotAq.downloadAndSaveMediaMessage(quoted)
                    TokiBotAq.sendMessage(m.chat, { video: { url: anu }, viewOnce: true }, { quoted: m })
                }
            }
                break
            case 'tinyurl': {
                m.reply(mess.wait)
                try {
                    anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
                    m.reply(`${anu.data}`)
                } catch (e) {
                    emror = String(e)
                    m.reply(`${e}`)
                }
            }
                break
            case 'searchgroups':
                if (!q) return m.reply(`Exemplo: ${prefix}searchgroups hacker`)
                mel.linkwa(q)
                    .then(result => {
                        let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
                        for (let i of result) {
                            res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
                        }
                        m.reply(res)
                    });
                break
            case 'tes': case 'test': case 'alive': case 'bot': case 'robot': case 'Tokibot': case 'drips': const _0x12fbc6 = _0xa830; function _0x5a3e() { const _0x1d2e27 = ['\x0a┃┃\x0a┃🏮𝗣𝗟𝗔𝗧𝗙𝗢𝗥𝗠\x20:\x20', 'DONOname', 'Message', '\x0a▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋\x0a▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋\x0a\x20+\x202\x207\x206\x20\x203\x20\x204\x20\x200\x20\x209\x20\x200\x202\x20\x200\x20\x203\x0a\x20', 'botname', '\x0a\x0a╭▬▬❪\x20*ZIM\x20BOT\x20INC*❫▬▬▬\x0a┃🏮\x20*LIBRARY:*\x20Baileys-md\x0a┃┃\x0a┃🏮𝗕𝗢𝗧𝗡𝗔𝗠𝗘:\x20', '1195460RyNtVa', '\x0a┃┃\x0a┃🏮𝗢𝗪𝗡𝗘𝗥𝗡𝗔𝗠𝗘:\x20', 'LIST', 'key', '6523785MZSaHJ', 'ZIM\x20BOT\x20IS\x20ALIVE', '5878536uJnrmT', '\x0a⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯\x0a\x0a*ZIMBOT\x20V3\x20WELCOMES\x20YOU*\x20', 'imageMessage', 'DONO', 'DONO', 'waUploadToServer', '467946xkzyQz', 'uptime', '2369958VHTLog', '377875gbZphs', 'platform', 'ping', 'listmenu', 'chat', '184vBAXES', 'SPEED', 'https://github.com/SilasJr-dev/', '\x0a┃┃\x0a┃🏮𝗡𝗨𝗠𝗕𝗘𝗥:\x20', 'SE INSCREVA', '3595404noXmcO', 'GITHUB', 'relayMessage']; _0x5a3e = function () { return _0x1d2e27; }; return _0x5a3e(); } (function (_0x2241bd, _0x3fade8) { const _0x5e1c6a = _0xa830, _0x587e66 = _0x2241bd(); while (!![]) { try { const _0x19d1c9 = parseInt(_0x5e1c6a(0x1aa)) / 0x1 + parseInt(_0x5e1c6a(0x1a9)) / 0x2 + -parseInt(_0x5e1c6a(0x1a7)) / 0x3 + parseInt(_0x5e1c6a(0x1b4)) / 0x4 + parseInt(_0x5e1c6a(0x19f)) / 0x5 + parseInt(_0x5e1c6a(0x1a1)) / 0x6 + parseInt(_0x5e1c6a(0x1bd)) / 0x7 * (-parseInt(_0x5e1c6a(0x1af)) / 0x8); if (_0x19d1c9 === _0x3fade8) break; else _0x587e66['push'](_0x587e66['shift']()); } catch (_0x5934cf) { _0x587e66['push'](_0x587e66['shift']()); } } }(_0x5a3e, 0xa1b18)); function _0xa830(_0x4b8bc2, _0x133f6d) { const _0x5a3e80 = _0x5a3e(); return _0xa830 = function (_0xa83019, _0x49a73f) { _0xa83019 = _0xa83019 - 0x19f; let _0x58eca5 = _0x5a3e80[_0xa83019]; return _0x58eca5; }, _0xa830(_0x4b8bc2, _0x133f6d); } { anu = _0x12fbc6(0x1a2) + pushname + _0x12fbc6(0x1bc) + global[_0x12fbc6(0x1bb)] + _0x12fbc6(0x1be) + global[_0x12fbc6(0x1b8)] + _0x12fbc6(0x1b2) + global[_0x12fbc6(0x1a5)] + _0x12fbc6(0x1b7) + os[_0x12fbc6(0x1ab)]() + '\x0a▙▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a🏮\x20*UPTIME:*\x20' + runtime(process[_0x12fbc6(0x1a8)]()) + _0x12fbc6(0x1ba), drips = await getBuffer(picak + _0x12fbc6(0x1a0)); let message = await prepareWAMessageMedia({ 'image': drips, 'jpegThumbnail': drips }, { 'upload': TokiBotAq[_0x12fbc6(0x1a6)] }); const template = generateWAMessageFromContent(m[_0x12fbc6(0x1ae)], proto[_0x12fbc6(0x1b9)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message[_0x12fbc6(0x1a3)], 'hydratedContentText': anu, 'hydratedFooterText': '' + global['botname'], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x12fbc6(0x1b3), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x12fbc6(0x1b5), 'url': _0x12fbc6(0x1b1) } }, { 'quickReplyButton': { 'displayText': _0x12fbc6(0x1b0), 'id': _0x12fbc6(0x1ac) } }, { 'quickReplyButton': { 'displayText': _0x12fbc6(0x1a4), 'id': _0x12fbc6(0x1a5) } }, { 'quickReplyButton': { 'displayText': _0x12fbc6(0x1bf), 'id': _0x12fbc6(0x1ad) } }] } } }), { 'userJid': m['chat'], 'quoted': m }); TokiBotAq[_0x12fbc6(0x1b6)](m[_0x12fbc6(0x1ae)], template['message'], { 'messageId': template[_0x12fbc6(0x1c0)]['id'] }); }

                break


            // Upload status

            //━━━━━━━━━━━━━━━━━━━━[ LIMIT & EXP ]━━━━━━━━━━━━━━━━━━━━

            case 'tfxp': case 'transfer': {
                if (!isCreator) throw mess.owner
                if (!text) return m.reply(`Use: ${prefix}tfxp @tag 10`)
                bal = text.split(" ")[1]
                const tag2 = `${text.split(" ")[0].replace("@", '')}@s.whatsapp.net`
                addBalance(tag2, nebal(bal), balance)
                m.reply(`SUCESS transfer Xp`)
            }
                break
            case 'wgheo': {
                var Liya = randomNomor(10)
                addLimit(m.sender, Liya)
                m.reply(`Congratulations you got as much Limit *${Liya}*`)
            }
                break


            case 'report': {
                if (!args.join(" ")) return m.reply(`Exemplo : \n- ${prefix + command} feature ig error min\n- ${prefix + command} this user is spamming min`)
                teks = `*▊▊▊REPORT FEATURE▊▊▊*`
                teks1 = `\n\nNUMBER : @${m.sender.split("@")[0]}\n*REPORT :* ${args.join(" ")}`
                teks2 = `\n\nSucces send to DONO`
                for (let i of dono) {
                    TokiBotAq.sendMessage(i + "@s.whatsapp.net", { text: teks + teks1, mentions: [m.sender] }, { quoted: m })
                }
                TokiBotAq.sendMessage(m.chat, { text: teks + teks2 + teks1, mentions: [m.sender] }, { quoted: m })
            }
                break
            case 'request': {
                if (!args.join(" ")) return m.reply(`Exemplo : ${prefix + command} min add a downloader feature`)
                teks = `*▊▊▊REQUEST FEATURE▊▊▊*`
                teks1 = `\n\n*NUMBER :* @${m.sender.split("@")[0]}\n*REQUEST :* ${args.join(" ")}`
                teks2 = `\n\nSucces send to DONO`
                for (let i of dono) {
                    TokiBotAq.sendMessage(i + "@s.whatsapp.net", { text: teks + teks1, mentions: [m.sender] }, { quoted: m })
                }
                TokiBotAq.sendMessage(m.chat, { text: teks + teks2 + teks1, mentions: [m.sender] }, { quoted: m })
            }
                break
            case 'domain': {

                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)

                if (!text) throw `Exemplo : ${prefix + command} nurutomo`


                anu = await fetchJson(`https://xteam.xyz/search/domainesia?q=${text}&APIKEY=${setting.riy}`)

                m.reply(`${util.format(anu)}`)

            }

                break
            //━━━━━━━━━━━━━━━━━━━━[ MENU MENU MENU ]━━━━━━━━━━━━━━━━━━━━
            case 'amino': {
                if (!text) throw `what are you looking for!, Exemplo : ${prefix + command} naruto`


                let anu = await fetchJson(`https://violetics.pw/api/search/amino?apikey=${setting.violkey}&query=${text}`)
                m.reply(`${util.format(anu)}`)
            }
                break
            case 'anime': {



                if (!text) return m.reply(`you are looking for what anime apa?\n\nExemplo ${prefix}anime naruto`)





                anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${text}`)

                let sections = []

                for (let i of anu.data) {

                    const list = {
                        title: `${i.title}`,

                        rows: [

                            {

                                title: `${i.title}`,

                                rowId: `${prefix}animee ${i.mal_id}`,

                                description: `${i.synopsis}`

                            },

                        ]

                    }

                    sections.push(list)

                }

                const sendm = TokiBotAq.sendMessage(

                    m.chat,

                    {

                        text: `*Search Results From* ${text}`,

                        footer: botname,

                        title: "*▊▊▊ANIME▊▊▊*",

                        buttonText: "CLICK HERE",

                        sections

                    }, { quoted: m })

            }

                break
            case 'animee': {


                res = await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
                let txt = `𝗔𝗻𝗶𝗺𝗲 𝗜𝗻𝗳𝗼\n\n*TITLE:* *${res.data.title}*\n*ENGLISH:* *${res.data.title_english}*\n*JAPANESE:* *${res.data.title_japanese}*\n*TYPE ANIME:* *${res.data.type}*\n*ADAPTER:* *${res.data.source}*\n*TOTAL EPISODE:* *${res.data.episodes}*\n*STATUS:* *${res.data.status}*\n*ONGOING:* *${res.data.airing ? 'Ya' : 'DRIS'}*\n*AIRED:* *${res.data.aired.string}*\n*DURATION:* *${res.data.duration}*\n*RATING:* *${res.data.rating}*\n*SCORE:* *${res.data.score}*\n*RANK:* *${res.data.rank}*\n*STUDIO:* *${res.data.studios[0].name}* `
                TokiBotAq.sendMessage(m.chat, { image: { url: res.data.images.jpg.image_url }, caption: txt }, { quoted: m }).catch((err) => m.reply('sorry error'))
            }
                break

            //by TOKI BOT

            case 'listmenu': case 'list': {

                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let sections = []
                let listmenu = [`allmenu`, `mainmenu`, `groupmenu`, `downloadmenu`, `searchingmenu`, `randommenu`, `voicemenu`, `toolsmenu`, `internetmenu`, `shortmenu`, `DONOmenu`, `nsfwmenu`]
                let listmenuu = [`𝗧𝗢𝗗𝗢𝗦 𝗠𝗘𝗡𝗨𝗦`, `𝗠𝗘𝗡𝗨 𝗣𝗥𝗜𝗡𝗖𝗜𝗣𝗔𝗟`, `𝗠𝗘𝗡𝗨 𝗚𝗥𝗨𝗣𝗢`, `𝗠𝗘𝗡𝗨 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗`, `𝗠𝗘𝗡𝗨 𝗣𝗘𝗦𝗤𝗨𝗜𝗦𝗔`, `𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠`, `𝗠𝗘𝗡𝗨 𝗧𝗘𝗫𝗧𝗣𝗥𝗢`, `𝗠𝗘𝗡𝗨 𝗙𝗨𝗡`, `𝗘𝗙𝗘𝗜𝗧𝗢 𝗜𝗠𝗔𝗚𝗘𝗠`, `𝗠𝗘𝗡𝗨 𝗘𝗣𝗛𝗢𝗧𝗢`, `𝗠𝗘𝗡𝗨 𝗖𝗢𝗡𝗩𝗘𝗥𝗧`, `𝗠𝗘𝗡𝗨 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘`, `𝗙𝗢𝗧𝗢 𝗙𝗜𝗟𝗧𝗥𝗢`, `𝗠𝗘𝗡𝗨 𝗔𝗡𝗢𝗡𝗜𝗠𝗢`, `𝗠𝗘𝗡𝗨 𝗩𝗢𝗭`, `𝗠𝗘𝗡𝗨 𝗙𝗘𝗥𝗥𝗔𝗠𝗘𝗡𝗧𝗔𝗦`, `𝗠𝗘𝗡𝗨 𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧`, `𝗠𝗘𝗡𝗨 𝗦𝗛𝗢𝗥𝗧`, `𝗠𝗘𝗡𝗨 𝗢𝗪𝗡𝗘𝗥`, `𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪`]

                let nombor = 1
                let startnum = 0

                for (let x of listmenu) {
                    const list = {
                        title: 'MENU NUMBER ' + nombor++,
                        rows: [
                            {
                                title: `${listmenuu[startnum++]}`,

                                rowId: `${prefix}${x}`
                            },
                        ]
                    }
                    sections.push(list)
                }
                const sendm = TokiBotAq.sendMessage(
                    m.chat,
                    {
                        text: `
       *✧tempo ativo: ${runtime(process.uptime())}*
       ╭━━━━━━━━━━━━━━━━━━╮
       ┃         ${global.botname}
       ┃━━━━━━━━━━━━━━━━━━┃
       ┃
       ┃ *${ucapannya2}*, *${pushname}*
       ┃
       ┃ *✧Patente: ${role}*
       ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
       ┃ *✧Calendário:* *${thisDay}*, *${day}* 
       ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
       ┃ 
       ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
       ┃ youtube.com/c/TioTomiokaOfc
       ┃
       ┃━━━━━━━━━━━━━━━━━━┃
       ┃                  Toki Bot
       ╰━━━━━━━━━━━━━━━━━━╯`,
                        footer: TokiBotAq.user.name,
                        title: `${ucapannya2} ${pushname}`,
                        buttonText: "CLICK HERE",
                        sections
                    }, { quoted: m })
            }

                break

            case 'allmenu': case 'menu': case 'help': {
                let Levelnye = level.getLevelingLevel(m.sender, _level)
                let datane = fs.readFileSync('./lib/random.js')
                jsonData = JSON.parse(datane)
                randIndex = Math.floor(Math.random() * jsonData.length)
                randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧Patente: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧Calendário:* *${thisDay}*, *${day}* 
┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃ youtube.com/c/TioTomiokaOfc
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  Toki Bot
╰━━━━━━━━━━━━━━━━━━╯

                 
┏━❰ *MAIN MENU* ❱
┃⬤${prefix}ping
┃⬤${prefix}listpc
┃⬤${prefix}dono
┃⬤${prefix}bothelp (ctt dono)
┃⬤${prefix}infochat (responda msg)
┃⬤${prefix}runtime
┃⬤${prefix}speedtest
┗━━━━━━━━━━⦿


┏━❰ *SHORTLINK* ❱
┃⬤${prefix}tinyurl
┗━━━━━━━━━━⦿


┏━❰ *FUN FAITURE* ❱
┃⬤${prefix}slot 
┃⬤${prefix}delttt
┃⬤${prefix}tictactoe
┗━━━━━━━━━━⦿


┏━❰ *EPHOTO-363* ❱
┃⬤${prefix}3d-wood
┃⬤${prefix}angels-wings
┃⬤${prefix}snake-text
┃⬤${prefix}redhot-metal2
┃⬤${prefix}sandsummer-beach
┃⬤${prefix}snow-text
┃⬤${prefix}water-3d
┃⬤${prefix}water-effect
┗━━━━━━━━━━⦿


┏━❰ *DONO MENU* ❱
┃⬤${prefix}leave
┃⬤${prefix}tfxp
┃⬤ ${prefix}join
┃⬤${prefix}promoteDONO/pDONO
┃⬤${prefix}bctext
┃⬤${prefix}bcall
┃⬤${prefix}bcloc
┃⬤${prefix}tflimit
┃⬤${prefix}block
┃⬤${prefix}react
┃⬤${prefix}bctext
┃⬤${prefix}setexif
┃⬤${prefix}chat
┃⬤${prefix}autoblock
┃⬤${prefix}bcvideo
┃⬤${prefix}bcgroup
┃⬤ ${prefix}bcimage
┃⬤${prefix}unblock
┃⬤${prefix}setppbot
┗━━━━━━━━━━⦿


┏━❰ *MENU GRUPO* ❱
┃⬤${prefix}linkgroup
┃⬤${prefix}kick
┃⬤${prefix}tagall
┃⬤${prefix}setdesc
┃⬤${prefix}group
┃⬤${prefix}hidetag
┃⬤${prefix}mute
┃⬤${prefix}antibadword
┃⬤${prefix}setname
┃⬤${prefix}promote
┃⬤${prefix}demote
┃⬤${prefix}antilink
┃⬤${prefix}antibule
┃⬤${prefix}setppgc
┃⬤${prefix}antifb
┃⬤${prefix}antiinsta
┃⬤${prefix}antilinkall
┃⬤${prefix}antitiktok
┃⬤${prefix}antitelegram
┃⬤${prefix}antiytchannel
┃⬤${prefix}antivirtex
┃⬤${prefix}editinfo
┃⬤${prefix}antiviewonce
┃⬤${prefix}antionce
┃⬤${prefix}dare
┃⬤${prefix}truth
┃⬤${prefix}slot
┃⬤${prefix}toonce / once
┃⬤${prefix}antilinkyt
┃⬤${prefix}antiwame
┃⬤${prefix}ephemeral
┗━━━━━━━━━━⦿


┏━❰ *VOICE-CHANGER* ❱
┃⬤${prefix}fat 
┃⬤${prefix}deep 
┃⬤${prefix}robot 
┃⬤${prefix}slow 
┃⬤${prefix}tupai 
┃⬤${prefix}fast 
┃⬤${prefix}bass 
┃⬤${prefix}blown 
┃⬤${prefix}reverse 
┃⬤${prefix}earrape 
┃⬤${prefix}nightcore 
┗━━━━━━━━━━⦿


┏━❰ *SEARCH MENU* ❱
┃⬤${prefix}yts
┃⬤${prefix}lirik
┃⬤${prefix}play
┃⬤${prefix}amino
┃⬤${prefix}domain
┃⬤${prefix}anime
┃⬤${prefix}google
┃⬤${prefix}gimage
┃⬤${prefix}wattpad
┃⬤${prefix}ytsearch
┃⬤${prefix}ytsaudio
┃⬤${prefix}ytsvideo
┃⬤${prefix}ringtone
┃⬤${prefix}readmore
┃⬤${prefix}layarkaca
┃⬤${prefix}pinterest
┃⬤${prefix}wallpaper
┃⬤${prefix}layarkaca
┃⬤${prefix}wikimedia
┃⬤${prefix}gsmarena
┃⬤${prefix}cariquotes
┃⬤${prefix}igstalk
┃⬤${prefix}pixivsearch
┃⬤${prefix}sfilesearch
┃⬤${prefix}mangatoon
┃⬤${prefix}palingmurah
┃⬤${prefix}stalk
┃⬤${prefix}stickersearch
┃⬤${prefix}animesearch
┃⬤${prefix}tiktokstalk
┃⬤${prefix}githubstalk
┃⬤${prefix}twitterstalk
┗━━━━━━━━━━⦿


┏━❰ *CONVERT-STICKER* ❱
┃⬤${prefix}sticker
┃⬤${prefix}ttp
┃⬤${prefix}attp
┃⬤${prefix}ttp2
┃⬤${prefix}smeme
┃⬤${prefix}ebinary
┃⬤${prefix}dbinary
┃⬤${prefix}styletext
┃⬤${prefix}emojimix2
┃⬤${prefix}stickerly
┃⬤${prefix}stickerline
┃⬤${prefix}stickerwm
┃⬤${prefix}emojimix
┃⬤${prefix}togif
┃⬤${prefix}tourl
┃⬤${prefix}tovn
┃⬤${prefix}tovideo
┃⬤${prefix}tomp3 
┃⬤${prefix}toaudio 
┃⬤${prefix}toimage
┃⬤${prefix}removebg
┃⬤${prefix}imagetopdf 
┗━━━━━━━━━━━⦿

┏━❰ *DOWNLOADER* ❱
┃⬤${prefix}apk
┃⬤${prefix}joox
┃⬤${prefix}pindl
┃⬤${prefix}fbmp3
┃⬤${prefix}savefrom
┃⬤${prefix}ytsvideo
┃⬤${prefix}getmusic
┃⬤${prefix}getvideo
┃⬤${prefix}ytsaudio
┃⬤${prefix}tiktok
┃⬤${prefix}tiktok2
┃⬤${prefix}tiktok3
┃⬤${prefix}tiktok4
┃⬤${prefix}smule
┃⬤${prefix}vimeo
┃⬤${prefix}twitter
┃⬤${prefix}twitter2
┃⬤${prefix}igtv
┃⬤${prefix}ytmp3
┃⬤${prefix}ytmp4
┃⬤${prefix}umma
┃⬤${prefix}tiktokwm
┃⬤${prefix}linkedin
┃⬤${prefix}tiktokmp3
┃⬤${prefix}youtube
┃⬤${prefix}igimage
┃⬤${prefix}twitteraudio
┃⬤${prefix}tiktoknowm
┃⬤${prefix}instagramstory
┃⬤${prefix}instagramstory2
┃⬤${prefix}instagramstory3
┃⬤${prefix}ig
┃⬤${prefix}mediafire
┃⬤${prefix}facebook
┃⬤${prefix}fb
┃⬤${prefix}facebook2
┃⬤${prefix}facebook3
┃⬤${prefix}instagram
┃⬤${prefix}instagram2
┃⬤${prefix}zippyshare
┃⬤${prefix}googledrive
┃⬤${prefix}ytshorts
┃⬤${prefix}soundcloud
┃⬤${prefix}instagramreal
┗━━━━━━━━━━⦿


┏━❰ *IMAGE-EFFECT* ❱
┃⬤${prefix}jail
┃⬤${prefix}shit
┃⬤${prefix}rip
┃⬤${prefix}blur
┃⬤${prefix}gay
┃⬤${prefix}invert
┃⬤${prefix}burn
┃⬤${prefix}wanted
┃⬤${prefix}beautiful
┃⬤${prefix}pixelate
┃⬤${prefix}fotojatoh
┃⬤${prefix}ytcomment
┃⬤${prefix}imagesketch
┃⬤${prefix}triggeredwebp
┗━━━━━━━━━━━⦿


┏━❰ *PHOTO-FILTER* ❱
┃⬤${prefix}aria 
┃⬤${prefix}attic
┃⬤${prefix}ruby 
┃⬤${prefix}sand 
┃⬤${prefix}eva
┃⬤${prefix}lisa 
┃⬤${prefix}hdr
┃⬤${prefix}lana 
┃⬤${prefix}lomo 
┃⬤${prefix}milk 
┃⬤${prefix}milk 
┃⬤${prefix}hana 
┃⬤${prefix}plumy 
┃⬤${prefix}movie 
┃⬤${prefix}orton 
┃⬤${prefix}molly  
┃⬤${prefix}sepia 
┃⬤${prefix}sphnik 
┃⬤${prefix}venus
┃⬤${prefix}solarixe 
┃⬤${prefix}creamy 
┃⬤${prefix}paretro 
┃⬤${prefix}duotone 
┃⬤${prefix}retorolga 
┃⬤${prefix}sapphire 
┃⬤${prefix}japanese 
┃⬤${prefix}lavender 
┃⬤${prefix}morning 
┃⬤${prefix}lighteak 
┃⬤${prefix}softsepia 
┃⬤${prefix}viewfinder 
┃⬤${prefix}lemonande 
┃⬤${prefix}warmsunset 
┃⬤${prefix}goldenhour  
┃⬤${prefix}chrome1977 
┃⬤${prefix}monochrome 
┃⬤${prefix}perfectbandw 
┃⬤${prefix}blackandwhite 
┃⬤${prefix}constrastbandw  
┗━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                let btn = [{
                    urlButton: {
                        displayText: 'Se inscreva',
                        url: 'https://youtube.com/c/TioTomiokaOfc'
                    }
                }, {
                    urlButton: {
                        displayText: 'GITHUB',
                        url: 'https://github.com/SilasJr-dev/'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'SPEED',
                        id: 'ping'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'DONO',
                        id: 'dono'
                    }
                }, {
                    quickReplyButton: {
                        displayText: 'LISTA',
                        id: 'listmenu'
                    }
                }]
                let setbot = db.data.settings[botNumber]
                if (setbot.templateImage) {
                    let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail: buffer }, { upload: TokiBotAq.waUploadToServer })
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: {
                            hydratedTemplate: {
                                imageMessage: message.imageMessage,
                                hydratedContentText: anu,
                                hydratedFooterText: `${global.botname}`,
                                hydratedButtons: [{
                                    urlButton: {
                                        displayText: 'SE INSCREVA',
                                        url: 'https://youtube.com/c/TioTomiokaOfc'
                                    }
                                }, {
                                    urlButton: {
                                        displayText: 'GITHUB',
                                        url: 'https://github.com/SilasJr-dev/'
                                    }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'SPEED',
                                        id: 'ping'
                                    }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'DONO',
                                        id: 'dono'
                                    }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'LIST',
                                        id: 'listmenu'
                                    }
                                }]
                            }
                        }
                    }), { userJid: m.chat, quoted: m })
                    TokiBotAq.relayMessage(m.chat, template.message, { messageId: template.key.id })
                } else if (setbot.templateGif) {
                    let message = await prepareWAMessageMedia({ video: global.visoka, gifPlayback: true, jpegThumbnail: buffer }, { upload: TokiBotAq.waUploadToServer })
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: {
                            hydratedTemplate: {
                                videoMessage: message.videoMessage,
                                hydratedContentText: anu,
                                hydratedFooterText: `${botname}`,
                                hydratedButtons: [{
                                    urlButton: {
                                        displayText: 'SE INSCREVA',
                                        url: 'https://youtube.com/c/TioTomiokaOfc'
                                    }
                                }, {
                                    urlButton: {
                                        displayText: 'GITHUB',
                                        url: 'https://github.com/SilasJr-dev/'
                                    }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'SPEED',
                                        id: 'ping'
                                    }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'DONO',
                                        id: 'dono'
                                    }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'LIST',
                                        id: 'listmenu'
                                    }
                                }]
                            }
                        }
                    }), { userJid: m.chat, quoted: m })
                    TokiBotAq.relayMessage(m.chat, template.message, { messageId: template.key.id })
                } else if (setbot.templateLocation) {
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: {
                            hydratedTemplate: {
                                hydratedContentText: anu,
                                locationMessage: {
                                    jpegThumbnail: buffer
                                },
                                hydratedFooterText: botname,
                                hydratedButtons: [{
                                    urlButton: {
                                        displayText: 'SE INSCREVA',
                                        url: 'https://youtube.com/c/TioTomiokaOfc'
                                    }
                                }, {
                                    urlButton: {
                                        displayText: 'GITHUB',
                                        url: 'https://github.com/SilasJr-dev/'
                                    }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'SPEED',
                                        id: 'ping'
                                    }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'DONO',
                                        id: 'dono'
                                    }
                                }, {
                                    quickReplyButton: {
                                        displayText: 'LIST',
                                        id: 'listmenu'
                                    }
                                }]
                            }
                        }
                    }), { userJid: m.chat, quoted: m })
                    TokiBotAq.relayMessage(m.chat, template.message, { messageId: template.key.id })
                } else if (setbot.templateMsg) {
                    TokiBotAq.send5ButMsg(m.chat, anu, global.botname, btn)
                } else if (setbot.templateList) {
                    let sections = []
                    let listmenu = [`allmenu`, `mainmenu`, `groupmenu`, `expmenu`, `downloadmenu`, `searchingmenu`, `randommenu`, `textpromenu`, `funmenu`, `imageeffectmenu`, `ephotomenu`, `convertmenu`, `photofiltermenu`, `anonymousmenu`, `voicemenu`, `toolsmenu`, `internetmenu`, `shortmenu`, `DONOmenu`, `donasi`]
                    let listmenuu = [`𝗧𝗢𝗗𝗢𝗦 𝗠𝗘𝗡𝗨𝗦`, `𝗠𝗘𝗡𝗨 𝗣𝗥𝗜𝗡𝗖𝗜𝗣𝗔𝗟`, `𝗠𝗘𝗡𝗨 𝗚𝗥𝗨𝗣𝗢`, `𝗠𝗘𝗡𝗨 𝗫𝗣`, `𝗠𝗘𝗡𝗨 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗`, `𝗠𝗘𝗡𝗨 𝗣𝗘𝗦𝗤𝗨𝗜𝗦𝗔`, `𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠`, `𝗠𝗘𝗡𝗨 𝗧𝗘𝗫𝗧𝗣𝗥𝗢`, `𝗣𝗛𝗢𝗧𝗢𝗢𝗫𝗬`, `𝗠𝗘𝗡𝗨 𝗙𝗨𝗡`, `𝗘𝗙𝗘𝗜𝗧𝗢 𝗜𝗠𝗔𝗚𝗘𝗠`, `𝗠𝗘𝗡𝗨 𝗘𝗣𝗛𝗢𝗧𝗢`, `𝗠𝗘𝗡𝗨 𝗖𝗢𝗡𝗩𝗘𝗥𝗧`, `𝗙𝗢𝗧𝗢 𝗙𝗜𝗟𝗧𝗥𝗢`, `𝗠𝗘𝗡𝗨 𝗔𝗡𝗢𝗡𝗜𝗠𝗢`, `𝗠𝗘𝗡𝗨 𝗩𝗢𝗭`, `𝗠𝗘𝗡𝗨 𝗙𝗘𝗥𝗥𝗔𝗠𝗘𝗡𝗧𝗔𝗦`, `𝗠𝗘𝗡𝗨 𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧`, `𝗠𝗘𝗡𝗨 𝗦𝗛𝗢𝗥𝗧`, `𝗠𝗘𝗡𝗨 𝗢𝗪𝗡𝗘𝗥`, `𝗗𝗢𝗡𝗔𝗧𝗘`]

                    let nombor = 1
                    let startnum = 0

                    for (let x of listmenu) {
                        const list = {
                            title: 'MENU NUMBER ' + nombor++,
                            rows: [
                                {
                                    title: `${listmenuu[startnum++]}`,

                                    rowId: `${prefix}${x}`
                                },
                            ]
                        }
                        sections.push(list)
                    }
                    const sendm = TokiBotAq.sendMessage(
                        m.chat,
                        {
                            text: `
*✧𝗧𝗲𝗺𝗽𝗼 𝗔𝘁𝗶𝘃𝗼: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧𝗣𝗮𝘁𝗲𝗻𝘁𝗲: ${role}*
┃ *✧𝗟𝗲𝘃𝗲𝗹:* ${Levele2} 
┃ *✧𝗱𝗮𝘁𝗮:* *${thisDay}*, *${day}* 
┃ *✧𝗧𝗲𝗺𝗽𝗼:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃youtube.com/c/TioTomiokaOfc
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  Toki Bot
╰━━━━━━━━━━━━━━━━━━╯`,
                            footer: `Toki Bot`,
                            title: `*𝗠𝗘𝗡𝗨 𝗟𝗜𝗦𝗧𝗔*`,
                            jpegThumbnail: buffer,
                            buttonText: "CLIQUE AQ",
                            sections
                        }, { quoted: m })
                } else if (setbot.templateDoc) {
                    const buttonsDefault = [{ urlButton: { displayText: `SE INSCREVA`, url: `https://youtube.com/c/TioTomiokaOfc` } }, { urlButton: { displayText: `GITHUB`, url: `https://github.com/SilasJr-dev/` } },
                    {
                        quickReplyButton: {
                            displayText: 'SPEED',
                            id: 'ping'
                        }
                    },
                    {
                        quickReplyButton: {
                            displayText: 'DONO',
                            id: 'dono'
                        }
                    },
                    {
                        quickReplyButton: {
                            displayText: 'LIST',
                            id: 'listmenu'
                        }
                    },]

                    TokiBotAq.sendMessage(m.chat, {
                        caption: anu,

                        document: fs.readFileSync('./lib/tes.xlsx'),
                        mimetype: drips,
                        jpegThumbnail: buffer,
                        fileName: `Toki Bot`,
                        fileLength: 99999999999999,
                        templateButtons: buttonsDefault, footer: `${botname}`, quoted: m
                    })
                }
            }
                break
            //let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: TokiBotAq.waUploadToServer })
            //const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            //templateMessage: {
            //hydratedTemplate: {
            //imageMessage: message.imageMessage,
            //hydratedContentText: anu,
            //hydratedFooterText: `${global.botname}`,
            //hydratedButtons: [{
            //urlButton: {
            //displayText: 'SE INSCREVA ',
            //url: 'https://youtube.com/c/TioTomiokaOfc'
            //}
            //}, {
            //urlButton: {
            //displayText: 'GITHUB',
            //url: 'https://github.com/SilasJr-dev/'
            //}
            //}, {
            //quickReplyButton: {
            //displayText: 'SPEED',
            //id: 'ping'
            //}
            //}, {
            //quickReplyButton: {
            //displayText: 'DONO',
            //id: 'DONO'
            //}  
            //}, {
            //quickReplyButton: {
            //displayText: 'LIST',
            //id: 'list'
            //}
            //}]
            //}
            //}
            //}), { userJid: m.chat, quoted: m })
            //TokiBotAq.relayMessage(m.chat, template.message, { messageId: template.key.id })
            //}
            //break



            case 'mainmenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'MAIN MENU')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)

                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧Patente: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧Calendário:* *${thisDay}*, *${day}* 
┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃ youtube.com/c/TioTomiokaOfc
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  Toki Bot
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *MAIN MENU* ❱
┃⬤${prefix}ping
┃⬤${prefix}listpc
┃⬤${prefix}listgc
┃⬤${prefix}DONO
┃⬤${prefix}delete
┃⬤${prefix}infochat
┃⬤${prefix}quoted
┃⬤${prefix}runtime
┃⬤${prefix}speedtest
┗━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                const _0x5c8923 = _0x3878; (function (_0x4cbfbe, _0xacef25) { const _0x8ea93 = _0x3878, _0xf7c2ca = _0x4cbfbe(); while (!![]) { try { const _0x36f3fe = -parseInt(_0x8ea93(0x187)) / 0x1 + parseInt(_0x8ea93(0x186)) / 0x2 + -parseInt(_0x8ea93(0x193)) / 0x3 + -parseInt(_0x8ea93(0x191)) / 0x4 * (-parseInt(_0x8ea93(0x18e)) / 0x5) + parseInt(_0x8ea93(0x18a)) / 0x6 + parseInt(_0x8ea93(0x190)) / 0x7 * (-parseInt(_0x8ea93(0x18b)) / 0x8) + parseInt(_0x8ea93(0x189)) / 0x9 * (-parseInt(_0x8ea93(0x192)) / 0xa); if (_0x36f3fe === _0xacef25) break; else _0xf7c2ca['push'](_0xf7c2ca['shift']()); } catch (_0x414c20) { _0xf7c2ca['push'](_0xf7c2ca['shift']()); } } }(_0x123b, 0x2f5d7)); function _0x123b() { const _0x2f0f04 = ['fromObject', 'Message', 'key', '727336srpvwq', '384852AXndYJ', 'GITHUB', '2250gziVnA', '1729008psFOlG', '16LNJOyb', 'SE INSCREVA', 'imageMessage', '10KCnDsr', 'chat', '177163ETUuAR', '532052VAkVia', '9250iOSaTj', '171405WytGWt', 'message']; _0x123b = function () { return _0x2f0f04; }; return _0x123b(); } let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq['waUploadToServer'] }); const template = generateWAMessageFromContent(m[_0x5c8923(0x18f)], proto[_0x5c8923(0x184)][_0x5c8923(0x183)]({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message[_0x5c8923(0x18d)], 'hydratedContentText': anu, 'hydratedFooterText': '' + global['botname'], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x5c8923(0x18c), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x5c8923(0x188), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x5c8923(0x18f)] }); function _0x3878(_0x2496c4, _0xe8d08e) { const _0x123b1e = _0x123b(); return _0x3878 = function (_0x387861, _0x2d31c4) { _0x387861 = _0x387861 - 0x183; let _0x8acd87 = _0x123b1e[_0x387861]; return _0x8acd87; }, _0x3878(_0x2496c4, _0xe8d08e); } TokiBotAq['relayMessage'](m[_0x5c8923(0x18f)], template[_0x5c8923(0x194)], { 'messageId': template[_0x5c8923(0x185)]['id'] });
            }
                break
            case 'nsfwmenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'HORNY MENU')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)

                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧Patente: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧Calendário:* *${thisDay}*, *${day}* 
┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃ youtube.com/c/TioTomiokaOfc
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  Toki Bot
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *NSFW MENU* ❱
┃⬤${prefix}cum
┃⬤ ${prefix}ass
┃⬤ ${prefix}culo
┃⬤ ${prefix}hentai
┃⬤ ${prefix}blowjob
┃⬤ ${prefix}bdsm
┃⬤ ${prefix}gangbang
┃⬤ ${prefix}pussy
┃⬤ ${prefix}yuri
┃⬤ ${prefix}ero
┃⬤ ${prefix}thighs
┃⬤ ${prefix}panties
┃⬤ ${prefix}masturbation
┃⬤ ${prefix}neko
┃⬤ ${prefix}orgy
┃⬤ ${prefix}foot
┃⬤ ${prefix}glasses
┃⬤ ${prefix}fendom
┃⬤ ${prefix}cuckold
┃⬤ ${prefix}ahegao
┗━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x3217(_0x37715e, _0x2f6592) { const _0xa94637 = _0xa946(); return _0x3217 = function (_0x32173c, _0x1faa3c) { _0x32173c = _0x32173c - 0x123; let _0x3b0d30 = _0xa94637[_0x32173c]; return _0x3b0d30; }, _0x3217(_0x37715e, _0x2f6592); } const _0x3ea3f4 = _0x3217; (function (_0x329815, _0x3187af) { const _0x1742ff = _0x3217, _0x11de18 = _0x329815(); while (!![]) { try { const _0x2af702 = parseInt(_0x1742ff(0x12e)) / 0x1 * (-parseInt(_0x1742ff(0x133)) / 0x2) + -parseInt(_0x1742ff(0x132)) / 0x3 * (parseInt(_0x1742ff(0x138)) / 0x4) + -parseInt(_0x1742ff(0x134)) / 0x5 * (parseInt(_0x1742ff(0x127)) / 0x6) + parseInt(_0x1742ff(0x12f)) / 0x7 * (parseInt(_0x1742ff(0x136)) / 0x8) + -parseInt(_0x1742ff(0x128)) / 0x9 + -parseInt(_0x1742ff(0x129)) / 0xa + -parseInt(_0x1742ff(0x12b)) / 0xb * (-parseInt(_0x1742ff(0x131)) / 0xc); if (_0x2af702 === _0x3187af) break; else _0x11de18['push'](_0x11de18['shift']()); } catch (_0x573d7e) { _0x11de18['push'](_0x11de18['shift']()); } } }(_0xa946, 0x26ed7)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x3ea3f4(0x130)] }); function _0xa946() { const _0x2a0735 = ['imageMessage', '127KwzpDy', '7qrwpSX', 'waUploadToServer', '12123564BOwpfZ', '784317yPMltC', '4158aFgTZO', '97980uRbCpG', 'relayMessage', '424624qYNVeq', 'https://youtube.com/c/TioTomiokaOfc', '4SXNURK', 'chat', 'SE INSCREVA', 'key', 'Message', '84npVzAw', '485649YpjWQW', '501510MVGWCT', 'botname', '11WGaHFz', 'https://github.com/SilasJr-dev/']; _0xa946 = function () { return _0x2a0735; }; return _0xa946(); } const template = generateWAMessageFromContent(m[_0x3ea3f4(0x123)], proto[_0x3ea3f4(0x126)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message[_0x3ea3f4(0x12d)], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x3ea3f4(0x12a)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x3ea3f4(0x124), 'url': _0x3ea3f4(0x137) } }, { 'urlButton': { 'displayText': 'GITHUB', 'url': _0x3ea3f4(0x12c) } }] } } }), { 'userJid': m['chat'] }); TokiBotAq[_0x3ea3f4(0x135)](m['chat'], template['message'], { 'messageId': template[_0x3ea3f4(0x125)]['id'] });
            }
                break
            case 'groupmenu': case 'grupmenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'GROUP MENU')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *GROUP MENU* ❱
┃⬤${prefix}linkgroup
┃⬤${prefix}kick
┃⬤${prefix}tagall
┃⬤${prefix}setdesc
┃⬤${prefix}group
┃⬤${prefix}hidetag
┃⬤${prefix}mute
┃⬤${prefix}setname
┃⬤${prefix}promote
┃⬤${prefix}demote
┃⬤${prefix}antilink
┃⬤${prefix}antibule
┃⬤${prefix}setppgc
┃⬤${prefix}antifb
┃⬤${prefix}antiinsta
┃⬤${prefix}antilinkall
┃⬤${prefix}antitiktok
┃⬤${prefix}antitelegram
┃⬤${prefix}antiytchannel
┃⬤${prefix}antivirtex
┃⬤${prefix}antibardword
┃⬤${prefix}editinfo
┃⬤${prefix}antiviewonce
┃⬤${prefix}antionce
┃⬤${prefix}dare
┃⬤${prefix}truth
┃⬤${prefix}slot
┃⬤${prefix}toonce / once
┃⬤${prefix}antilinkyt
┃⬤${prefix}antiwame
┃⬤${prefix}ephemeral
┗━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break

            case 'downloadmenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'DOWNLOAD')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *DOWNLOADER* ❱
┃⬤${prefix}apk
┃⬤${prefix}joox
┃⬤${prefix}pindl
┃⬤${prefix}fbmp3
┃⬤${prefix}savefrom
┃⬤${prefix}ytsvideo
┃⬤${prefix}getmusic
┃⬤${prefix}getvideo
┃⬤${prefix}ytsaudio
┃⬤${prefix}tiktok
┃⬤${prefix}tiktok2
┃⬤${prefix}tiktok3
┃⬤${prefix}tiktok4
┃⬤${prefix}smule
┃⬤${prefix}vimeo
┃⬤${prefix}twitter
┃⬤${prefix}twitter2
┃⬤${prefix}igtv
┃⬤${prefix}ytmp3
┃⬤${prefix}ytmp4
┃⬤${prefix}umma
┃⬤${prefix}tiktokwm
┃⬤${prefix}linkedin
┃⬤${prefix}tiktokmp3
┃⬤${prefix}youtube
┃⬤${prefix}igimage
┃⬤${prefix}twitteraudio
┃⬤${prefix}tiktoknowm
┃⬤${prefix}instagramstory
┃⬤${prefix}instagramstory2
┃⬤${prefix}instagramstory3
┃⬤${prefix}mediafire
┃⬤${prefix}facebook
┃⬤${prefix}facebook2
┃⬤${prefix}facebook3
┃⬤${prefix}instagram
┃⬤${prefix}instagram2
┃⬤${prefix}zippyshare
┃⬤${prefix}googledrive
┃⬤${prefix}ytshorts
┃⬤${prefix}soundcloud
┃⬤${prefix}instagramreal
┗━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break

            case 'searchingmenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'SEARCH')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *SEARCH MENU* ❱
┃⬤${prefix}yts
┃⬤${prefix}lirik
┃⬤${prefix}play
┃⬤${prefix}amino
┃⬤${prefix}domain
┃⬤${prefix}anime
┃⬤${prefix}google
┃⬤${prefix}gimage
┃⬤${prefix}wattpad
┃⬤${prefix}ytsearch
┃⬤${prefix}ytsaudio
┃⬤${prefix}ytsvideo
┃⬤${prefix}ringtone
┃⬤${prefix}readmore
┃⬤${prefix}layarkaca
┃⬤${prefix}pinterest
┃⬤${prefix}wallpaper
┃⬤${prefix}layarkaca
┃⬤${prefix}wikimedia
┃⬤${prefix}gsmarena
┃⬤${prefix}cariquotes
┃⬤${prefix}igstalk
┃⬤${prefix}pixivsearch
┃⬤${prefix}sfilesearch
┃⬤${prefix}mangatoon
┃⬤${prefix}palingmurah
┃⬤${prefix}stalk
┃⬤${prefix}stickersearch
┃⬤${prefix}animesearch
┃⬤${prefix}tiktokstalk
┃⬤${prefix}githubstalk
┃⬤${prefix}twitterstalk
┗━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break

            case 'randommenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'RANDOM')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃youtube.com/c/TioTomiokaOfc
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ᴢɪᴍʙᴏᴛɪɴᴄ
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰*RANDOM* ❱
┃ ${prefix}bts
┃ ${prefix}exo
┃ ${prefix}yeet
┃ ${prefix}lick
┃ ${prefix}cry
┃ ${prefix}hug
┃ ${prefix}kiss
┃ ${prefix}pat
┃ ${prefix}bonk
┃ ${prefix}bully
┃ ${prefix}awoo
┃ ${prefix}waifu
┃ ${prefix}neko
┃ ${prefix}bully
┃ ${prefix}bonk
┃ ${prefix}bully
┃ ${prefix}puisi
┃ ${prefix}neko
┃ ${prefix}meme
┃ ${prefix}cecan
┃ ${prefix}cogan
┃ ${prefix}coffe
┃ ${prefix}couple
┃ ${prefix}anime
┃ ${prefix}waifu
┃ ${prefix}husbu
┃ ${prefix}smug
┃ ${prefix}cuddle
┃ ${prefix}husbu2
┃ ${prefix}shinobu
┃ ${prefix}shinobu
┃ ${prefix}meme2
┃ ${prefix}motivasi
┃ ${prefix}megumin
┃ ${prefix}katasenja
┃ ${prefix}darkjokes
┃ ${prefix}dilanquote
┃ ${prefix}bucinquote
┃ ${prefix}darkjokes2
┃ ${prefix}quotesanime
┗━━━━

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break

            case 'textpromenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'TEXTPRO')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *TEXT MAKER* ❱
┃⬤${prefix}writing
┃⬤${prefix}engraved
┃⬤${prefix}glue-text
┃⬤${prefix}holograpic
┃⬤${prefix}deluxe-silver
┃⬤${prefix}fabric
┃⬤${prefix}wicker
┃⬤${prefix}larva
┃⬤${prefix}toxic
┃⬤${prefix}koi
┃⬤${prefix}bread
┃⬤${prefix}horor-blood
┃⬤${prefix}honey
┃⬤${prefix}ice
┃⬤${prefix}rusty
┃⬤${prefix}christmas
┃⬤${prefix}gradien
┃⬤${prefix}1917
┃⬤${prefix}harry-potter
┃⬤${prefix}3dstone
┃⬤${prefix}thunder2
┃⬤${prefix}sroberi
┃⬤${prefix}blood
┃⬤${prefix}joker-logo
┃⬤${prefix}marvel-logo2
┃⬤${prefix}lion-logo
┃⬤${prefix}pornhub
┃⬤${prefix}avengers-logo
┃⬤${prefix}ninja-logo
┃⬤${prefix}grafity-text2
┃⬤${prefix}astone
┃⬤${prefix}space
┃⬤${prefix}captain
┃⬤${prefix}logo-wolf2
┃⬤${prefix}logo-wolf
┃⬤${prefix}silk
┃⬤${prefix}3dnature
┃⬤${prefix}bevel
┃⬤${prefix}birthdaycake
┃⬤${prefix}burnpaper
┃⬤${prefix}coffee
┃⬤${prefix}coffee-heartcup
┃⬤${prefix}embroiderytext
┃⬤${prefix}flaming
┃⬤${prefix}flowertypo
┃⬤${prefix}funnycup
┃⬤${prefix}fur
┃⬤${prefix}gerbang
┃⬤${prefix}glowrainbow
┃⬤${prefix}gradientavatar
┃⬤${prefix}graffititext
┃⬤${prefix}harrypotter
┃⬤${prefix}lovemessage
┃⬤${prefix}luxuryroyal
┃⬤${prefix}neonlight
┃⬤${prefix}sweetcandy
┃⬤${prefix}summertext
┃⬤${prefix}woodenheart
┃⬤${prefix}woodblock
┃⬤${prefix}yellowroses
┃⬤${prefix}wolfmetal
┃⬤${prefix}underwaterocean
┃⬤${prefix}graffiti
┃⬤${prefix}angel
┃⬤${prefix}queen
┃⬤${prefix}wet-glass
┃⬤${prefix}status-mood2
┃⬤${prefix}summerysand
┗━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break

            case 'ephotomenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'EPHOTO')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *EPHOTO-363* ❱
┃⬤${prefix}3d-wood
┃⬤${prefix}angels-wings
┃⬤${prefix}snake-text
┃⬤${prefix}redhot-metal2
┃⬤${prefix}sandsummer-beach
┃⬤${prefix}snow-text
┃⬤${prefix}water-3d
┃⬤${prefix}water-effect
┗━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break

            case 'imageeffectmenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'IMAGE EF')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *IMAGE-EFFECT* ❱
┃⬤${prefix}jail
┃⬤${prefix}shit
┃⬤${prefix}rip
┃⬤${prefix}blur
┃⬤${prefix}gay
┃⬤${prefix}invert
┃⬤${prefix}burn
┃⬤${prefix}wanted
┃⬤${prefix}beautiful
┃⬤${prefix}pixelate
┃⬤${prefix}fotojatoh
┃⬤${prefix}ytcomment
┃⬤${prefix}imagesketch
┃⬤${prefix}triggeredwebp
┗━━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break

            case 'primbonmenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'PRIMBON')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *PRIMBON-MENU* ❱
┃⬤${prefix}shio 
┃⬤${prefix}nasib
┃⬤${prefix}rezeki
┃⬤${prefix}weton
┃⬤${prefix}zodiak
┃⬤${prefix}harisial
┃⬤${prefix}nomorhoki
┃⬤${prefix}sifatusaha
┃⬤${prefix}haribaik
┃⬤${prefix}penyakit 
┃⬤${prefix}karakter
┃⬤${prefix}fengshui
┃⬤${prefix}pekerjaan
┃⬤${prefix}nagahari
┃⬤${prefix}artinama
┃⬤${prefix}harisangar
┃⬤${prefix}artimimpi
┃⬤${prefix}arahrezeki
┃⬤${prefix}masasubur
┃⬤${prefix}jadiannikah
┃⬤${prefix}memancing
┃⬤${prefix}peruntungan
┃⬤${prefix}keberuntungan
┃⬤${prefix}suamiistri 
┃⬤${prefix}pasangan
┃⬤${prefix}ramalcinta
┃⬤${prefix}ramaljodoh
┃⬤${prefix}cocoknama
┃⬤${prefix}ramaljodohbali
┗━━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break

            case 'convertmenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'CONVERT')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *CONVERT-STICKER* ❱
┃⬤${prefix}sticker
┃⬤${prefix}ttp
┃⬤${prefix}attp
┃⬤${prefix}ttp2
┃⬤${prefix}smeme
┃⬤${prefix}sticker
┃⬤${prefix}ebinary
┃⬤${prefix}dbinary
┃⬤${prefix}styletext
┃⬤${prefix}emojimix2
┃⬤${prefix}stickerly
┃⬤${prefix}stickerline
┃⬤${prefix}stickerwm
┃⬤${prefix}emojimix
┃⬤${prefix}togif
┃⬤${prefix}tourl
┃⬤${prefix}tovn
┃⬤${prefix}tovideo
┃⬤${prefix}tomp3 
┃⬤${prefix}toaudio 
┃⬤${prefix}toimage
┃⬤${prefix}removebg
┃⬤${prefix}imagetopdf 
┗━━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break

            case 'databasemenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'DATABASE')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *DATABASE-MENU* ❱
┃⬤${prefix}setcmd 
┃⬤${prefix}listcmd
┃⬤${prefix}delcmd 
┃⬤${prefix}addmsg 
┃⬤${prefix}listmsg
┃⬤${prefix}getmsg
┃⬤${prefix}delmsg
┃⬤${prefix}lockcmd 
┗━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break

            case 'photofiltermenu': case 'photofilter': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'PHOTO FILTER')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *PHOTO-FILTER* ❱
┃⬤${prefix}aria 
┃⬤${prefix}attic
┃⬤${prefix}ruby 
┃⬤${prefix}sand 
┃⬤${prefix}eva
┃⬤${prefix}lisa 
┃⬤${prefix}hdr
┃⬤${prefix}lana 
┃⬤${prefix}lomo 
┃⬤${prefix}milk 
┃⬤${prefix}milk 
┃⬤${prefix}hana 
┃⬤${prefix}plumy 
┃⬤${prefix}movie 
┃⬤${prefix}orton 
┃⬤${prefix}molly  
┃⬤${prefix}sepia 
┃⬤${prefix}sphnik 
┃⬤${prefix}venus
┃⬤${prefix}solarixe 
┃⬤${prefix}creamy 
┃⬤${prefix}paretro 
┃⬤${prefix}duotone 
┃⬤${prefix}retorolga 
┃⬤${prefix}sapphire 
┃⬤${prefix}japanese 
┃⬤${prefix}lavender 
┃⬤${prefix}morning 
┃⬤${prefix}lighteak 
┃⬤${prefix}softsepia 
┃⬤${prefix}viewfinder 
┃⬤${prefix}lemonande 
┃⬤${prefix}warmsunset 
┃⬤${prefix}goldenhour  
┃⬤${prefix}chrome1977 
┃⬤${prefix}monochrome 
┃⬤${prefix}perfectbandw 
┃⬤${prefix}blackandwhite 
┃⬤${prefix}constrastbandw  
┗━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break
            case 'voicemenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'VOICE CHANGER')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *VOICE-CHANGER* ❱
┃⬤${prefix}fat 
┃⬤${prefix}deep 
┃⬤${prefix}robot 
┃⬤${prefix}slow 
┃⬤${prefix}tupai 
┃⬤${prefix}fast 
┃⬤${prefix}bass 
┃⬤${prefix}blown 
┃⬤${prefix}reverse 
┃⬤${prefix}earrape 
┃⬤${prefix}nightcore 
┗━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail: buffer }, { upload: TokiBotAq.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedFooterText: `${global.botname}`,
                            hydratedButtons: [{
                                "urlButton": {
                                    "displayText": "SE INSCREVA",
                                    "url": "https://youtube.com/c/TioTomiokaOfc"
                                }
                            }, {
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: 'https://github.com/SilasJr-dev/'
                                }
                            }
                            ]
                        }
                    }
                }), { userJid: m.chat })
                TokiBotAq.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
                break

            case 'toolsmenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'TOOLS')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *TOOLS MENU* ❱
┃⬤${prefix}git
┃⬤${prefix}nulis
┃⬤${prefix}ssweb
┃⬤${prefix}gitclone
┃⬤${prefix}nuliskiri
┃⬤${prefix}translate
┃⬤${prefix}nuliskanan
┃⬤${prefix}magernulis
┃⬤${prefix}magernulis2
┃⬤${prefix}magernulis3
┃⬤${prefix}magernulis4
┃⬤${prefix}magernulis5
┃⬤${prefix}magernulis6
┗━━━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break
            case 'internetmenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'INTERNET')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *INTERNET MENU* ❱
┃⬤${prefix}detik
┃⬤${prefix}news
┃⬤${prefix}infobmkg
┃⬤${prefix}covidindo
┃⬤${prefix}covidglobal
┃⬤${prefix}kbbi
┃⬤${prefix}carigc
┃⬤${prefix}searchgroup
┃⬤${prefix}google
┃⬤${prefix}brainly
┃⬤${prefix}kodepos
┃⬤${prefix}cuaca
┃⬤${prefix}playstore
┃⬤${prefix}wikipedia
┃⬤${prefix}jadwalsalat
┃⬤${prefix}resep
┃⬤${prefix}resepmasakan
┗━━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break

            case 'shortmenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'SHORTLINK')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *SHORTLINK* ❱
┃⬤${prefix}shortlink
┃⬤${prefix}tinyurl
┗━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break

            case 'donomenu': {
                TokiBotAq.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key } })
                buffer = await getBuffer(picak + 'DONO MENU')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)
                let hao = randomNomor(200)
                anu = `*✧tempo ativo: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧Patente: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧Calendário:* *${thisDay}*, *${day}* 
                ┃ *✧Hora:* *${moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃ youtube.com/c/TioTomiokaOfc
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  Toki Bot
                ╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *DONO MENU* ❱
┃⬤${prefix}leave
┃⬤${prefix}autoblock
┃⬤${prefix}tfxp
┃⬤${prefix}promoteDONO/pDONO
┃⬤${prefix}join
┃⬤${prefix}bctext
┃⬤${prefix}bcall
┃⬤${prefix}bcloc
┃⬤${prefix}tflimit
┃⬤${prefix}block
┃⬤${prefix}react
┃⬤${prefix}bctext
┃⬤${prefix}setexif
┃⬤${prefix}chat
┃⬤${prefix}bcvideo
┃⬤${prefix}bcgroup
┃⬤${prefix}bcimage
┃⬤${prefix}setmenu
┃⬤${prefix}unblock
┃⬤${prefix}setppbot
┗━━━━━━━━━━⦿

©️𝗧𝗢𝗞𝗜 𝗕𝗢𝗧
`
                function _0x186b() { const _0x16c1b5 = ['135080AGrzDU', 'Message', 'GITHUB', '10mzHMwO', 'chat', '21bZsKRC', '552424zUneQH', '1429756BqfDSd', 'key', '240mbdKBv', 'relayMessage', '844052JLGZth', '146104dkkfWS', '1857480tcaVPE', '595awiboR', '16150698mclKJV', 'botname', 'waUploadToServer', 'SE INSCREVA']; _0x186b = function () { return _0x16c1b5; }; return _0x186b(); } const _0x36f452 = _0x131e; (function (_0x25c54b, _0x526416) { const _0x54eaa5 = _0x131e, _0x24b40d = _0x25c54b(); while (!![]) { try { const _0x437851 = -parseInt(_0x54eaa5(0x193)) / 0x1 + -parseInt(_0x54eaa5(0x1a0)) / 0x2 + parseInt(_0x54eaa5(0x19e)) / 0x3 * (-parseInt(_0x54eaa5(0x19f)) / 0x4) + parseInt(_0x54eaa5(0x199)) / 0x5 * (parseInt(_0x54eaa5(0x1a2)) / 0x6) + -parseInt(_0x54eaa5(0x194)) / 0x7 * (-parseInt(_0x54eaa5(0x1a5)) / 0x8) + parseInt(_0x54eaa5(0x195)) / 0x9 * (parseInt(_0x54eaa5(0x19c)) / 0xa) + parseInt(_0x54eaa5(0x1a4)) / 0xb; if (_0x437851 === _0x526416) break; else _0x24b40d['push'](_0x24b40d['shift']()); } catch (_0x459222) { _0x24b40d['push'](_0x24b40d['shift']()); } } }(_0x186b, 0xeba1d)); let message = await prepareWAMessageMedia({ 'image': buffer, 'jpegThumbnail': buffer }, { 'upload': TokiBotAq[_0x36f452(0x197)] }); const template = generateWAMessageFromContent(m['chat'], proto[_0x36f452(0x19a)]['fromObject']({ 'templateMessage': { 'hydratedTemplate': { 'imageMessage': message['imageMessage'], 'hydratedContentText': anu, 'hydratedFooterText': '' + global[_0x36f452(0x196)], 'hydratedButtons': [{ 'urlButton': { 'displayText': _0x36f452(0x198), 'url': 'https://youtube.com/c/TioTomiokaOfc' } }, { 'urlButton': { 'displayText': _0x36f452(0x19b), 'url': 'https://github.com/SilasJr-dev/' } }] } } }), { 'userJid': m[_0x36f452(0x19d)] }); function _0x131e(_0xb57061, _0x1d708f) { const _0x186b37 = _0x186b(); return _0x131e = function (_0x131e55, _0x4245fa) { _0x131e55 = _0x131e55 - 0x193; let _0x47b1da = _0x186b37[_0x131e55]; return _0x47b1da; }, _0x131e(_0xb57061, _0x1d708f); } TokiBotAq[_0x36f452(0x1a3)](m[_0x36f452(0x19d)], template['message'], { 'messageId': template[_0x36f452(0x1a1)]['id'] });
            }
                break

            case 'sond': {

                hey = fs.readFileSync('./media/tes.mp3')

                TokiBotAq.sendMessage(m.chat, { audio: hey, mimetype: 'audio/mpeg', ptt: true }, { quoted: m })

            }

                break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }
                if (antiToxic)
                    if (bad.includes(Tokibotincv3)) {
                        if (m.text) {
                            Tokibotv3 = `*▊▊▊ANTIBAD WORDS▊▊▊*\n\n*Lucky you, you are admin*`
                            if (isAdmins) return m.reply(Tokibotv3)
                            if (m.key.fromMe) return m.reply(Tokibotv3)
                            if (isCreator) return m.reply(Tokibotv3)
                            kice = m.sender
                            await TokiBotAq.groupParticipantsUpdate(m.chat, [kice], 'remove')
                            TokiBotAq.sendMessage(from, { text: `*▊▊▊ANTIBAD WORDS▊▊▊*\n\n@${kice.split("@")[0]} *was kicked because of being rude to others in this group*`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
                        }
                    }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }

                if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
                //_________presence update case_________\\


                //____________END HERE__________________\\

                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    TokiBotAq.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }
        // SCRIPT BY ZIM-BOT ORIGINAL BASE DIKARNDT 

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
