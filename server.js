const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://infe-myst.glitch.me/`);
}, 280000);


//facsions
let funcs = {

  generateInt: (low, high) => {
    return Math.floor(Math.random() * (high - low + 1) + low);
  },
  getLevelFromExp: (exp) => {
    let level = 0;

        while (exp >= funcs.getLevelExp(level)) {
            exp -= funcs.getLevelExp(level);
            level++;
        }

        return level;
  },
  getLevelExp: (level) => {
    return 5 * (Math.pow(level, 2)) + 50 * level + 100;
  }

}

const SQLite = require('sqlite'); // SQLite Package to read & write to sql files and databases
const Discord = require('discord.js');
const devs = ['565913860884660249', '298230144357761032', '352173490276663307'];//{348953140315291649}Me
const db = require('quick.db');
const premium = ['565913860884660249'];
const client = new Discord.Client();   
const bot = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const path = require('path'); // Path Package to get paths easily
const translate = require('google-translate-api');   
const fs = require("fs"); 
const Canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const yt_api_key = "AIzaSyCoQvWcvF2v6HZk03pp39Bpce-ByG2jAvI";
const youtube = new YouTube("AIzaSyA3CUhzUCYKRUq3gA3UxqC56_rmaSMZC5c");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const ms = require('parse-ms'); // parse-ms Package to format ms to somethings
const pretty = require('pretty-ms') 
const {prefix} = require ('./prefix');
var table = require('table').table
var ti={}  
,spee={}
,attentions={};

client.on('ready', function(){
    var ms = 900 ;
    var setGame = [`${client.guilds.size} Server`,'$help','$contact',`${client.users.size} Members`,'I Love U'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/n3k4a`);
    }, ms);
    console.log(` -|> Name: ${client.user.username}`);
 console.log(` s> Servers: ${client.guilds.size}`);
 console.log(` h |> Members: ${client.users.size}`);
 console.log(` a |> Channels: ${client.channels.size}`);
 console.log(` d|> Channels: ${client.channels.size}`);
 console.log(` o|> Id: ${client.user.id}`);
 
  console.log(` g|`)
 console.log(` -`);
});


client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "help")) {
    let embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(client.user.tag, client.user.avatarURL)
      .setDescription(`
بوت متعدد الخصائص
صيانة يومية. شكراً للتوصيل البوت ل500 سيرفر
سيرفر البوت
`);
    message.channel.send(embed).then(async msg => {
      msg.react("🤖");
      msg.react("👥");
      msg.react("🎶");
      msg.react("🔒");
      msg.react("🎮");
      msg.react("✨");
      const ad = msg.createReactionCollector(
        (reaction, user) =>
          reaction.emoji.name == "🤖" && user.id == message.author.id,
        { time: 86400000 }
      );
      const p = msg.createReactionCollector(
        (reaction, user) =>
          reaction.emoji.name == "👥" && user.id == message.author.id,
        { time: 86400000 }
      );
      const m = msg.createReactionCollector(
        (reaction, user) =>
          reaction.emoji.name == "🎶" && user.id == message.author.id,
        { time: 86400000 }
      );
      const s = msg.createReactionCollector(
        (reaction, user) =>
          reaction.emoji.name == "🔒" && user.id == message.author.id,
        { time: 86400000 }
      );
      const g = msg.createReactionCollector(
        (reaction, user) =>
          reaction.emoji.name == "🎮" && user.id == message.author.id,
        { time: 86400000 }
      );
      const pl = msg.createReactionCollector(
        (reaction, user) =>
          reaction.emoji.name == "✨" && user.id == message.author.id,
        { time: 86400000 }
      );
      ad.on("collect", async r => {
        await r.remove(message.author);
        let embe = new Discord.RichEmbed()
          .setColor("BLACK")
          .setAuthor(client.user.tag, client.user.avatarURL).setDescription(`
**   
       
${prefix}move @user x}move @user |لسحب الشخص الى روومك
${prefix}role @user <rank> |لأعطاء رتبة لعضو معين
${prefix}roleremove @user <rank> |لازالة الرتبة من شخص معين
${prefix}give all <rank> |لأعطاء رتبة للجميع
${prefix}give humans <rank> |لأعطاء رتبة للاشخاص فقط
${prefix}give bots <rank> |لأعطاء رتبة لجميع البوتات
${prefix}hchannel |اخفاء الشات
${prefix}schannel |اضهار الشات المخفية
${prefix}clear |مسح الشات
${prefix}mute @user <time> |اعطاء العضو ميوت 
${prefix}unmute @user |لفك الميوت عن الشخص 
${prefix}kick @user <reason> |طرد الشخص من السيرفر
${prefix}ban @user <reason> |حضر الشخص من السيرفر
${prefix}mc |تقفيل الشات
${prefix}showAll|اضهار جميع الرومات في السيرفر
${prefix}hideAll|اخفاء جميع الرومات في السيرفر
${prefix}uc |فتح الشات
${prefix}dr | <مسح كل الرانكات <لازم تكون رانك البوت فوق كل الرانكات
${prefix}ct <name> | انشاء شات
${prefix}cv <name> | انشاء رووم فويس
${prefix}temp | لانشاء روم مؤقت
${prefix}delet <name> | مسح الشات او الرووم فويس
${prefix}deletecolors| إزالة جميع الالوان
${prefix}make <number> | ينشا لك الوان مع كم الوان تبي
${prefix}color <number> / لختيار لون
${prefix}setrole |  لوضع الأوتو رول
${prefix}dautorole |  لحذف الأوتو رول
${prefix}currentrole |  يعملك وش الأوتو رول
${prefix}setmessage |  يحط مسج يرسل لي الشخص في الخاص عند الدخول
${prefix}dmessage |  يحذف رسالة الترحيب في الخاص
$rolebc <everyone or @role>|  راسال رساله جماعيه لرتبه محدده
${prefix}setRole⇏autrole reaction

**
`);
        msg.edit(embe);
      });
      p.on("collect", async r => {
        await r.remove(message.author);
        let embe = new Discord.RichEmbed()
          .setColor("BLACK")
          .setAuthor(client.user.tag, client.user.avatarURL).setDescription(`
**${prefix}server|يعرض لك معلومات عن السيرفر
${prefix}bot|يعرض لك كل معلومات البوت 
${prefix}count|يعرض لك عدد الاشخاص بالسيرفر بدون بوتات
${prefix}invites|يعرض لك  عدد انفايتاتك بالسيرفر 
${prefix}invinfo <invitelink here>|لمعلومات عن الدعوه
 مثال : invinfo m82n8P
${prefix}invite-codes|يعرض لك روابط الانفايتات حكك في السيرفر 
${prefix}report|
${prefix}cal|اله حاسبة
${prefix}trans <language> <any thing>|يترجم لك الي تبيه من اي لغة
${prefix}short|يختصر لك رابط كبير الى رابط صغير
${prefix}tag|يكتب لك الكلمة بشكل جميل وكبير
${prefix}perms|يعرض لك برمشناتك بالسيرفر
${prefix}z5rf|يزخرف لك كلمة او جملة
${prefix}rooms|يعرض لك كل الرومات الي بالسيرفر مع عددها
${prefix}roles|يعرض لك كل الرانكات بالسيرفر بشكل جميل
${prefix}emojilist|يعرض لك كل الايموجيات الي بالسيرفر
${prefix}say|يكرر الكلام الي تكتبو
${prefix}image|صورة السيرفر
${prefix}members|عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص
${prefix}id|معلومات عنك
${prefix}bans |عدد الاشخاص المبندة 
${prefix}avatar|صورتك او صورة الي تمنشنو
${prefix}embed|يكرر الي تقولو بشكل حلو
${prefix}emoji <any things>|لتحويل اي كلمه تقولها الي ايموجي
${prefix}contact|ارسال اقتراح او لمراسلة صاحب البوت
${prefix}support|سيرفر الدعم
${prefix}inv|لدعوة البوت الى سيرفرك
${prefix}voicerank|لعرض تواجدك في الرومات الصوتيه
**
    `);
        msg.edit(embe);
      });
      m.on("collect", async r => {
        await r.remove(message.author);
        let embe = new Discord.RichEmbed()
          .setColor("BLACK")
          .setAuthor(client.user.tag, client.user.avatarURL).setDescription(`
**
${prefix}play ⇏ لتشغيل أغنية برآبط أو بأسم
${prefix}skip ⇏ لتجآوز الأغنية الحآلية
${prefix}pause ⇏إيقآف الأغنية مؤقتا
${prefix}resume ⇏ لموآصلة الإغنية بعد إيقآفهآ مؤقتا
${prefix}vol ⇏ لتغيير درجة الصوت 100 - 0
${prefix}stop ⇏ لإخرآج البوت من الروم
${prefix}np ⇏ لمعرفة الأغنية المشغلة حآليا
${prefix}queue ⇏ لمعرفة قآئمة التشغيل
${prefix}repeat ⇏ تكرار الاغنية 
**
`);
        msg.edit(embe);
      });
      s.on("collect", async r => {
        await r.remove(message.author);
        let embe = new Discord.RichEmbed()
          .setColor("BLACK")
          .setAuthor(client.user.tag, client.user.avatarURL).setDescription(`
**
${prefix}settings limitsban / لتغير عدد التبند  يمكنك تغيره
${prefix}settings limitskick / لتغير عدد الكيك يمكنك تغيره
${prefix}settings limitsroleD / لتغير عدد حذف الرتب يمكنك تغيره
${prefix}settings limitsroleC / لتغير عدد صنع الرتب يمكنك تغيره
${prefix}settings limitschannelD / لتغير عدد صنع الرومات يمكنك تغيره
${prefix}settings limitstime / لتغير وقت الاوامر  يمكنك تغيره
${prefix}setLog / لتحديد روم اللوق
${prefix}toggleLog / لتفعيل خاصية اللوق
${prefix}antibots off/تفعيل دخول البوتات
${prefix}antibots on/منع دخول البوتات
**
`);
        msg.edit(embe);
      });
      g.on("collect", async r => {
        await r.remove(message.author);
        let embe = new Discord.RichEmbed()
          .setColor("BLACK")
          .setAuthor(client.user.tag, client.user.avatarURL).setDescription(`
**${prefix}rps ⇏ حجر ورقة مقص
${prefix}speed ⇏ اسرع كتابة
${prefix}quas ⇏ اسئلة عامة
${prefix}fortnite⇏كود اسئلة فورتنناي
${prefix}drake⇏لعبة من نوع اخر
${prefix}cat⇏gif
${prefix}poke⇏gif
${prefix}pat⇏gif
${prefix}hug ⇏gif
${prefix}slap⇏gif
${prefix}cuddle⇏gif
${prefix}tickle⇏gif
${prefix}نكت ⇏ نكت 
${prefix}لعبة فكك ⇏ فكك
${prefix}عواصم عشوائي⇏عواصم
${prefix}لعبة كت تويت ⇏ كت تويت
${prefix}roll <number> ⇏ قرعة
${prefix}لو خيروك بطريقة حلوة ⇏ لو خيروك
${prefix}لعبة مريم ⇏ مريم
${prefix}فوائد ونصائح  ⇏ هل تعلم
${prefix}يعطيك عقابات قاسية ⇏ عقاب 
**
=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.
`);

        msg.edit(embe);
      });
      pl.on("collect", async r => {
        await r.remove(message.author);
        let embe = new Discord.RichEmbed()
          .setColor("BLACK")
          .setAuthor(client.user.tag, client.user.avatarURL).setDescription(`
**
${prefix}[create server Shop⇏ انشاء سيرفر شوب  
${prefix}server game room⇏ انشاء رولات العاب  
${prefix}server shop role⇏انشاء رولات شوب
${prefix}cerole⇏انشاء رولات عادية]
${prefix}start-giveaway
${prefix}reroll-giveaway
${prefix}end-giveaway
${prefix}1setReply⇏
${prefix}2setReply⇏
${prefix}3setReply⇏
${prefix}autoreply1 off⇏
${prefix}autoreply2 off⇏
${prefix}autoreply3 off⇏


**
`);
        msg.edit(embe);
      });
    });
  }
});
client.on("message", message => {
  if (!message.guild || message.author.bot) return;
  if (message.content.startsWith(prefix + "hideAll")) {
    message.guild.channels.forEach(channel => {
      channel.overwritePermissions(message.guild.id, {
        READ_MESSAGES: false
      });
    });
    message.channel.send("**Successfully**");
  } else if (message.content.startsWith(prefix + "showall")) {
    var arg = message.content.split(" ")[1];
    if (arg && arg == "all") {
      message.guild.channels.forEach(channel => {
        channel.overwritePermissions(message.guild.id, {
          READ_MESSAGES: true
        });
      });
    } else {
      var member = message.mentions.members.first();
      if (!member) return message.channel.send("**Mention a member.**");
      message.guild.channels.forEach(channel => {
        channel.overwritePermissions(member.id, {
          READ_MESSAGES: true
        });
      });
      message.channel.send("**Successfully**");
    }
  }
});
client.on("message", async message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (!message.content.toLowerCase().startsWith(prefix)) return;

  if (command == "deletecolors") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(`لاتمتلك الصلاحيات لفعل ذلك! ❌`);
    message.channel.send("جاري المسح..").then(async m => {
      await message.guild.roles.forEach(role => {
        if (/^\d+$/gi.test(role.name)) {
          role.delete();
        }
      });
      m.edit(`تم إزالة جميع الالوان.`);
    });
  }
});
client.on("message", message => {
  var prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix is \`${prefix}\``);
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "inv")) {
    if (!message.channel.guild)
      return message.channel.send("This Command is Just For Servers!");
    message.react("💖");
    var embed = new Discord.RichEmbed()
      .setTitle(">> ClickHere To Add" + ` ${client.user.username}` + " <<")
      .setURL(
        "https://discordapp.com/api/oauth2/authorize?client_id=" +
          `${client.user.id}` +
          "&permissions=8&scope=bot"
      ) //https://discordapp.com/api/oauth2/authorize?client_id=637757928673247262&permissions=8&scope=bot
      .setTimestamp()
      .setFooter(`Requested By | ${message.author.username}`)
      .setColor("RANDOM");
    message.author.send({ embed });
  }
});
client.codes = require("./code.json");

client.on("guildMemberAdd", member => {
  //هذي يوم يستنى الشخص يدخل السيرفر عشان يعطيه الرتبة
  console.log(member.user.username + " Joined " + member.guild.name);
  if (client.codes[member.guild.id] === undefined)
    return console.log("Use the setrole command");
  let role = client.codes[member.guild.id].role;
  let roletogive = member.guild.roles.get(`${role}`);
  if (!roletogive)
    return console.log(
      `please use ${prefix}setrole ROLEMENTION or make sure that the bot role is higher than the auto role`
    );
  client.guilds
    .get(`${client.codes[member.guild.id].guild}`)
    .member(member)
    .addRole(roletogive);
  let Hello = client.codes[member.guild.id].message;
  if (Hello === null) return;
  member
    .send(`${Hello}`)
    .catch(err => console.log(`No message to send! or ${err}`));
});
client.on("message", async message => {
  let messageArray = message.content.split(" ");
  let msg = message;
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (!message.content.startsWith(prefix)) return;

  if (cmd === `${prefix}setrole`) {
    // هذا الي يحطلك الأوتو رول ويخزنه بملف جسون الي سويناه في البداية بدونه م رح يمديك تستخدم اي كوماند ثاني
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**You cannot use this command , you do not have Administration**"
      ); //هذي بيخليها لو ما معه ادمنستريشن ذي
    var role =
      message.mentions.roles.first() || message.guild.roles.get(args[0]);
    if (!role) return message.channel.send("Please specify a role ...");
    client.codes[message.guild.id] = {
      message: null,
      role: role.id,
      guild: message.guild.id
    };
    fs.writeFile("./code.json", JSON.stringify(client.codes, null, 4), err => {
      console.log(err);
      message.channel.send(`Done!`);
    });
  }
  if (cmd === `${prefix}dautorole`) {
    //هذا يمسحلك الأوتو رول
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**You cannot use this command , you do not have Administration**"
      ); //هذي بيخليها لو ما معه ادمنستريشن بيرسله الرسالة ذي
    if (client.codes[message.guild.id] === undefined)
      return message.channel.send("**There's no autorole to delete**");
    delete client.codes[message.guild.id];
    fs.writeFile("./code.json", JSON.stringify(client.codes, null, 4), err => {
      console.log(err);
    });
    message.channel.send("Done! autorole deleted =)");
  }
  if (cmd === `${prefix}currentrole`) {
    //هذا يعلمك وش الأوتو رول الحالي
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**You cannot use this command , you do not have Administration**"
      ); //هذي بيخليها لو ما معه ادمنستريشن بيرسله الرسالة ذي
    if (client.codes[message.guild.id] === undefined)
      return message.channel.send(
        `**There's no current autorole use \`${prefix}setrole\` to set one! **`
      );
    var acode = client.codes[message.guild.id].role;
    let myRole = message.guild.roles.get(acode);
    message.channel.send(`**Current Auto role is:** ${myRole.name}`);
  }

  if (cmd === `${prefix}setmessage`) {
    //هذا الكوماند يحطلك مسج تلقائي يجي للخاص حق الشخص الي دخل
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**You cannot use this command , you do not have Administration**"
      ); //هذي بيخليها لو ما معه ادمنستريشن بيرسله الرسالة ذي
    let azoqzmsg = args.join(" ");
    if (!azoqzmsg)
      return message.channel.send(
        `**There is no message ! But if you wish to delete the auto message please use **\`${prefix}dmessage\``
      );
    if (client.codes[message.guild.id] === undefined)
      return message.channel.send(
        `**I\m Sorry but you have to use \`${prefix}setrole\` to be able to use this**`
      );
    client.codes[message.guild.id].message = azoqzmsg;
    fs.writeFile("./code.json", JSON.stringify(client.codes, null, 4), err => {
      console.log(err);

      message.channel.send(`Done!`);
    });
  }
  if (cmd === `${prefix}dmessage`) {
    //هذا الكوماند يمسحلك الأوتو مسج
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**You cannot use this command , you do not have Administration**"
      ); //هذي بيخليها لو ما معه ادمنستريشن بيرسله الرسالة ذي
    if (client.codes[message.guild.id] === undefined)
      return message.channel.send(
        `__**Sorry There's no message to deleted**__`
      );
    delete client.codes[message.guild.id].message;
    fs.writeFile("./code.json", JSON.stringify(client.codes, null, 4), err => {
      message.channel.send(`Done!`);
    });
  }
});
client.on("message", message => {
  var prefix = "$"; // البريفكس
  if (message.content.startsWith(prefix + "server")) {
    // الامر
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.reply(`**هذه الخاصية للادارة فقط** ❎ `);
    if (!message.channel.guild) return;
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField("**🆔 Server ID:**", message.guild.id, true)
      .addField(
        "**📅 Created On**",
        message.guild.createdAt.toLocaleString(),
        true
      )
      .addField(
        "**👑 Owned by**",
        `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`
      )
      .addField("**👥 Members**", `[${message.guild.memberCount}]`, true)
      .addField(
        "**💬 Channels **",
        `**${message.guild.channels.filter(m => m.type === "text").size}**` +
          " text | Voice  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField("**🌍 Others **", message.guild.region, true)
      .addField(
        "**🔐 Roles **",
        `**[${message.guild.roles.size}]** Role `,
        true
      )
      .setColor("#000000");
    message.channel.sendEmbed(embed);
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle("``INFO `` ")
        .addField(
          "``My Ping``",
          [`${Date.now() - message.createdTimestamp}` + "MS"],
          true
        )
        .addField(
          "``RAM Usage``",
          `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`,
          true
        )
        .addField("``servers``", [client.guilds.size], true)
        .addField("``channels``", `[ ${client.channels.size} ]`, true)
        .addField("``Users``", `[ ${client.users.size} ]`, true)
        .addField("``My Name``", `[ ${client.user.tag} ]`, true)
        .addField("``My ID``", `[ ${client.user.id} ]`, true)
        .addField("``My Prefix``", `[ ${prefix} ]`, true)
        .addField("``My Language``", `[ Java Script ]`, true)
        .addField("``Bot Version``", `[ 0.0.5 ]Beta`, true)
        .addField("``My owners``", `<@565913860884660249> <@298230144357761032> <@352173490276663307> `, true)
        .setFooter("By | InFeRnO Team")
    });
  }
});
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == prefix + "count")
    message.reply(`**${message.guild.memberCount}**`);
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author;
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      message.channel.send(`${user} has ${inviteCount} invites.`);
    });
  }
});
client.on("message", async message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "invite-codes")) {
    let guild = message.guild;
    var codes = [""];
    message.channel.send(
      ":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**"
    );
    guild
      .fetchInvites()
      .then(invites => {
        invites.forEach(invite => {
          if (invite.inviter === message.author) {
            codes.push(`discord.gg/${invite.code}`);
          }
        });
      })
      .then(m => {
        if (codes.length < 0) {
          var embed = new Discord.RichEmbed()
            .setColor("#000000")
            .addField(
              `Your invite codes in ${message.guild.name}`,
              `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`
            );
          message.author.send({ embed: embed });
          return;
        } else {
          var embed = new Discord.RichEmbed()
            .setColor("#000000")
            .addField(
              `Your invite codes in ${message.guild.name}`,
              `Invite Codes:\n${codes.join("\n")}`
            );
          message.author.send({ embed: embed });
          return;
        }
      });
  }
});
client.on("message", msg => {
  if (msg.content.startsWith(prefix + "cal")) {
    let args = msg.content.split(" ").slice(1);
    const question = args.join(" ");
    if (args.length < 1) {
      msg.reply("Specify a equation, please.");
    } else {
      let answer;
      try {
        answer = math.eval(question);
      } catch (err) {
        msg.reply(`Error: ${err}`);
      }

      const embed = new Discord.RichEmbed()
        .addField("**Input**: ", `**${question}**`, true)
        .addField("**Output**: ", `**${answer}**`, true);
      msg.channel.send(embed).catch(console.error);
    }
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "trans")) {
    let toTrans = message.content.split(" ").slice(1);
    let language;

    language =
      toTrans[toTrans.length - 2] === "to"
        ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim()
        : undefined;
    if (!language) {
      return message.reply(
        `Please supply valid agruments.\n**Example** \`${prefix}trans [text] to [language]\``
      );
    }
    let finalToTrans = toTrans
      .slice(toTrans.length - toTrans.length, toTrans.length - 2)
      .join(" ");
    translate(finalToTrans, { to: language })
      .then(res => {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: "translator",
              icon_url: client.user.avatarURL
            },
            fields: [
              {
                name: "Translator",
                value: `**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL
            }
          }
        });
      })
      .catch(console.error);
  }
});
client.on("message", async message => {
  const prefix = "$"; // البرفكس حقك

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === "insta") {
    const name = args.join(" ");

    if (!name) {
      return message
        .reply(`:x: **-| Please type the name of the person in insta**`)
        .then(m => m.delete(5000));
    }

    const url = `https://instagram.com/${name}/?__a=1`;
    const res = await fetch(url).then(url => url.json());

    if (!res.graphql.user.username) {
      return message
        .reply(`:x: **-| لا يوجد احد بهذا الاسم**`)
        .then(m => m.delete(5000));
    }

    const account = res.graphql.user;

    const embed = new RichEmbed()
      .setColor("RANDOM")
      .setTitle(account.full_name)
      .setURL(account.external_url_linkshimmed)
      .setThumbnail(account.profile_pic_url_hd)
      .addField(
        "معلومات البروفايل",
        stripIndents`**- Username:** \`${account.username}\`
        **- Full name:** ${account.full_name}
        **- Bio:** \`${
          account.biography.length == 0 ? "Nothing" : account.biography
        }\`
        **- Posts:** \`${account.edge_owner_to_timeline_media.count}\`
        **- Followers:** \`${account.edge_followed_by.count}\`
        **- Following:** \`${account.edge_follow.count}\`
        **- Account Private?:** ${account.is_private ? "Yes 🔒" : "No 🔓"}  
  `,
        true
      );

    message.channel.send(embed);
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "tag")) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) return message.reply("مرجو كتابة نص الدي تريد");

    figlet(args.join(" "), (err, data) => {
      message.channel.send("```" + data + "```");
    });
  }
});
client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "google")) {
    const input = args.join(" ");

    google({ query: input, disableConsole: true })
      .then(results => {
        return message.channel.send(
          `\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`
        );
      })
      .catch(error => {
        if (error) throw error;
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "perms")) {
    if (!message.channel.guild) return;
    var perms = JSON.stringify(
      message.channel.permissionsFor(message.author).serialize(),
      null,
      4
    );
    var zPeRms = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(":tools: Permissions")
      .addField("Your Permissions:", perms);

    message.channel.send({ embed: zPeRms });
  }
});
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "z5rf") {
    let say = new Discord.RichEmbed().setTitle("Text emboss :");

    message.reply(`\n ${zalgo(args.join(" "))}`);
  }
});

client.on("message", message => {
  if (message.content === prefix + "rooms") {
    if (message.author.bot) return;
    if (!message.guild) return;

    var channels = message.guild.channels
      .map(channels => `${channels.name}, `)
      .join(" ");
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`${message.guild.name}`, `**Rooms:white_check_mark:**`)
      .addField(
        ":arrow_down: Rooms Number. :heavy_check_mark:",
        `** ${message.guild.channels.size}**`
      )

      .addField(
        ":arrow_down:Rooms  Name. :heavy_check_mark::",
        `**[${channels}]**`
      );
    message.channel.sendEmbed(embed);
  }
});
var AsciiTable = require("ascii-data-table").default;
client.on("message", message => {
  if (message.content.startsWith(prefix + "roles")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`");
    var ros = message.guild.roles.size,
      data = [["Rank", "RoleName"]];
    for (let i = 0; i < ros; i++) {
      if (message.guild.roles.array()[i].id !== message.guild.id) {
        data.push([
          i,
          `${message.guild.roles
            .filter(r => r.position == ros - i)
            .map(r => r.name)}`
        ]);
      }
    }
    let res = AsciiTable.table(data);

    message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "emojilist")) {
    const List = message.guild.emojis.map(e => e.toString()).join(" ");

    const EmojiList = new Discord.RichEmbed()
      .setTitle("? Emojis")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setColor("RANDOM")
      .setDescription(List)
      .setFooter(message.guild.name);
    message.channel.send(EmojiList);
  }
});
client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  // +say
  if (command === "say") {
    if (!message.channel.guild)
      return message.channel
        .send("**هذا الأمر فقط للسيرفرات**")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`");
    message.delete();
    message.channel.sendMessage(args.join(" "));
  }

  if (command == "embed") {
    if (!message.channel.guild)
      return message.channel
        .send("**هذا الأمر فقط للسيرفرات**")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "**للأسف لا تمتلك صلاحية** `MANAGE_MESSAGES`"
      );
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor(0x23b2d6);
    message.channel.sendEmbed(say);
    message.delete();
  }
});
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.content === prefix + "image") {
    const embed = new Discord.RichEmbed()

      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
      .setAuthor(message.author.username, message.guild.iconrURL)
      .setColor(0x164fe3)
      .setImage(message.guild.iconURL)
      .setURL(message.guild.iconrURL)
      .setTimestamp();

    message.channel.send({ embed });
  }
});

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.channel.guild) return;

  if (message.content === prefix + "members") {
    const embed = new Discord.RichEmbed().setDescription(`**Members info 
:green_heart: online:   ${
      message.guild.members.filter(m => m.presence.status == "online").size
    }
:heart:  dnd:       ${
      message.guild.members.filter(m => m.presence.status == "dnd").size
    }
:yellow_heart:  idle:     ${
      message.guild.members.filter(m => m.presence.status == "idle").size
    }
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount -
      message.guild.members.filter(m => m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m => m.user.bot).size} **`);
    message.channel.send({ embed });
  }
});
client.on("message", message => {
  var args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "id")) {
    var year = message.author.createdAt.getFullYear();
    var month = message.author.createdAt.getMonth();
    var day = message.author.createdAt.getDate();
    var men = message.mentions.users.first();
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "") {
      var z = message.author;
    } else {
      var z = message.mentions.users.first();
    }

    let d = z.createdAt;
    let n = d.toLocaleString();
    let x;
    let y;

    if (z.presence.game !== null) {
      y = `${z.presence.game.name}`;
    } else {
      y = "No Playing...";
    }
    if (z.bot) {
      var w = "BOT";
    } else {
      var w = "MEMBER";
    }
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(`**INFO** ${z.username}`)
      .addField("`Your Name`", `**<@` + `${z.id}` + `>**`, true)
      .addField("`ID`", "**" + `${z.id}` + "**", true)
      .addField("`Status`", "**" + y + "**", true)
      .addField("`Acount Type`", "**" + w + "**", true)
      .addField("`Your Tag`", "**#" + `${z.discriminator}**`, true)
      .addField("`Your account created in`", year + "-" + month + "-" + day)
      .addField(
        "`Entered the server in`",
        message.member.joinedAt.toLocaleString()
      )
      .addField("`Last Message`", message.author.lastMessage)

      .setThumbnail(`${z.avatarURL}`)
      .setFooter(message.author.username, message.author.avatarURL);

    message.channel.send({ embed });
    if (!message) return message.reply("**ضع المينشان بشكل صحيح  ? **");
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "bans")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`");
    message.guild
      .fetchBans()
      .then(bans =>
        message.channel.send(`Number of banned persons **${bans.size}** `)
      );
  }
});
client.on("message",message => {
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar")){
const mention = message.mentions.users.first()

if(!mention) return console.log("") 
let embed = new Discord.RichEmbed()
.setColor("BLACK")
.setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
.setTitle("Avatar Link")
.setURL(`${mention.avatarURL}`)
.setImage(`${mention.avatarURL}`)
.setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
    message.channel.send(embed)
}
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar server")) {
    let doma = new Discord.RichEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1]
var avt = args || message.author.id;    
    client.fetchUser(avt).then(user => {
     avt = user;
  let embed = new Discord.RichEmbed() 
  .setColor("BLACK")
  .setAuthor(`${avt.tag}`, avt.avatarURL)
  .setTitle("Avatar Link")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
    })
  }
})

const mapping = {
  " ": "   ",
  "0": ":zero:",
  "1": ":one:",
  "2": ":two:",
  "3": ":three:",
  "4": ":four:",
  "5": ":five:",
  "6": ":six:",
  "7": ":seven:",
  "8": ":eight:",
  "9": ":nine:",
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": ":asterisk:"
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "emoji")) {
    let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send("You must provide some text to emojify!");
    }

    message.channel.send(
      args
        .join(" ")
        .split("")
        .map(c => mapping[c] || c)
        .join("")
    );
  }
});
client.on("message", message => {
  if (message.content === "$support") {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#9B59B6")
      .addField(
        " ** :gear: Server Support :gear: **",
        "  **https://discord.gg/K73Mtcu**"
      );

    message.channel.sendEmbed(embed);
  }
});
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "contact")) {
    if (!message.channel.guild) return;

    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");

    client.users
      .get("565913860884660249")
      .send(
        "\n" +
          "**" +
          "? السيرفر :" +
          "**" +
          "\n" +
          "**" +
          "» " +
          message.guild.name +
          "**" +
          "\n" +
          "**" +
          " ? المرسل : " +
          "**" +
          "\n" +
          "**" +
          "» " +
          message.author.tag +
          "**" +
          "\n" +
          "**" +
          " ? الرسالة : " +
          "**" +
          "\n" +
          "**" +
          args +
          "**"
      );

    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(
        ":mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح"
      )
      .setThumbnail(message.author.avatarURL)
      .setFooter("By : Venom");

    message.channel.send(embed);
  }
});
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send(
          "``لاستخدام الأمر اكتب هذه الأمر : " + prefix + "اسحب [USER]``"
        );
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(
              `لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك? `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name}`)
            .setColor("RANDOM")
            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "``لا تستطيع سحب " +
              message.mentions.members.first() +
              " `يجب ان يكون هذه العضو في روم صوتي`"
          );
        }
      } else {
        message.channel.send(
          "**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**"
        );
      }
    } else {
      message.react("?");
    }
  }
});
client.on("message", message => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "rolebc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let args = message.content.split(" ").slice(2);
    var codes = args.join(" ");

    if (!codes) {
      message.channel.send(
        `قم بكتابة الرسالة | ${prefix}rolebc @everyone message`
      );
      return;
    }

    var role = message.mentions.roles.first();
    if (!role) {
      message.reply("لا توجد رتبة بهذا الاسم");
      return;
    }
    message.guild.members
      .filter(m => m.roles.get(role.id))
      .forEach(n => {
        n.send(
          "**" +
            "السيرفر :" +
            "\n" +
            `${message.guild.name}` +
            "\n" +
            "المرسل :" +
            "\n" +
            `${message.author.tag}` +
            "\n" +
            "الرسالة :" +
            "\n" +
            `${codes}` +
            "**"
        );
      });
    message.channel.send(
      `لقد تم ارسال هذه الرسالة الى ${
        message.guild.members.filter(m => m.roles.get(role.id)).size
      } عضو`
    );
  }
});
client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix + "role")) {
    let params = msg.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    if (!params[0])
      return msg.channel.send(
        `**syntax: ${prefix}role <all/humans/bots/@user> <name role/@role>`
      );
    if (params[0] === "all") {
      if (!params[1])
        return msg.channel.send(
          `**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role all <@role / name role>**`
        );
      let role =
        msg.mentions.roles.first() ||
        msg.guild.roles.find(r =>
          r.name.toLowerCase().startsWith(params[1].toLowerCase())
        );
      if (!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`);
      msg.guild.members.forEach(m => {
        if (m.roles.some(r => r.id == role.id)) return;
        m.addRole(role);
      });
      msg.channel.send(`**done give all role @${role.name}**`);
    } else if (params[0] === "bots") {
      if (!params[1])
        return msg.channel.send(
          `**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role bots <@role / name role>**`
        );
      let role =
        msg.mentions.roles.first() ||
        msg.guild.roles.find(r =>
          r.name.toLowerCase().startsWith(params[1].toLowerCase())
        );
      if (!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`);
      let bots = msg.guild.members.filter(m => m.user.bot);
      bots.forEach(bot => {
        if (bot.roles.some(r => r.id == role.id)) return;
        bot.addRole(role);
      });
      msg.channel.send(`**done give all bots role @${role.name}**`);
    } else if (params[0] === "humans") {
      if (!params[1])
        return msg.channel.send(
          `**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role humans <@role / name role>**`
        );
      let role =
        msg.mentions.roles.first() ||
        msg.guild.roles.find(r =>
          r.name.toLowerCase().startsWith(params[1].toLowerCase())
        );
      if (!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`);
      let humans = msg.guild.members.filter(m => !m.user.bot);
      humans.forEach(h => {
        if (h.roles.some(r => r.id == role.id)) return;
        h.addRole(role);
      });
      msg.channel.send(`**done give all humans role @${role.name}**`);
    } else {
      if (!params[1])
        return msg.channel.send(
          `**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role @user <@role / name role>**`
        );
      let role =
        msg.mentions.roles.first() ||
        msg.guild.roles.find(r =>
          r.name.toLowerCase().startsWith(params[1].toLowerCase())
        );
      if (!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`);
      let userID = params[0].slice(2, -1);
      let user = msg.guild.members.get(userID);
      if (!user) return;
      user.addRole(role);
      msg.channel.send(`**Done give ${user} @${role.name}**`);
    }
  }
});
client.on("error", err => {
  console.log(err);
});
const members = JSON.parse(fs.readFileSync("./members.json")) || {};
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.forEach(g => {
    if (!members[g.id]) members[g.id] = {};
  });
});

client.on("guildMemberRemove", member => {
  let roles = [];
  member.roles.forEach(r => roles.push(r.id));
  members[member.guild.id][member.id] = roles;
  saveChanges();
});
client.on("guildMemberAdd", member => {
  if (members[member.guild.id][member.id] !== undefined) {
    member.addRoles(
      members[member.guild.id][member.id],
      "Returning roles after leaving"
    );
    members[member.guild.id][member.id] = [];
  }
  saveChanges();
});
function saveChanges() {
  fs.writeFileSync("./members.json", JSON.stringify(members, null, 4));
}

client.on("message", message => {
  if (message.content === prefix + "hchannel") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("You Dont Have Perms :x:");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: false
    });
    message.channel.send("Channel Hided Successfully ! :white_check_mark:  ");
  }
});
client.on("message", message => {
  if (message.content === prefix + "schannel") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(":x:");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: true
    });
    message.channel.send("Done  ");
  }
});

// لا تنسى تحمل البكج npm i to-time

client.on("message", message => {
  if (message.content.startsWith(prefix + "mutevoice")) {
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel
        .sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message
        .reply("**I Don't Have `MUTE_MEMBERS` Permission**")
        .then(msg => msg.delete(6000));

    if (message.mentions.users.size === 0) {
      return message.reply("✔منشن الشخص لأعطائه الميوت😉");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if (!muteMember) {
      return message.reply("✅مرة أخرى✔");
    }
    muteMember.setMute(true);
    if (muteMember) {
      message.channel.sendMessage("تم أعطائه الميوت بنجاح|😉");
    }
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "unmutevoice")) {
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel
        .sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message
        .reply("**I Don't Have `MUTE_MEMBERS` Permission**")
        .then(msg => msg.delete(6000));

    if (message.mentions.users.size === 0) {
      return message.reply("🔱منشن الشخص لفك الميوت عنه😊");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if (!muteMember) {
      return message.reply("😉عيد مرة أخرى😊");
    }
    muteMember.setMute(false);
    if (muteMember) {
      message.channel.sendMessage("😉تم فك الميوت بنجاح✔");
    }
  }
});


client.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if (!reason) return message.reply("**اكتب سبب الطرد**");
    if (!message.guild.member(user).kickable)
      return message.reply(
        "**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**"
      );

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**Reason:**", "**[ " + `${reason}` + " ]**");
    message.channel.send({
      embed: kickembed
    });
  }
});

client.on("message", message => {
  if (message.content === prefix + "mc") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" **__ليس لديك صلاحيات__**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**__تم تقفيل الشات__ :white_check_mark: **");
      });
  }
  //FIRE BOT
  if (message.content === prefix + "uc") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("**__ليس لديك صلاحيات__**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**__تم فتح الشات__:white_check_mark:**");
      });
  }
});
client.on("message", message => {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "ct") {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
    let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(" "), "text");
    message.channel.sendMessage("تـم إنـشاء روم كـتابـي");
  }
});
client.on("message", message => {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "cv") {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
    let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(" "), "voice");
    message.channel.sendMessage("تم انشاء روم صوتى");
  }
});
client.on("message", message => {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "delete") {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
    let args = message.content.split(" ").slice(1);
    let channel = message.client.channels.find("name", args.join(" "));
    if (!channel)
      return message
        .reply("**There is no room like this name -_-**")
        .catch(console.error);
    channel.delete();
  }
});
client.on("message", bz => {
  let args = bz.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (bz.content.startsWith(prefix + "make")) {
    if (!args) return bz.channel.send("`Please Select Number!`");
    if (!bz.member.hasPermission("MANAGE_ROLES"))
      return bz.channel.sendMessage("`** `[MANAGE_ROLES]` !**");
    bz.channel.send(`**Created __${args}__ Colors**`);
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < `${parseInt(args) + 1}`; x++) {
      bz.guild.createRole({ name: x, color: "RANDOM" });
    }
  }
});
client.on("message", message => {
  if (message.content.toLowerCase().startsWith(prefix + `topservers`)) {
    const top = client.guilds
      .sort((a, b) => a.memberCount - b.memberCount)
      .array()
      .reverse();
    message.channel.send(
      `**Top 10 Servers : **\n1. **${top[0].name}**: ${top[0].memberCount} \n2. **${top[1].name}**: ${top[1].memberCount}.\n3. **${top[2].name}**: ${top[2].memberCount}.\n4. **${top[3].name}**: ${top[3].memberCount}.\n5. **${top[4].name}**: ${top[4].memberCount}.\n6. **${top[5].name}**: ${top[5].memberCount}.\n7. **${top[6].name}**: ${top[6].memberCount}.\n8. **${top[7].name}**: ${top[7].memberCount}.\n9. **${top[8].name}**: ${top[8].memberCount}.\n10. **${top[9].name}**: ${top[9].memberCount} .`
    );
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {
      if (uptime >= 8.64e7) {
        days++;
        uptime -= 8.64e7;
      } else if (uptime >= 3.6e6) {
        hours++;
        uptime -= 3.6e6;
      } else if (uptime >= 60000) {
        minutes++;
        uptime -= 60000;
      } else if (uptime >= 1000) {
        seconds++;
        uptime -= 1000;
      }

      if (uptime < 1000) notCompleted = false;
    }

    message.channel.send(
      "`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`"
    );
  }
});

client.on("message", function(message) {
  if (message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageRPS = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    let arrayRPS = ["**# - Rock**", "**# - Paper**", "**# - Scissors**"];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
      .addField("Rock", "🇷", true)
      .addField("Paper", "🇵", true)
      .addField("Scissors", "🇸", true);
    message.channel.send(RpsEmbed).then(msg => {
      msg.react("🇷");
      msg.react("🇵");
      msg
        .react("🇸")
        .then(() => msg.react("🇷"))
        .then(() => msg.react("🇵"))
        .then(() => msg.react("🇸"));
      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "🇷" && user.id === message.author.id;
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "🇵" && user.id === message.author.id;
      let reaction3Filter = (reaction, user) =>
        reaction.emoji.name === "🇸" && user.id === message.author.id;
      let reaction1 = msg.createReactionCollector(reaction1Filter, {
        time: 12000
      });

      let reaction2 = msg.createReactionCollector(reaction2Filter, {
        time: 12000
      });
      let reaction3 = msg.createReactionCollector(reaction3Filter, {
        time: 12000
      });
      reaction1.on("collect", r => {
        message.channel.send(result);
      });
      reaction2.on("collect", r => {
        message.channel.send(result);
      });
      reaction3.on("collect", r => {
        message.channel.send(result);
      });
    });
  }
});
const speed = [
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429298994078810127/a90c6b270eb8bb2e.png",
    answers: ["البرازيل"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429298996385677312/93b0c6f963ca78cc.png",
    answers: ["السعودية"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429298996130086934/341960d3e3e1daad.png",
    answers: ["القسطنطينية"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429298998172450816/5c70f0d2a02f741a.png",
    answers: ["النهاية"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
    answers: ["امازون"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
    answers: ["جافاسكربت"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
    answers: ["سهله مو صعبه"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
    answers: ["طبق رطب مرق بقر"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
    answers: ["متجر"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
    answers: ["شجرة الأوغيري"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
    answers: ["عش العصفور"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
    answers: ["قم بكتابة"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
    answers: ["كانيكي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
    answers: ["ليوبليانا"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
    answers: ["هواوي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
    answers: ["ياخرا"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
    answers: ["يوم الخميس"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/DO_YOU_KNOW_THE_WAY.png",
    answers: ["DO YOU KNOW THE WAY"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
    answers: ["الأرض"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
    answers: ["البوابة"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
    answers: ["الجمل ابو راسين"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
    answers: ["الحوت الأزرقء"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
    answers: ["القارب المكسور"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
    answers: ["المدرسة"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
    answers: ["اليابان"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
    answers: ["بلايستايشن"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
    answers: ["جزر القمر"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
    answers: ["حشيش"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
    answers: ["سوبراشي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
    answers: ["قوتشي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
    answers: ["ايفون"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
    answers: ["تيستا لاغوسا"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
    answers: ["بسكوت ابو ولد"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
    answers: ["تكأكأتم"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
    answers: ["الجملة المفيدة"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
    answers: ["الأوسكار"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
    answers: ["كنت امشي وأمشي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
    answers: ["لااااق بوتء"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
    answers: ["ابو ناصر سرى ليله"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
    answers: ["عدد اللي برمجوني 2"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
    answers: ["Dark_Neet"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
    answers: ["بابا سنفور متعاطي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
    answers: ["ميرندا حمضيات يلد"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
    answers: ["هل الدمع من عينه"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
    answers: ["طارت الطياره طارت"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
    answers: ["أنا فوق راسي ريشه"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
    answers: ["فريق النجمة"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
    answers: ["خالد عبدالرحمن"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
    answers: ["حبيت مره من قلبي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
    answers: ["كرستيانو يزق"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
    answers: ["أنت قمر يا قمر"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
    answers: ["انا اجمل مخلوق"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
    answers: ["دونت تاتش"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
    answers: ["توم وجيري"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
    answers: ["دباب اربع كفرات"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
    answers: ["القرش الأسودد"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
    answers: ["ددسن موديل 85"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
    answers: ["الحارثيء"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
    answers: ["عزازي مسرع"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
    answers: ["جاكي شاان"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
    answers: ["دارك نت"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
    answers: ["فانتاستيك"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
    answers: ["زباله متنقلة"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
    answers: ["اكس بوكس يلد"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
    answers: ["بكسل يالوصخخ"]
  }
];

client.on("message", message => {
  if (![message.author.id]) [message.author.id] = {};
  if (!message.guild) return;
  let id = message.author.id;
  if (spee[id] && new Date().getTime() - spee[id] < 15 * 1000) {
    let r = new Date().getTime() - spee[id];
    r = 15 * 1000 - r;
  }
  if (message.content == prefix + "speed") {
    try {
    } catch (e) {}

    if (!message.channel.guild)
      return message
        .reply("**هذا الأمر للسيرفرات فقط**")
        .then(m => m.delete(3000));

    const item = speed[Math.floor(Math.random() * speed.length)];
    const filter = response => {
      return item.answers.some(
        answer => answer.toLowerCase() === response.content.toLowerCase()
      );
    };
    message.channel.send("**Game is Start now...!**").then(msg => {
      const embed = new Discord.RichEmbed()
        .setColor("0054dd")
        .setAuthor(`? |You have »15« seconds to type the word`)
        .setImage(`${item.type}`)
        .setFooter(`${message.author.tag}`, message.author.avatarURL);

      msg.channel.send(embed).then(() => {
        message.channel
          .awaitMessages(filter, {
            maxMatches: 1,
            time: 15000,
            errors: ["time"]
          })
          .then(collected => {
            const sh = new Discord.RichEmbed()
              .setColor("04791c")
              .setDescription("**? |Good Job +1P**")
              .addField(`Type ${prefix}mypoints`, "To Show ur Points", true)
              .setFooter(message.author.username, message.author.avatarURL);
            message.channel.sendEmbed(sh);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
          })
          .catch(collected => {
            // في حال لم يقم أحد بالإجابة
            message.channel.send(`?? |**Time Is End**`);
          });
      });
    });
    spee[id] = new Date().getTime();
  }
});
client.on("guildCreate", guild => {
  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("Click Here To Add Bot .!")
    .setURL(
      "https://discordapp.com/oauth2/authorize?client_id=565290611725434921&scope=bot&permissions=2146958591"
    ).setDescription(`**
  New Server Add  © ?
اسم السيرفر: ${guild.name}
صاحب السيرفر: ${guild.owner}**`);
  client.channels.get("572745247948537866").sendEmbed(embed);
});
client.on("guildDelete", guild => {
  const embed = new Discord.RichEmbed()
    .setColor("GOLD")
    .setTitle("Click Here To Add Bot .!")
    .setURL(
      "https://discordapp.com/oauth2/authorize?client_id=565290611725434921&scope=bot&permissions=2146958591"
    ).setDescription(`**
  Server Kicked  © :cry:
اسم السيرفر: ${guild.name}
صاحب السيرفر: ${guild.owner}**`);
  client.channels.get("572745247948537866").sendEmbed(embed);
});
var type = [
  {
    type: "ما هو أصل كلمة أطلس التي تطلق على كتاب الخرائط ؟",
    answers: ["يونانى"]
  },
  {
    type: "ما هو يوم الحج الأكبر؟",
    answers: ["يوم النحر"]
  },
  {
    type: "ما هو اكبر خليج في العالم ؟",
    answers: ["خليج المكسيك"]
  },
  {
    type: "ما هو اسم بيت الدجاج ؟",
    answers: ["قن"]
  },
  {
    type: "ما هو أول جامع أقيم في مصر ؟",
    answers: ["جامع عمرو بن العاص"]
  },
  {
    type: "ما هو أطول نهر في آسيا ؟",
    answers: ["اليانجستي"]
  },
  {
    type: "ما هو أقرب كوكب إلى الشمس ؟",
    answers: ["عطارد"]
  },
  {
    type: "ما هو الحيوان الذي يُسمى البهنس ؟",
    answers: ["الاسد"]
  },
  {
    type: "أمشي بدون قدمين وأطير بلا جناحين وأبكي بدون عينين فمن أنا ؟",
    answers: ["السحاب"]
  },
  {
    type: "ما هي السورة التي تعدل ثلث القرآن ؟",
    answers: ["الإخلاص"]
  },
  {
    type: "ما هي مدينة التلال السبع ؟",
    answers: ["روما"]
  },
  {
    type: "ما هي الدولة العربية التي يمر بها خط الاستواء ؟",
    answers: ["الصومال"]
  },
  {
    type: "ماذا يسمى من لايقرأ ولايكتب ؟",
    answers: ["كانيكي"]
  },
  {
    type: "ماذا يطلق على الشخص الذى لا يعرف القراه ولا الكتابه ؟",
    answers: ["أمي"]
  },
  {
    type: "ماهو المكون الرئسي للزجاج ؟",
    answers: ["الرمل"]
  },
  {
    type: "من هي المراه الوحيده التي ذكر اسمها في القرآن الكريم ؟",
    answers: ["مريم"]
  },
  {
    type: "كم عدد السجدات في القرآن الكريم ؟",
    answers: ["15"]
  },
  {
    type: "أي من اعضاء الجسم يستهلك 40% من أوكسجين الدم ؟",
    answers: ["المخ"]
  },
  {
    type: "من هو اول نبي بعث لبني اسرائيل ؟",
    answers: ["موسى"]
  },
  {
    type: "أي من الاماكن لم يصبها زلزال يوم القيامه ؟",
    answers: ["المساجد"]
  },
  {
    type: "ما الحيوان الذي عنده أعلى نسبة ضغط دم ؟",
    answers: ["الزرافة"]
  },
  {
    type: "له رأس ولا عين له ؟",
    answers: ["الدبوس"]
  },
  {
    type:
      "من الذي استعمل الأشعة الشمسية كسلاح في الحرب وقضى بها على الأسطول الروماني حينما حاول غزو بلاده ؟",
    answers: ["أرشميدس"]
  },
  {
    type: "ما هو الشيء الذي خلقه الله ونكره ؟",
    answers: ["صوت الحمير"]
  },
  {
    type:
      "ما هو الحيوان الذي يموت إذا فتحت فمه لأكثر من دقيقة حيث أنه لا يتنفس وفمه مفتوح ؟",
    answers: ["الضفدع"]
  },
  {
    type:
      "ما هو الحيوان الذي ينتحر عندما يُلْقى بنفسه فى الماء وذلك لعدم استطاعته العوم ؟",
    answers: ["الخـنـزيــر"]
  },
  {
    type: "ما هو المرض الذي أُطْـلِـقَ عليه الموت الأسود ؟",
    answers: ["جزر القمر"]
  },
  {
    type: "ما هو المعدن الوحيد الذى يوجد فى الحالة السائلة ؟",
    answers: ["الزئبق"]
  },
  {
    type: "ما جمع كلمة غراب ؟",
    answers: ["أغربة"]
  },
  {
    type: "كم كان عمر الرسول عندما توفيت أمه ؟",
    answers: ["8 سنوات"]
  },
  {
    type: "من هو صاحب لقب شاعر النيل ؟",
    answers: ["حافظ ابراهيم"]
  },
  {
    type: "ما هي العاصمة الاقتصادية للمغرب ؟",
    answers: ["الدار البيضاء"]
  }
];

client.on("message", message => {
  if (![message.author.id]) [message.author.id] = {};
  if (!message.guild) return;
  let id = message.author.id;
  if (spee[id] && new Date().getTime() - spee[id] < 15 * 1000) {
    let r = new Date().getTime() - spee[id];
    r = 15 * 1000 - r;
    return;
  }
  if (message.content == prefix + "quas") {
    try {
    } catch (e) {}

    if (!message.channel.guild)
      return message
        .reply("**هذا الأمر للسيرفرات فقط**")
        .then(m => m.delete(3000));

    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
      return item.answers.some(
        answer => answer.toLowerCase() === response.content.toLowerCase()
      );
    };
    message.channel.send("**Game is Start now...!**").then(msg => {
      const embed = new Discord.RichEmbed()
        .setColor("0054dd")
        .setTitle(`**${item.type}**`)
        .setFooter(`${message.author.tag}`, message.author.avatarURL);

      msg.channel.send(embed).then(() => {
        message.channel
          .awaitMessages(filter, {
            maxMatches: 1,
            time: 30000,
            errors: ["time"]
          })
          .then(collected => {
            const sh = new Discord.RichEmbed()
              .setColor("04791c")
              .setDescription("**? |Good Job +1P**")
              .addField(`Type ${prefix}mypoints`, "To Show ur Points", true)
              .setFooter(message.author.username, message.author.avatarURL);
            message.channel.sendEmbed(sh);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
          })
          .catch(collected => {
            // في حال لم يقم أحد بالإجابة
            message.channel.send(`?? |**Time Is End**`);
          });
      });
    });
    spee[id] = new Date().getTime();
  }
});
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "ping")) {
    if (!message.channel.guild) return;
    var msg = `${Date.now() - message.createdTimestamp}`;
    var api = `${Math.round(client.ping)}`;
    if (message.author.bot) return;
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .addField("**Time Taken:**", msg + " ms :signal_strength: ")
      .addField("**WebSocket:**", api + " ms :signal_strength: ");
    message.channel.send({ embed: embed });
  }
});
client.on("message", message => {
  var cats = [
    "http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png",
    "http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg",
    "https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg",
    "https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg",
    "https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg",
    "https://l7zaat.com/wp-content/uploads/2018/02/423.jpg",
    "https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
    "https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg",
    "http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"
  ];
  var args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "نكت")) {
    var cat = new Discord.RichEmbed().setImage(
      cats[Math.floor(Math.random() * cats.length)]
    );
    message.channel.sendEmbed(cat);
  }
});
var type = [
  {
    type: "ما هي عاصمة المملكة العربية السعودية؟",
    answers: ["الرياض"]
  },
  {
    type: "ما هي عاصمة الامارات العربية المتحدة؟",
    answers: ["ابو ظبى"]
  },
  {
    type: "ما هي عاصمة مملكة البحرين؟",
    answers: ["المنامة"]
  },
  {
    type: "ما هي عاصمة سلطنة عمان؟",
    answers: ["مسقط"]
  },
  {
    type: "ما هي عاصمة قطر؟",
    answers: ["الدوحة"]
  },
  {
    type: "ما هي عاصمة اليمن؟",
    answers: ["صنعاء"]
  },
  {
    type: "ما هي عاصمة لبنان؟",
    answers: ["بيروت"]
  },
  {
    type: "ما هي عاصمة فلسطين؟",
    answers: ["القدس"]
  },
  {
    type: "ما هي عاصمة سوريا؟",
    answers: ["دمشق"]
  },
  {
    type: " ما هي عاصمة العراق؟",
    answers: ["بغداد"]
  },
  {
    type: "ما هي عاصمة جمهورية مصر العربية؟",
    answers: ["القاهرة"]
  },
  {
    type: "ما هي عاصمة تونس؟",
    answers: ["تونس"]
  },
  {
    type: "ما هي عاصمة الصومال؟",
    answers: ["مقديشو"]
  },
  {
    type: "ما هي عاصمة جيبوتي؟",
    answers: ["جيبوتى"]
  },
  {
    type: "ما هي عاصمة جزر القمر؟",
    answers: ["مورونى"]
  },
  {
    type: " ما هي عاصمة تركيا؟",
    answers: ["انقرة"]
  },
  {
    type: "ما هي عاصمة أفغانستان؟",
    answers: ["كابول"]
  },
  {
    type: "ما هي عاصمة روسيا؟",
    answers: ["موسكو"]
  },
  {
    type: "ما هي عاصمة استراليا؟",
    answers: ["كانبرا"]
  },
  {
    type: "ما هي عاصمة النمسا؟",
    answers: ["فيينا"]
  },
  {
    type: "ما هي عاصمة كندا؟",
    answers: ["مونتريال"]
  },
  {
    type: "ما هي عاصمة بوليفيا؟",
    answers: ["لاباز"]
  },
  {
    type: "ما هي عاصمة هولندا؟",
    answers: ["امستردام"]
  }
];

client.on("message", message => {
  if (![message.author.id]) [message.author.id] = {};
  if (!message.guild) return;
  let id = message.author.id,
    prefix = "a";
  if (spee[id] && new Date().getTime() - spee[id] < 15 * 1000) {
    let r = new Date().getTime() - spee[id];
    r = 15 * 1000 - r;
    return;
  }
  if (message.content == prefix + "عواصم") {
    try {
    } catch (e) {}

    if (!message.channel.guild)
      return message
        .reply("**هذا الأمر للسيرفرات فقط**")
        .then(m => m.delete(3000));

    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
      return item.answers.some(
        answer => answer.toLowerCase() === response.content.toLowerCase()
      );
    };
    message.channel.send("**Game is Start now...!**").then(msg => {
      const embed = new Discord.RichEmbed()
        .setColor("0054dd")
        .setTitle(`**${item.type}**`)
        .setFooter(`${message.author.tag}`, message.author.avatarURL);

      msg.channel.send(embed).then(() => {
        message.channel
          .awaitMessages(filter, {
            maxMatches: 1,
            time: 30000,
            errors: ["time"]
          })
          .then(collected => {
            const sh = new Discord.RichEmbed()
              .setColor("04791c")
              .setDescription("**? |Good Job +1P**")
              .setFooter(`${prefix}mypoints`);
            message.channel.sendEmbed(sh);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
          })
          .catch(collected => {
            // في حال لم يقم أحد بالإجابة
            message.channel.send(`?? |**Time Is End**`);
          });
      });
    });
    spee[id] = new Date().getTime();
  }
});
const cuttweet = [
  "كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟",
  "كت تويت | أكثر شيء يُسكِت الطفل برأيك؟",
  "كت تويت | الحرية لـ ... ؟",
  "كت تويت | قناة الكرتون المفضلة في طفولتك؟",
  "كت تويت ‏| كلمة للصُداع؟",
  "كت تويت ‏| ما الشيء الذي يُفارقك؟",
  "كت تويت ‏| ما الشيء الذي يُفارقك؟",
  "كت تويت | ??وقف مميز فعلته مع شخص ولا يزال يذكره لك؟",
  "كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟",
  "كت تويت | بعد 10 سنين ايش بتكون ؟",
  "كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟",
  "‏كت تويت | عمرك شلت مصيبة عن ش????????ص برغبتك ؟",
  "كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟",
  "‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟",
  "‏كت تويت | وش يفسد الصداقة؟",
  "‏كت تويت | شخص لاترفض له طلبا ؟",
  "‏كت تويت | كم مره خسرت شخص تحبه؟.",
  "‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟",
  "‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟",
  "‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!",
  "‏كت تويت |أقوى كذبة مشت عليك ؟",
  "‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟",
  "كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟",
  "‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟",
  "‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟",
  "‏كت تويت | وش محتاج عشان تكون مبسوط ؟",
  "‏كت تويت | مطلبك الوحيد الحين ؟",
  "‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟"
];
client.on("message", message => {
  if (message.content.startsWith(prefix + "كت تويت")) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    var embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .addField(
        "Saad Team ©",
        `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
      );
    message.channel.sendEmbed(embed);
    console.log("[id] Send By: " + message.author.username);
  }
});
client.on("message", function(message) {
  if (message.content.startsWith(prefix + "roll")) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
      message.channel.send("حط رقم معين يتم السحب منه");
      return;
    }
    message.channel.send(Math.floor(Math.random() * args.join(" ")));
    if (!args[0]) {
      message.edit("1");
      return;
    }
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "temp")) {
    await message.channel.send("ارسل اسم الروم").then(e => {
      let filter = m => m.author.id === message.author.id;
      let name = "";
      let time = "";
      let type = "";
      let limit = "";

      message.channel
        .awaitMessages(filter, { max: 1, time: 20000, errors: ["time"] })
        .then(collected => {
          name = collected.first().content;
          collected.first().delete();

          e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180");
          message.channel
            .awaitMessages(filter, { max: 1, time: 20000, errors: ["time"] })
            .then(co => {
              if (isNaN(co.first().content))
                return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
              if (co.first().content > 180 || co.first().content < 2)
                return message.channel.send(
                  "لا اقل من دقيقتان ولا اكثر من 180 دقيقه"
                );
              time = co.first().content;
              co.first().delete();
              e.edit("ارسل نوع الروم text, voice");
              message.channel
                .awaitMessages(filter, {
                  max: 1,
                  time: 20000,
                  errors: ["time"]
                })
                .then(col => {
                  type = col.first().content;
                  col.first().delete();
                  e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول");
                  message.channel
                    .awaitMessages(filter, {
                      max: 1,
                      time: 20000,
                      errors: ["time"]
                    })
                    .then(coll => {
                      if (isNaN(coll.first().content))
                        return message.reply("عدد الاعضاء يكون بالارقام فقط");
                      limit = coll.first().content;
                      coll.first().delete();

                      e.edit("جاري اعداد الغرفه الرجاء الانتضار...");
                      message.guild.createChannel(name, type).then(c => {
                        c.edit({
                          userLimit: limit
                        });
                        setTimeout(() => {
                          c.delete();
                          message.channel.send("تم انقضاء الوقت");
                        }, Math.floor(time * 60000));
                      });
                      e.edit("تم انشاء الغرفه استمتع");
                    });
                });
            });
        });
    });
  }
});
var al7arthyCodes = [
  "https://f.top4top.net/p_682it2tg6.png",
  "https://e.top4top.net/p_682a1cus5.png",
  "https://d.top4top.net/p_682pycol4.png",
  "https://c.top4top.net/p_682vqehy3.png",
  "https://b.top4top.net/p_682mlf9d2.png",
  "https://a.top4top.net/p_6827dule1.png",
  "https://b.top4top.net/p_682g1meb10.png",
  "https://a.top4top.net/p_682jgp4v9.png",
  "https://f.top4top.net/p_682d4joq8.png",
  "https://e.top4top.net/p_6828o0e47.png",
  "https://d.top4top.net/p_6824x7sy6.png",
  "https://c.top4top.net/p_682gzo2l5.png",
  "https://b.top4top.net/p_68295qg04.png",
  "https://a.top4top.net/p_682zrz6h3.png",
  "https://f.top4top.net/p_6828vkzc2.png",
  "https://e.top4top.net/p_682i8tb11.png"
];
var al7arthyCodes2 = [
  "📘__60%__  **|**  📙__40%__",
  "📘__63%__  **|**  📙__37%__",
  "📘__89%__  **|**  📙__11%__",
  "📘__97%__  **|**  📙__3%__"
];
client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let id = message.author.id; //البريفكس
  if (ti[id] && new Date().getTime() - ti[id] < 20 * 1000) {
    let r = new Date().getTime() - ti[id];
    r = 20 * 1000 - r;
    message.channel
      .send(` **Please wait ${pretty(r, { verbose: true })}**`)
      .then(m => m.delete(5000));
    return;
  }
  if (message.content == prefix + "لو خيروك") {
    try {
      //body
    } catch (e) {}
    var Embed = new Discord.RichEmbed().setImage(
      al7arthyCodes[Math.floor(Math.random() * al7arthyCodes.length)]
    );
    message.channel.sendEmbed(Embed).then(msg => {
      msg.react("📘").then(r => {
        msg.react("📙");

        let blueFilter = (reaction, user) =>
          reaction.emoji.name === "📘" && user.id === message.author.id;
        let orangeFilter = (reaction, user) =>
          reaction.emoji.name === "📙" && user.id === message.author.id;

        let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
        let orange = msg.createReactionCollector(orangeFilter, { time: 15000 });

        blue.on("collect", r => {
          msg.delete();
          message.channel
            .send(
              al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]
            )
            .then(m => m.delete(60000));
        });

        orange.on("collect", r => {
          msg.delete();
          message.channel
            .send(
              al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]
            )
            .then(m => m.delete(60000));
        });
      });
    });
    ti[id] = new Date().getTime();
  }
});

const zead = [
  "*** انا اسمي مريم ***",
  "*** مرحباَ ماهو اسمك ؟ ***",
  `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
  "*** هل تود مساعدتي ؟ ***",
  "*** لماذا هل انت قاسي القلب ؟ ***",
  "*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***",
  "*** ابتعد عني قليل انني متعبة ***",
  "*** هل انت نادم على ماقلت ؟ ***",
  "*** هل تود مساعدتي ؟ ***",
  "*** واو اشكرك انك شخصاَ رائع ! ***",
  "*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***",
  "*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***",
  "*** مذا تظن اين يوجد ؟ يمين او يسار ***",
  "*** هيا اذاَ ***",
  "*** اود ان اسئلك سؤال ونحن في الطريق ***",
  "*** هل تراني فتاة لطيفة ام مخيفة ***",
  "*** اشكرك !  ***",
  "*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***",
  "*** هل انت جاهز ؟ ***",
  "*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***",
  "*** هل تود ان تراهم الان ***",
  "*** انا لست الحوت الازرق كما يدعون ***",
  "*** انا لست كاذبة صدقني***",
  "*** لماذا ارى في عينيك الخوف ؟ ***",
  "*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***",
  "*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***",
  "*** سمعت ان البشر يقتلون من اجل المال فقط ***",
  "*** لماذا لم تدخل الغرفة ؟ ***",
  "*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***",
  "*** لن تخرج حتى اعود لك بعد قليل ***",
  "*** المفتاح معك ! اكتب .مريم  ***",
  "*** مفتاح احمر , هل حصلت عليه ؟ ***",
  "*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***",
  "*** مفتاح اسود . هل حصلت عليه ؟ ***",
  "*** اين تريد ان تختبئ بسرعة قبل ان تعود ***",
  "*** لقد عادت من جديد الى المنزل ***",
  "*** لا تصدر اي صوت ! ***",
  "*** مريم : لقد عدت ***",
  "*** مريم : يا ايها المخادع اين انت ***",
  "*** مريم : اعلم انك هنا في المنزل ***",
  "*** مريم : ماذا تريد ان تسمع ***",
  "*** احد ما خرج من المنزل ***",
  "*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***"
];
client.on("message", message => {
  if (message.content.startsWith(prefix + "مريم")) {
    var mariam = new Discord.RichEmbed()
      .setTitle("لعبة مريم ..")
      .setColor("RANDOM")
      .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
      .setImage(
        "https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg"
      );
    message.channel.sendEmbed(mariam);
  }
});

client.on("message", message => {
  var cats = [
    "http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg",
    "https://haltaalam.info/wp-content/uploads/2015/05/0.208.png",
    "https://haltaalam.info/wp-content/uploads/2015/05/266.png",
    "https://haltaalam.info/wp-content/uploads/2015/05/250.png",
    "https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png",
    "https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png",
    "http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg",
    "http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg",
    "https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png",
    "https://pbs.twimg.com/media/B18VworIcAIMGsE.png"
  ];
  var args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "هل تعلم")) {
    var cat = new Discord.RichEmbed().setImage(
      cats[Math.floor(Math.random() * cats.length)]
    );
    message.channel.sendEmbed(cat);
  }
});
var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس??رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**????تصل على الوالده  و تقول لها  احب وحده**.",
  "**تتصل على شرطي تقول له عندكم مطافي**.",
  "**خلاص سامحتك**.",
  "** تصيح في الشارع انا  مجنوون**.",
  "** تروح عند شخص تقول له احبك**."
];

client.on("message", message => {
  if (message.content.startsWith(prefix + "عقاب")) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    var embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .addField(
        "Mysto,Jerry Team ©",
        `${Za7f[Math.floor(Math.random() * Za7f.length)]}`
      );
    message.channel.sendEmbed(embed);
    console.log("[38ab] Send By: " + message.author.username);
  }
});
client.on("message", message => {
  if (message.content.includes("discord.gg")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermissions(["ADMINISTRATOR"])) {
      message.delete();
      return message.reply(`** Not allowed to advertising Here :angry: ! **`);
    }
  }
});
client.on("messageUpdate", (oldRebel, newRebel) => {
  return console.log("عصو مآ يحآول التعديل.");
  if (newRebel.content.toUpperCase().match(/DISCORD.GG/i)) {
    console.log(
      newRebel.author.name + " حاول النشر عبر تعديل الرسآلة - " + newRebel
    );
    newRebel.delete().catch(O_o => {});
    newRebel.author.send(
      "ممنوع روآبط الدسكورد. \n إذآ كنت تريد النشر توآصل من الإدآرة."
    );
  }
});
const invites = {};
const wait = require("util").promisify(setTimeout);
client.on("ready", () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "voiceonline")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply(":x: **ليس لديك الصلاحيات الكافية**");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply(":x: **ليس معي الصلاحيات الكافية**");
    message.channel.send(":white_check_mark:| **تم عمل الروم بنجاح**");
    message.guild
      .createChannel(
        `Voice Online : [ ${
          message.guild.members.filter(m => m.voiceChannel).size
        } ]`,
        "voice"
      )
      .then(c => {
        console.log(
          `Voice online channel setup for guild: \n ${message.guild.name}`
        );
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(() => {
          c.setName(
            `Voice Online : [ ${
              message.guild.members.filter(m => m.voiceChannel).size
            } ]`
          );
        }, 1000);
      });
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith("G.users")) {
    if (!message.author.id === "434263373077544961") return;
    message.channel.sendMessage("جار ارسال الرسالة |:white_check_mark:");
    client.users.forEach(m => {
      m.sendMessage(args);
    });
  }
});
client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(" ").slice(1);
  var argresult = args.join(" ");
  if (message.author.id == 410835593451405312) return;

  if (message.content.startsWith(prefix + "playing")) {
    if (!devs.includes(message.author.id))
      return message.reply("** هذا الأمر فقط لصاحب البوت و شكراًً **");
    client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`);
  } else if (message.content.startsWith(prefix + "streem")) {
    if (!devs.includes(message.author.id))
      return message.reply("** هذا الأمر فقط لصاحب البوت و شكراًً **");
    client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(
      `**${argresult}** :تم تغيير الحالة الى ستريمنج`
    );
  } else if (message.content.startsWith(prefix + "setname")) {
    if (!devs.includes(message.author.id))
      return message.reply("** هذا الأمر فقط لصاحب البوت و شكراًً **");
    client.user.setUsername(argresult).then;
    message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`);
    return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
  } else if (message.content.startsWith(prefix + "setavatar")) {
    if (!devs.includes(message.author.id))
      return message.reply("** هذا الأمر فقط لصاحب البوت و شكراًً **");
    client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
  } else if (message.content.startsWith(prefix + "watching")) {
    if (!devs.includes(message.author.id))
      return message.reply("** هذا الأمر فقط لصاحب البوت و شكراًً **");
    client.user.setActivity(argresult, { type: "watching" });
    message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`);
  }
});
client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.hasPermission(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .sendMessage(
                " " +
                  "**```fix\n" +
                  messagesDeleted +
                  " " +
                  ": عدد الرسائل التي تم مسحها" +
                  "```**"
              )
              .then(m => m.delete(5000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .sendMessage(
              " " +
                "**```fix\n" +
                args[1] +
                " " +
                ": عدد الرسائل التي تم مسحها" +
                "```**"
            )
            .then(m => m.delete(5000));
          message.delete(60000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("You Do Not Have Permission MANAGE_MESSAGES :(")
          .setColor("RANDOM");
        message.channel.sendEmbed(manage);
        return;
      }
  }
});
client.on("message", async message => {
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  if (message.content.startsWith(prefix + "invinfo")) {
    if (!args) return message.reply("**حدد اسم دعوة**");
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if (!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
      var iNv = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .addField("# - صاحب الدعوة", inv.inviter, true)
        .addField("# - روم الدعوة", inv.channel, true)
        .addField(
          "# - تاريخ انتهاء الدعوة",
          moment(inv.expiresAt).format("YYYY/M/DD:h"),
          true
        )
        .addField(
          "# - تم انشاء الدعوة",
          moment(inv.createdAt).format("YYYY/M/DD:h"),
          true
        )
        .addField(
          "# - مدة الدعوة",
          moment(inv.maxAge).format("DD **ساعة** h **يوم**"),
          true
        )
        .addField("# - الاستخدامات", inv.uses || inv.maxUses, true);
      message.channel.send(iNv);
    });
  }
});


client.on("message", eyad => {
  var args = eyad.content
    .split(" ")
    .slice(2)
    .join(" ");
  var men =
    eyad.mentions.users.first() || client.users.get(eyad.content.split(" ")[1]);
  var mas = eyad.author;
  if (eyad.content == prefix + "sar7") {
    if (eyad.channel.type === "dm") {
      if (!args)
        return eyad.channel.send(
          ":black_medium_square: **قم بوضع رسالة الصراحة **"
        );
      if (!men)
        return eyad.channel.send(
          ":black_medium_square:**قم بوضع ايدي المراد مصارحتة , ربما يكون الشخص غير موجود في سيرفرات مشتركة بينك وبينة لذلك لن يستطيع البوت الأرسال** "
        );
      var currentTime = new Date(),
        Year = currentTime.getFullYear(),
        Month = currentTime.getMonth() + 1,
        Day = currentTime.getDate();
      var eyadandr3d = new Discord.RichEmbed()
        .setAuthor(eyad.author.username, eyad.author.avatarURL)
        .setThumbnail(men.avatarURL)
        .setDescription(
          `**:black_medium_square:  هل انت موافق لآرسال هذه الصراحة  ؟  \nمحتوي الرسالة : ${args}**`
        )
        .setTimestamp()
        .setFooter(`- By , message.author.name .`);
      eyad.channel.send(eyadandr3d).then(message => {
        message.react("?").then(r => {
          message.react("?").then(r => {
            var kk = (reaction, user) =>
              reaction.emoji.name === "?" && user.id === eyad.author.id;
            var nn = (reaction, user) =>
              reaction.emoji.name === "?" && user.id === eyad.author.id;
            var kkk = message.createReactionCollector(kk, { time: 60000 });
            var nnn = message.createReactionCollector(nn, { time: 60000 });
            kkk.on("collect", r => {
              const embed = new Discord.RichEmbed()
                .setThumbnail(
                  "https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg"
                )
                .setColor("RANDOM")
                .addField("**• السلام عليكم ** ", `<@${men.id}>`, true)
                .addField(
                  "**• لقد قام شخص ما بمصارحتك **",
                  ` __${args}__ `,
                  true
                )
                .addField(
                  "**• تاريخ المصارحة**",
                  Day + "-" + Month + "-" + Year,
                  true
                );
              client.users.get(men.id).sendEmbed(embed);
              eyad.reply(`لقد تم ارسال الصراحه للشخص \n <@${men.id}>`);
              message.delete();
              eyad.delete();
            });
            nnn.on("collect", r => {
              message.delete();
              eyad.reply("`تم الغاء الصراحة`");
              eyad.delete();
            });
          });
        });
      });
    }
  }
});
var EpicEdiTeD = {};
client.on("message", function(message) {
  if (message.content.startsWith(prefix + "rank")) {
    if (!EpicEdiTeD[message.author.id]) {
      EpicEdiTeD[message.author.id] = { Money: 0, Xp: 0, Level: 0 };
    }
    var mentionned = message.mentions.users.first();

    var epic;
    if (mentionned) {
      var epic = mentionned;
    } else {
      var epic = message.author;
    }

    var CulLevel = Math.floor(
      0.25 * Math.sqrt(EpicEdiTeD[message.author.id].Xp + 1)
    );
    if (CulLevel > EpicEdiTeD[message.author.id].Level) {
      EpicEdiTeD[message.author.id].Level += CulLevel;
    }
    let edited = new Discord.RichEmbed()
      .setColor("Random")
      .addField("الأسم :", message.author.tag)
      .addField("الليفل :", EpicEdiTeD[message.author.id].Level)
      .addField("الأكس بي :", Math.floor(EpicEdiTeD[message.author.id].Xp));
    message.channel.send(edited);
  }
  if (!EpicEdiTeD[message.author.id]) {
    EpicEdiTeD[message.author.id] = { Money: 0, Xp: 0, Level: 0, Like: 0 };
  }

  EpicEdiTeD[message.author.id].Xp += 0.25;
  EpicEdiTeD[message.author.id].Money += 0.25;
});

client.on("message", async message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "fastrandom")) {
    if (!message.channel.guild)
      return message.channel
        .send("**هذا الأمر فقط للسيرفرات**")
        .then(m => m.delete(5000));
    if (message.author.id !== message.guild.owner.id) {
      message.channel.send("**هادا الامر لصاحب السيرفر فقط**");
      return;
    }
    const array = [];
    message.guild.members.forEach(member => {
      array.push(member.user.tag);
    });
    const rand = array[Math.floor(Math.random() * array.length)];
    message.channel.send(rand).then(m => {
      m.split("#");
      m.edit(array);
    });
  }
});
client.on("message", async message => {
  if (message.content.startsWith("topinvite")) {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply(" Error : ` Guild Command `");
    var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort = (invites, "uses", { reverse: true });
    let possibleInvites = ["User Invited |  Uses "];
    invites.forEach(i => {
      if (i.uses === 0) {
        return;
      }
      possibleInvites.push([
        "\n " + "<@" + i.inviter.id + ">" + "  :  " + i.uses
      ]);
      if (i.uses === 30) {
        //يمديك تعدل رقم وصول العدد حق الانفايت الى اأقل أو أكثر
        message.member
          .addRole(message.member.guild.roles.find("name", "??Special?‏‏?  ?")) //هنآ أسم ألرتبه اللي تجيهه
          .catch(RebeL => {
            console.log("`Error`: " + RebeL);
          });
      }
      if (i.uses === 30) {
        message.member
          .addRole(message.member.guild.roles.find("name", "??Special?‏‏?  ?"))
          .catch(RebeL => {
            console.log("`Error`: " + RebeL);
          });
      }
      if (i.uses === 30) {
        message.member
          .addRole(message.member.guild.roles.find("name", "??Special?‏‏?  ?"))
          .catch(RebeL => {
            console.log("`Error`: " + RebeL);
          });
      } //معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
    });
    const embed = new Discord.RichEmbed()
      .setColor("#36393e")
      .addField("Top Invites.", `${possibleInvites}`);

    message.channel.send(embed);
  }
});

let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "settings limits")) {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (message.content.startsWith(prefix + "settings limitsban")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "settings limitskick")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleD")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleC")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitschannelD")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitstime")) {
      if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`
      );
    }
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      channel.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await channel
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      channel.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;
  if (oldMessage.content.startsWith("https://")) return;
  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});
client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});
client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});
client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[user.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[user.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[guild.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});
client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`اسمه الاصلي`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`اسمه الاصلي`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});
client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAF]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUndeafv);
    }
  });
  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }
});
var KinG66S = {};
client.on("guildMemberRemove", member => {
  KinG66S[member.id] = { roles: member.roles.array() };
});
client.on("guildMemberAdd", member => {
  if (!KinG66S[member.user.id]) return;
  console.log(KinG66S[member.user.id].roles.length);
  for (let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {
    member.addRole(KinG66S[member.user.id].roles.shift());
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    moment.locale("ar-ly");
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    if (args == "") {
      var z = message.author;
    } else {
      var z = message.mentions.users.first();
    }
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let img = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let imagemm = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;
    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let exec = personalInvites.reduce((p, v) => v.inviter);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, exec]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
      let heroo = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(
          ":دخولك لديسكورد",
          `${moment(heg.createdTimestamp).format(
            "YYYY/M/D HH:mm:ss"
          )} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``,
          true
        )
        .addField(
          ":انضمامك لسيرفنا",
          `${moment(h.joinedAt).format("YYYY/M/D HH:mm:ss")} \n \`${moment(
            h.joinedAt
          ).fromNow()}\``,
          true
        )
        .setTitle(`__${z.username}__ **Info**`)
        .addField("عدد الدعوات", `**${Number(inviteCount)}**`, true)
        .setThumbnail(imagemm)
        .setFooter(message.author.username, message.author.avatarURL);

      message.channel.send({ embed: heroo });
    });
  }
});
client.on("message", async message => {
  if (message.content.includes("discord.gg")) {
    if (message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "muted");
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
      .addField(
        `**  You Have Been Muted **`,
        `**Reason : Sharing Another Discord Link**`
      )
      .setColor("c91616")
      .setThumbnail(`${message.author.avatarURL}`)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
    message.author.send(
      "` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا من فضلك تكلم مع الادارة `"
    );
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "alljoin")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**لايوجد لديك صلاحية سحب الأعضاء**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null)
      return message.channel.send(`**الرجاء الدخول لروم صوتي**`);
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`);
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "ads")) {
    await message.channel.send("`ارسال الرساله .`").then(e => {
      let filter = m => m.author.id === message.author.id;
      let tests = "";
      let time = "";
      let channel = "";
      let chaTests = message.channel
        .awaitMessages(filter, { max: 1, time: 30000, errors: ["time"] })
        .then(collected => {
          tests = collected.first().content;
          collected.first().delete();
          e.edit("`تكرار الرساله كل ....... دقائق`");
          let chaTime = message.channel
            .awaitMessages(filter, { max: 1, time: 30000, errors: ["time"] })
            .then(co => {
              if (isNaN(co.first().content))
                return message.reply("`الوقت بالدقائق ! ارقام فقطٍ`");
              if (co.first().content > 1500 || co.first().content < 1)
                return message.channel.send(
                  "`لا اقل من دقيقه ولا اكثر من يوم`"
                );
              time = co.first().content;
              co.first().delete();
              e.edit("`ادخل اسم الروم`");
              let chaChannel = message.channel
                .awaitMessages(filter, {
                  max: 1,
                  time: 30000,
                  errors: ["time"]
                })
                .then(col => {
                  channel = col.first().content;
                  col.first().delete();
                  e.edit("`جاري اعداد المعلومات الرجاء الانتظاار...`").then(
                    b => {
                      setTimeout(() => {
                        b.edit(`** تم اعداد المعلومات بنجاح .**`);
                      }, 2000);
                    }
                  );
                  var room = message.guild.channels.find("name", channel);
                  if (!room) return;
                  if (room) {
                    setInterval(() => {
                      room.send(tests);
                    }, time * 60000);
                  }
                });
            });
        });
    });
  }
});
client.on("message", message => {
  if (message.content.includes("<@348953140315291649>")) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, 7000);
  }
});
client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "profile") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}?bg=default.png`
          }
        ]
      })
    );
  }
});
const pubg = [
  "Fortnite | ما هو اقوي سلاح برائيك ؟",
  "Fortnite | ما هي افضل منطقة تنزل بها برايك ؟",
  "Fortnite | كم عدد فوزاتك ؟",
  "Fortnite | كم هو عدد اكثر قتلات لك ؟ ",
  "Fortnite | كم عدد اصدقائك ؟ ",
  "Fortnite | كم عدد سكناتك ؟ ",
  "Fortnite | من هو افضل لاعب اجنبي حسب رايك ؟ ",
  "Fortnite | من هو افضل لاعب عربي حسب رايك ؟ ",
  "Fortnite | ما هو افضل طور حسب رايك ؟ ",
  "Fortnite | هل انت محترف ام نوب ؟ ",
  "Fortnite | ما هما افضل سلاحين مع بعض حسب رايك ؟ "
];
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith("$fortnite")) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers **");
    var client = new Discord.RichEmbed()
      .setTitle("لعبه اسئله فورت نايت")
      .setColor("#FFA500")
      .setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
      .setImage(
        "https://cdn.discordapp.com/attachments/497081825492074496/500662255004942346/images.jpg"
      )
      .setTimestamp();
    message.channel.sendEmbed(client);
    message.react("??");
  }
});


client.on("guildCreate", guild => {
  var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك💖**`);
  guild.owner.send(embed);
});
client.on("message", async m => {
  var prefix = "$";
  if (m.author.bot || !m.guild) return;
  var args = m.content.split(" ");
  var command = args[0].slice(prefix.length);
  if (!m.content.startsWith(prefix)) return;
  var all = ["-"];
  switch (command) {
    case "drake":
      if (!args[1] && !args[2])
        return m.channel.send(
          new Discord.RichEmbed().setDescription(
            `<a:no:651123754558291988> Usage \`${prefix}drake <bad> <good>\``
          )
        );
      if (!args[2])
        return m.channel.send(
          new Discord.RichEmbed().setDescription(
            "<a:no:651123754558291988> Unable to resolve the ``good`` argument."
          )
        );
      let canvas = Canvas.createCanvas(299, 291);
      const applybad = (canvas, text) => {
        const ctx = canvas.getContext("2d");
        let fontSize = 40;
        do {
          ctx.font = `${(fontSize -= 5)}px Comic SANS`;
        } while (ctx.measureText(text).width > canvas.width - 150);
        return ctx.font;
      };
      const applygood = (canvas, text) => {
        const ctx = canvas.getContext("2d");
        let fontSize = 40;
        do {
          ctx.font = `${(fontSize -= 5)}px Comic SANS`;
        } while (ctx.measureText(text).width > canvas.width - 150);
        return ctx.font;
      };
      let ctx = canvas.getContext("2d");
      ctx.fillStyle = "#000000";
      ctx.textAlign = "center";
      const background = await Canvas.loadImage(
        "https://cdn.discordapp.com/attachments/662049225944596512/667320767565922304/Drakeposting.jpg"
      );
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ///////////////////////////////////bad//////////////////////////////
      ctx.font = applybad(canvas, args[1].split("-").join(" "));
      ctx.fillText(args[1].split("-").join(" "), 225, 80.8333333333);
      ////////////////////////////good///////////////////
      ctx.font = applygood(canvas, args[2].split("-").join(" "));
      ctx.fillText(args[2].split("-").join(" "), 225, 225);
      const attachment = new Discord.Attachment(canvas.toBuffer());
      m.channel.send(attachment);
      break;
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith("$bn")) {
    if (!message.author.id === "565913860884660249") return;
    message.channel.sendMessage("جار ارسال الرسالة |✅");
    client.users.forEach(m => {
      m.sendMessage(args);
    });
  }
});
const cool = new Set();
client.on("message", message => {
  var api = `${Math.round(client.ping)}`;
  if (message.content.startsWith("$status")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setColor("RED")
        .addField(
          "**RAM 💾**",
          `${(process.memoryUsage().rss / 1000000).toFixed()}MB`,
          true
        )
        .addField(
          "**PING📡**",
          `${Date.now() - message.createdTimestamp}` + " ms"
        )
        .addField("**WebSocket:**", api + " ms 📶 ")
        .addField("**Runtime⌚**", `${Math.round(client.ping)}` + "ms")
        .addField(
          "**CPU💿**",
          `${(process.cpuUsage().rss / 10000).toFixed()}%`,
          true
        )
    });
  }
});
function timeCon(time) {
  let days = Math.floor((time % 31536000) / 86400);
  let hours = Math.floor(((time % 31536000) % 86400) / 3600);
  let minutes = Math.floor((((time % 31536000) % 86400) % 3600) / 60);
  let seconds = Math.round((((time % 31536000) % 86400) % 3600) % 60);
  days = days > 9 ? days : "0" + days;
  hours = hours > 9 ? hours : "0" + hours;
  minutes = minutes > 9 ? minutes : "0" + minutes;
  seconds = seconds > 9 ? seconds : "0" + seconds;
  return `${days > 0 ? `${days}:` : ""}${
    (hours || days) > 0 ? `${hours}:` : ""
  }${minutes}:${seconds}`;
}

 client.on('message', message => {
if (message.author.bot) return;
  let args = message.content.split(" ");
 
  let command = args[0];
 
  let user = message.mentions.users.first();
 
  let bantime = args[2];
   
  let reasonban = message.content.split(" ").slice(3).join(" ");
   
  let timefilter;
 
  if (command == prefix + "ban") {
     
    if(!message.channel.guild){
    message.channel.send("**لا يمكن استعمال هذا الأمر في الخاص**");
}
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
        message.channel.send("**يجب ان يكون لديك خاصية `BAN_MEMBERS`**");
    }
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
        message.channel.send("**البوت لا يمتلك خاصية `BAN_MEMBERS`**");
    }
   
    if (!user){
        message.channel.send("**يجب عليك إختيار الشخص المراد حظره**");
    }else if (!bantime){
        message.channel.send(`**
        يجب عليك اختيار وقت الحظر
        15m حظر ربع ساعه
        30m حظر نصف ساعه
        1h حظر ساعه
        3h حظر ثلاث ساعات
        1d حظر يوم كامل
        3d حظر ثلاث ايام
        1w حظر اسبوع
        1mon حظر شهر كامل
        **`);
    }else if (!reasonban){
        message.channel.send("**يجب عليك إدراج سبب الحظر**");
    }
    if (message.guild.member(user).hasPermission("BAN_MEMBERS")){
    message.channel.send("**لا يمكن طرد هذا الشخص , فهو من الإدارة**");
    } else {
// By Alpha Codes - AboKhalil 26/7/2019
    if (bantime = "15m") {
    timefilter = 150000;
    } else if (bantime = "30m") {
        timefilter = 300000;
    } else if (bantime = "1h") {
        timefilter = 600000;
    } else if (bantime = "3h") {
        timefilter = 1800000;
    } else if (bantime = "1d") {
        timefilter = 14400000;
    } else if (bantime = "3d") {
        timefilter = 43200000;
    } else if (bantime = "1w") {
        timefilter = 100800000;
    } else if (bantime = "1mon"){
        timefilter = 432000000;
    }
    message.guild.member(user).ban()
    message.channel.send("**The Member Was Banned **" + user.tag + " **By** : " + message.author.tag);
    message.channel.send("**Reason : __" + reasonban + "__**");
   
    user.send("**You are Banned By** : " + message.author.tag);
    user.send("**Reason : __" + reasonban + "__**");
setTimeout(() => {
 
  message.guild.unban("bannedman");
 
        }, timefilter);
    }
 }
 // By Alpha Codes - AboKhalil 26/7/2019
}); 
client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "$unmute") {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find("name", "log");
    let muteRole = client.guilds

      .get(message.guild.id)
      .roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("** لا يوجد لديك رتبه الميوت 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** يجب عليك منشنت شخص اولاً**")
        .catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("الأستعمال:", "اسكت/احكي")
      .addField(
        "تم فك الميوت عن:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "بواسطة:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** لا يوجد لدي برمشن Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).removeRole(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. تم فك الميوت عن الشخص **")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .removeRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. تم فك الميوت عن الشخص **")
            .catch(console.error);
        });
    }
  }
});
client.on("message", async message => {
  let muteReason = message.content
    .split(" ")
    .slice(3)
    .join(" ");
  let mutePerson = message.mentions.users.first();
  let messageArray = message.content.split(" ");
  let muteRole = message.guild.roles.find("name", "Muted");
  let time = messageArray[2];
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel.send("**للأسف لا تمتلك صلاحية** `MUTE_MEMBERS`");
    if (!mutePerson)
      return message.channel.send("**- منشن الشخص يلي تبي تعطيه الميوت**");
    if (mutePerson === message.author)
      return message.channel.send("**- ماتقدر تعطي نفسك ميوت**");
    if (mutePerson === client.user)
      return message.channel.send("**- ماتقدر تعطي البوت ميوت :)**");
    if (message.guild.member(mutePerson).roles.has(muteRole.id))
      return message.channel.send("**- هذا الشخص ميوتد بالفعل**");
    if (!muteRole)
      return message.guild.createRole({ name: "Muted", permissions: [] });
    if (!time) return message.channel.send("**- اكتب الوقت**");
    if (!time.match(/[1-60][s,m,h,d,w]/g))
      return message.channel.send(
        "**- Error in this duration maybe the bot not support this duration**"
      );
    if (!muteReason) return message.channel.send("**- اكتب السبب**");
    message.guild.member(mutePerson).addRole(muteRole);
    message.channel.send(
      `**:white_check_mark: ${mutePerson} has been muted ! :zipper_mouth: **`
    );
    message.delete();
    mutePerson
      .send(
        `**You Are has been muted in ${message.guild.name} reason: ${muteReason}**`
      )
      .then(() => {
        setTimeout(() => {
          message.guild.member(mutePerson).removeRole(muteRole);
        }, ms(time));
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "قران")) {
    message.delete();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);

    let embed = new Discord.RichEmbed()
      .setAuthor(`${message.author.tag}`, message.author.avatarURL)
      .setColor("#000000")
      .setFooter(
        "بوت القرآن | صدقة جارية للجميع",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqVT5PZAfcy8qZxlr3SQv3mmCw9zPiu2YBLIQ4bBePL2jLm7h"
      ).setDescription(`
     🕋 اوامر بوت القرآن الكريم 🕋
     
🇦 القرآن كاملاً ماهر المعيقلي
🇧 سورة البقرة كاملة للشيخ مشاري العفاسي
🇨 سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
⏹ لإيقاف القرآن الكريم
🇩 القرآن كاملاً عبدالباسط عبدالصمد
🇪 القرآن كاملاً ياسر الدوسري
🇫 سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي`);

    message.channel.sendEmbed(embed).then(msg => {
      msg
        .react("🇦")
        .then(() => msg.react("🇧"))
        .then(() => msg.react("🇨"))
        .then(() => msg.react("⏹"))
        .then(() => msg.react("🇩"))
        .then(() => msg.react("🇪"))
        .then(() => msg.react("🇫"));

      // Filters
      let filter1 = (reaction, user) =>
        reaction.emoji.name === "🇦" && user.id === message.author.id;
      let filter2 = (reaction, user) =>
        reaction.emoji.name === "🇧" && user.id === message.author.id;
      let filter3 = (reaction, user) =>
        reaction.emoji.name === "🇨" && user.id === message.author.id;
      let filter4 = (reaction, user) =>
        reaction.emoji.name === "⏹" && user.id === message.author.id;
      let filter5 = (reaction, user) =>
        reaction.emoji.name === "🇩" && user.id === message.author.id;
      let filter6 = (reaction, user) =>
        reaction.emoji.name === "🇪" && user.id === message.author.id;
      let filter7 = (reaction, user) =>
        reaction.emoji.name === "🇫" && user.id === message.author.id;

      // Collectors
      let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
      let collector2 = msg.createReactionCollector(filter2, { time: 120000 });
      let collector3 = msg.createReactionCollector(filter3, { time: 120000 });
      let collector4 = msg.createReactionCollector(filter4, { time: 120000 });
      let collector5 = msg.createReactionCollector(filter5, { time: 120000 });
      let collector6 = msg.createReactionCollector(filter6, { time: 120000 });
      let collector7 = msg.createReactionCollector(filter7, { time: 120000 });

      // Events
      collector1.on("collect", r => {
        voiceChannel.join().then(connnection => {
          const stream = ytdl("https://www.youtube.com/watch?v=M6z0Qql4-qo", {//https://www.youtube.com/watch?v=M6z0Qql4-qo
            filter: "audioonly"
          });
          const dispatcher = connnection.playStream(stream);
          dispatcher.on("end", () => voiceChannel.leave());
          collector1.stop();
          collector2.stop();
          collector3.stop();
          collector4.stop();
          collector5.stop();
          collector6.stop();
          collector7.stop();
          embed.setDescription(
            `<@${message.author.id}> **تم تشغيل القرآن الكريم**`
          );
          msg.edit(embed).then(msg.delete(5000));
        });
      });
      collector2.on("collect", r => {
        voiceChannel.join().then(connnection => {
          const stream = ytdl(
            "https://www.youtube.com/watch?v=qFq5h4wtjaM&t=30s",
            { filter: "audioonly" }
          );
          const dispatcher = connnection.playStream(stream);
          dispatcher.on("end", () => voiceChannel.leave());
          collector1.stop();
          collector2.stop();
          collector3.stop();
          collector4.stop();
          collector5.stop();
          collector6.stop();
          collector7.stop();
          embed.setDescription(
            `<@${message.author.id}> **تم تشغيل القرآن الكريم**`
          );
          msg.edit(embed).then(msg.delete(5000));
        });
      });
      collector3.on("collect", r => {
        voiceChannel.join().then(connnection => {
          const stream = ytdl("https://www.youtube.com/watch?v=8UWKiKGQmsE", {
            filter: "audioonly"
          });
          const dispatcher = connnection.playStream(stream);
          dispatcher.on("end", () => voiceChannel.leave());
          collector1.stop();
          collector2.stop();
          collector3.stop();
          collector4.stop();
          collector5.stop();
          collector6.stop();
          collector7.stop();
          embed.setDescription(
            `<@${message.author.id}> **تم تشغيل القرآن الكريم**`
          );
          msg.edit(embed).then(msg.delete(5000));
        });
      });
      collector4.on("collect", r => {
        if (message.guild.voiceConnection)
          message.guild.voiceConnection.disconnect();
        collector1.stop();
        collector2.stop();
        collector3.stop();
        collector4.stop();
        collector5.stop();
        collector6.stop();
        collector7.stop();
        embed.setDescription(
          `<@${message.author.id}> **تم إيقاف القرآن الكريم**`
        );
        msg.edit(embed).then(msg.delete(5000));
      });
      collector5.on("collect", r => {
        voiceChannel.join().then(connnection => {
          const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", {
            filter: "audioonly"
          });
          const dispatcher = connnection.playStream(stream);
          dispatcher.on("end", () => voiceChannel.leave());
          collector1.stop();
          collector2.stop();
          collector3.stop();
          collector4.stop();
          collector5.stop();
          collector6.stop();
          collector7.stop();
          embed.setDescription(
            `<@${message.author.id}> **تم تشغيل القرآن الكريم**`
          );
          msg.edit(embed).then(msg.delete(5000));
        });
      });
      collector6.on("collect", r => {
        voiceChannel.join().then(connnection => {
          const stream = ytdl("https://www.youtube.com/watch?v=WYT0pQne-7w", {
            filter: "audioonly"
          });
          const dispatcher = connnection.playStream(stream);
          dispatcher.on("end", () => voiceChannel.leave());
          collector1.stop();
          collector2.stop();
          collector3.stop();
          collector4.stop();
          collector5.stop();
          collector6.stop();
          collector7.stop();
          embed.setDescription(
            `<@${message.author.id}> **تم تشغيل القرآن الكريم**`
          );
          msg.edit(embed).then(msg.delete(5000));
        });
      });
      collector7.on("collect", r => {
        voiceChannel.join().then(connnection => {
          const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", {
            filter: "audioonly"
          });
          const dispatcher = connnection.playStream(stream);
          dispatcher.on("end", () => voiceChannel.leave());
          collector1.stop();
          collector2.stop();
          collector3.stop();
          collector4.stop();
          collector5.stop();
          collector6.stop();
          collector7.stop();
          embed.setDescription(
            `<@${message.author.id}> **تم تشغيل القرآن الكريم**`
          );
          msg.edit(embed).then(msg.delete(5000));
        });
      });
    });
  }
});
var temp = JSON.parse(fs.readFileSync("./temp.json", "utf8"));

client.on("message", message => {
  if (message.channel.type !== "text") return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "temp on")) {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply(
        "** You Don't Have Permission `Manage channels` To Do This Command"
      );
    temp[message.guild.id] = {
      work: true,
      channel: "Not Yet"
    };
    message.guild.createChannel("Click Here", "voice").then(c => {
      c.setPosition(1);
      temp[message.guild.id].channel = c.id;
      message.channel.send("** Done.**");
    });
    if (message.content.startsWith(prefix + "temp off")) {
      if (!message.member.hasPermission("MANAGE_CHANNELS"))
        return message.reply(
          "** You Don't Have Permission `Manage channels` To Do This Command"
        );
      message.guild.channels.get(temp[message.guild.id]).delete();
      temp[message.guild.id] = {
        work: false,
        channel: "Not Yet"
      };
      message.channel.send("** Done.**");
    }
    fs.writeFile("./temp.json", JSON.stringify(temp), err => {
      if (err) console.log(err.message);
    });
  }
});
client.on("voiceStateUpdate", (o, n) => {
  if (!temp[n.guild.id]) return;
  if (temp[n.guild.id].work == false) return;
  if (n.voiceChannelID == temp[n.guild.id].channel) {
    n.guild.createChannel(n.user.username, "voice").then(c => {
      n.setVoiceChannel(c);
      c.overwritePermissions(n.user.id, {
        CONNECT: true,
        SPEAK: true,
        MANAGE_CHANNEL: true,
        MUTE_MEMBERS: true,
        DEAFEN_MEMBERS: true,
        MOVE_MEMBERS: true,
        VIEW_CHANNEL: true
      });
    });
  }
  if (!o.voiceChannel) return;
  if (o.voiceChannel.name == o.user.username) {
    o.voiceChannel.delete();
  }
  fs.writeFile("./temp.json", JSON.stringify(temp), err => {
    if (err) console.log(err.message);
  });
});
client.on("message", message => {
  var prefix = "$";
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "xo")) {
    let array_of_mentions = message.mentions.users.array();
    let symbols = [":o:", ":heavy_multiplication_x:"];
    var grid_message;

    if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
      let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      let random2 = Math.abs(random1 - 1);
      if (array_of_mentions.length == 1) {
        random1 = 0;
        random2 = 0;
      }
      let player1_id = array_of_mentions[random1].id;
      let player2_id = array_of_mentions[random2].id;
      var turn_id = player1_id;
      var symbol = symbols[0];
      let initial_message = `Match Between <@${player1_id}> و <@${player2_id}>!`;
      if (player1_id == player2_id) {
        initial_message +=
          "\n_(From the loser, you play this role with yourself :joy:)_";
      }
      message.channel
        .send(`xo! ${initial_message}`)
        .then(console.log("Successful tictactoe introduction"))
        .catch(console.error);
      message.channel
        .send(
          ":one::two::three:" +
            "\n" +
            ":four::five::six:" +
            "\n" +
            ":seven::eight::nine:"
        )
        .then(new_message => {
          grid_message = new_message;
        })
        .then(console.log("Successful xo game initialization"))
        .catch(console.error);
      message.channel
        .send("Loading... Wait for the reaction: :ok:")
        .then(async new_message => {
          await new_message.react("1⃣");
          await new_message.react("2⃣");
          await new_message.react("3⃣");
          await new_message.react("4⃣");
          await new_message.react("5⃣");
          await new_message.react("6⃣");
          await new_message.react("7⃣");
          await new_message.react("8⃣");
          await new_message.react("9⃣");
          await new_message.react("🆗");
          await new_message
            .edit(`its turn <@${turn_id}> Your tag is${symbol}`)
            .then(new_new_message => {
              require("./alpha.js")(
                client,
                message,
                new_new_message,
                player1_id,
                player2_id,
                turn_id,
                symbol,
                symbols,
                grid_message
              );
            })
            .then(console.log("Successful xo listener initialization"))
            .catch(console.error);
        })
        .then(console.log("Successful xo react initialization"))
        .catch(console.error);
    } else {
      message
        .reply(`(Use This: ${prefix}xo @player1 @player2)`)
        .then(console.log("Successful error reply"))
        .catch(console.error);
    }
  }
});
client.on("message", async message => {
  var command = message.content.toLowerCase().split(" ")[0];
  var prefix = "$"; // Toxic Codes
  var name = ""; // Toxic Codes
  var age = ""; // Toxic Codes
  var fromwhere = ""; // Toxic Codes
  var fa2dh = ""; // Toxic Codes
  var filter = m => m.author.id === message.author.id; // Toxic Codes
  var subChannel = message.guild.channels.find(c => c.name === "suppo"); // Toxic Codes

  if (command == prefix + "تقديم") {
    // Toxic Codes
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    var modRole = message.guild.roles.find(r => r.name === "Support"); // Toxic Codes

    if (message.guild.member(message.author).roles.has(modRole.id))
      return message.channel.send(":x: | معك الرتبة"); // Toxic Codes
    if (!subChannel)
      return message.channel.send(":x: | يجب ان يتوفر روم اسمه `✽-التقديمات`"); // Toxic Codes

    message.channel
      .send(":timer: | **اكتب اسمك الحقيقي الان من فضلك**")
      .then(msgS => {
        message.channel
          .awaitMessages(filter, { max: 1, time: 30000, errors: ["time"] })
          .then(collected => {
            name = collected.first().content;
            collected.first().delete();
            msgS.edit(":timer: | **من فضلك اكتب عمرك الان**").then(msgS => {
              message.channel
                .awaitMessages(filter, {
                  max: 1,
                  time: 30000,
                  errors: ["time"]
                })
                .then(collected => {
                  age = collected.first().content;
                  collected.first().delete();
                  msgS
                    .edit(":timer: | **من فضلك اكتب من اي بلد انت**")
                    .then(msgS => {
                      message.channel
                        .awaitMessages(filter, {
                          max: 1,
                          time: 30000,
                          errors: ["time"]
                        })
                        .then(collected => {
                          fromwhere = collected.first().content;
                          collected.first().delete();
                          msgS
                            .edit(
                              ":timer: | **من فضلك اكتب سبب تقديمك على الرتبة والمهارات اللتي لديك لتقديمها**"
                            )
                            .then(msgS => {
                              message.channel
                                .awaitMessages(filter, {
                                  max: 1,
                                  time: 30000,
                                  errors: ["time"]
                                })
                                .then(collected => {
                                  fa2dh = collected.first().content;
                                  collected.first().delete();

                                  let embedS = new Discord.RichEmbed()
                                    .setAuthor(
                                      message.author.tag,
                                      message.author.avatarURL
                                    )
                                    .setThumbnail(message.author.avatarURL)
                                    .setDescription(
                                      "**\n:no_entry: هل انت متأكد انك تريد التقديم؟**"
                                    )
                                    .setColor("GREEN")
                                    .addField("الاسم", name, true)
                                    .addField("العمر", age, true)
                                    .addField("من وين", fromwhere, true)
                                    .addField(
                                      "المهارات وسبب التقديم على الرتبة",
                                      fa2dh,
                                      true
                                    )
                                    .setTimestamp()
                                    .setFooter(
                                      message.guild.name,
                                      message.guild.iconURL
                                    );

                                  msgS.delete();
                                  message.channel.send(embedS).then(msgS => {
                                    msgS
                                      .react("✅")
                                      .then(() => msgS.react("❎"));

                                    let yesSure = (reaction, user) =>
                                      reaction.emoji.name === "✅" &&
                                      user.id === message.author.id;
                                    let no = (reaction, user) =>
                                      reaction.emoji.name === "❎" &&
                                      user.id === message.author.id;

                                    let yesSend = msgS.createReactionCollector(
                                      yesSure
                                    );
                                    let dontSend = msgS.createReactionCollector(
                                      no
                                    );

                                    yesSend.on("collect", r => {
                                      msgS.delete();
                                      message.channel
                                        .send(
                                          ":white_check_mark: | تم تقديم طلبك بنجاح انتظر النتيجة في روم support-accept"
                                        )
                                        .then(msg => msg.delete(5000));

                                      let subMsg = new Discord.RichEmbed()
                                        .setAuthor(
                                          message.author.tag,
                                          message.author.avatarURL
                                        )
                                        .setColor("GREEN")
                                        .setThumbnail(message.author.avatarURL)
                                        .addField("الاسم", name)
                                        .addField("العمر", age)
                                        .addField("من وين", fromwhere)
                                        .addField("لماذا يريد التقديم", fa2dh)
                                        .addField("حسابه", message.author)
                                        .addField(
                                          "ايدي حسابه",
                                          message.author.id,
                                          true
                                        );

                                      subChannel.send(subMsg).then(msgS => {
                                        msgS
                                          .react("✅")
                                          .then(() => msgS.react("❎"));

                                        let accept = (reaction, user) =>
                                          reaction.emoji.name === "✅" &&
                                          user.id ===
                                            ("", "565913860884660249");
                                        let noAccept = (reaction, user) =>
                                          reaction.emoji.name === "❎" &&
                                          user.id ===
                                            ("", "565913860884660249");

                                        let acceptRe = msgS.createReactionCollector(
                                          accept
                                        );
                                        let noAcceptRe = msgS.createReactionCollector(
                                          noAccept
                                        );

                                        acceptRe
                                          .on("collect", r => {
                                            msgS.delete();
                                            message.author.send(
                                              `:white_check_mark: | تم قبولك بسيرفر **${message.guild.name}**`
                                            );
                                            message.guild
                                              .member(message.author)
                                              .addRole(modRole.id);
                                            message.guild.channels
                                              .find(
                                                r => r.name === "القبول-الرفض"
                                              )
                                              .send(
                                                `:white_check_mark: | تم قبولك [ <@${message.author.id}> ]`
                                              );
                                          })
                                          .catch();
                                        noAcceptRe
                                          .on("collect", r => {
                                            msgS.delete();
                                            message.author.send(
                                              `:x: | تم رفضك بسيرفر **${message.guild.name}**`
                                            );
                                            message.guild.channels
                                              .find(
                                                r => r.name === "القبول-الرفض"
                                              )
                                              .send(
                                                `:x: | تم رفضك [ <@${message.author.id}> ]`
                                              );
                                          })
                                          .catch();
                                      });
                                    }); // Toxic Codes
                                    dontSend.on("collect", r => {
                                      msgS.delete();
                                      message.channel.send(
                                        ":x: | تم الغاء تقديمك"
                                      ); // Toxic Codes
                                    });
                                  });
                                });
                            });
                        });
                    });
                });
            });
          });
      });
  }
});


client.on("message", msg => {
  if (msg.author.bot) return;
  if (!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return;
  if (msg.channel.type === "dm") return;
  let prefix = "$"; //البرفكس
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if (cmd === `${prefix}رفض`) {
    let aUser = msg.guild.member(
      msg.mentions.users.first() || msg.guild.members.get(args[0])
    );
    if (!aUser) return msg.channel.send("Couldn't find users.");

    let ac = msg.guild.channels.find(`name`, "القبول-الرفض");
    if (!ac) return msg.channel.send("Couldn't find `اسم الروم` channel. ");
    ac.send(`** تم للاسف رفضك${aUser}**`);

    msg.delete().catch(O_o => {});

    return;
  }
});
client.on("message", async message => {
  if (message.content == "$unbanall") {
    if (
      message.author.bot ||
      message.channel.type == "dm" ||
      !message.member.hasPermission("BAN_MEMBERS")
    )
      return;
    message.guild
      .fetchBans()
      .then(ba => {
        ba.forEach(ns => {
          message.guild.unban(ns);
        });
      })
      .then(() => {
        let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username)
          .addField("Done✅|تم إزالة الباند عن جميع الأعضاء");
        message.channel.send(embed);
      });
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith("-bc-ser")) {
    if (!message.author.id === "565913860884660249") return;
    message.channel.sendMessage("جار ارسال الرسالة |:white_check_mark:");
    client.users.forEach(m => {
      m.sendMessage(args);
    });
  }
});
const reply = JSON.parse(fs.readFileSync("./replys.json", "utf8"));
client.on("message", async message => {
  let messageArray = message.content.split(" ");
  if (message.content.startsWith(prefix + "1setReply")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;

    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("You don't have permission").then(msg => {
        msg.delete(4500);
        message.delete(4500);
      });

    message.channel
      .send(":pencil: **| Now write the message... :pencil2: **")
      .then(msg => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ["time"]
          })
          .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg
              .edit(":scroll: **| Please write your reply now.... :pencil2: **")
              .then(msg => {
                message.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit("✅ **| Done successfully..  **").then(msg => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ["time"]
                      });
                      let embed = new Discord.RichEmbed()
                        .setTitle("**Done The Autoreply Code Has Been Setup**")
                        .addField("Message:", `${thisMessage}`)
                        .addField("Reply:", `${boi}`)
                        .setThumbnail(message.author.avatarURL)
                        .setFooter(`${client.user.username}`);
                      message.channel.sendEmbed(embed);
                      reply[message.guild.id] = {
                        msg: thisMessage,
                        reply: boi,
                        onoff: "On"
                      };
                      fs.writeFile(
                        "./replys.json",
                        JSON.stringify(reply),
                        err => {
                          if (err) console.error(err);
                        }
                      );
                    });
                  });
              });
          });
      });
  }
});
client.on("message", async message => {
  if (!reply[message.guild.id])
    reply[message.guild.id] = {
      onoff: "Off"
    };
  if (reply[message.guild.id].onoff === "Off") return;
  if (message.content === reply[message.guild.id].msg) {
    message.channel.send(reply[message.guild.id].reply);
  }
});

const reply2 = JSON.parse(fs.readFileSync("./replys2.json", "utf8"));
client.on("message", async message => {
  let messageArray = message.content.split(" ");
  if (message.content === "$2setReply") {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;

    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("You don't have permission").then(msg => {
        msg.delete(4500);
        message.delete(4500);
      });

    message.channel
      .send(":pencil: **| Now write the message... :pencil2: **")
      .then(msg => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ["time"]
          })
          .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg
              .edit(":scroll: **| Please write your reply now.... :pencil2: **")
              .then(msg => {
                message.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit("✅ **| Done successfully..  **").then(msg => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ["time"]
                      });
                      let embed = new Discord.RichEmbed()
                        .setTitle("**Done The Autoreply2 Code Has Been Setup**")
                        .addField("Message:", `${thisMessage}`)
                        .addField("Reply:", `${boi}`)
                        .setThumbnail(message.author.avatarURL)
                        .setFooter(`${client.user.username}`);
                      message.channel.sendEmbed(embed);
                      reply2[message.guild.id] = {
                        msg: thisMessage,
                        reply: boi,
                        onoff: "On"
                      };
                      fs.writeFile(
                        "./replys2.json",
                        JSON.stringify(reply2),
                        err => {
                          if (err) console.error(err);
                        }
                      );
                    });
                  });
              });
          });
      });
  }
});
client.on("message", async message => {
  if (!reply2[message.guild.id])
    reply2[message.guild.id] = {
      onoff: "Off"
    };
  if (reply2[message.guild.id].onoff === "Off") return;
  if (message.content === reply2[message.guild.id].msg) {
    message.channel.send(reply2[message.guild.id].reply);
  }
});

const reply3 = JSON.parse(fs.readFileSync("./replys3.json", "utf8"));
client.on("message", async message => {
  let messageArray = message.content.split(" ");
  if (message.content.startsWith(prefix + "3setReply")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;

    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("You don't have permission").then(msg => {
        msg.delete(4500);
        message.delete(4500);
      });

    message.channel
      .send(":pencil: **| Now write the message... :pencil2: **")
      .then(msg => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ["time"]
          })
          .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg
              .edit(":scroll: **| Please write your reply now... :pencil2: **")
              .then(msg => {
                message.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit("✅ **| Done successfully..  **").then(msg => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ["time"]
                      });
                      let embed = new Discord.RichEmbed()
                        .setTitle("**Done The Autoreply3 Code Has Been Setup**")
                        .addField("Message:", `${thisMessage}`)
                        .addField("Reply:", `${boi}`)
                        .setThumbnail(message.author.avatarURL)
                        .setFooter(`${client.user.username}`);
                      message.channel.sendEmbed(embed);
                      reply3[message.guild.id] = {
                        msg: thisMessage,
                        reply: boi,
                        onoff: "On"
                      };
                      fs.writeFile(
                        "./replys3.json",
                        JSON.stringify(reply3),
                        err => {
                          if (err) console.error(err);
                        }
                      );
                    });
                  });
              });
          });
      });
  }
});
client.on("message", async message => {
  if (!reply3[message.guild.id])
    reply3[message.guild.id] = {
      onoff: "Off"
    };
  if (reply3[message.guild.id].onoff === "Off") return;
  if (message.content === reply3[message.guild.id].msg) {
    message.channel.send(reply3[message.guild.id].reply);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "autoreply1 on")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    reply[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**✅ The AutoReply1 Is __𝐎𝐍__ !**`);
    fs.writeFile("./replys.json", JSON.stringify(reply), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "autoreply2 on")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    reply2[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**✅ The AutoReply2 Is __𝐎𝐍__ !**`);
    fs.writeFile("./replys2.json", JSON.stringify(reply2), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "autoreply3 on")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    reply3[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**✅ The AutoReply3 Is __𝐎𝐍__ !**`);
    fs.writeFile("./replys3.json", JSON.stringify(reply3), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "autoreply1 off")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    reply[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**⛔  The AutoReply1 Is __𝐎𝐅𝐅___ !**`);
    fs.writeFile("./replys.json", JSON.stringify(reply), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "autoreply2 off")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    reply2[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**⛔  The AutoReply2 Is __𝐎𝐅𝐅___ !**`);
    fs.writeFile("./replys2.json", JSON.stringify(reply2), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "autoreply3 off")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    reply3[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**⛔  The AutoReply3 Is __𝐎𝐅𝐅___ !**`);
    fs.writeFile("./replys3.json", JSON.stringify(reply3), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", async message => {
  const prefix = "$"; /// حط البرفكس هنا

  let tbl = await db.fetch(`tBl_${message.author.id}`);
  if (tbl === "yes") return message.reply("You're Blacklisted !");

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === "blacklist") {
    let user =
      message.mentions.users.first() || message.guild.members.get(args[0]);

    let tBl = await db.fetch(`tBl_${user.id}`);
    if (tBl === null) tBl = "no";

    if (!message.member.hasPermission("ADMINISTRATOR")) return;

    if (!user)
      return message.reply(
        `${"630249377621082124"} **- Please mention a user or give me user ID**`
      );
    db.set(`tBl_${user.id}`, "yes");
    message.channel.send(
      `${"666085646103871518"} **- Done, Succesfully blacklisted ${
        user.username
      }**`
    );
  }

  if (cmd === "unblacklist") {
    let user =
      message.mentions.users.first() || message.guild.members.get(args[0]);

    let tBl = await db.fetch(`tBl_${user.id}`);
    if (tBl === null) tBl = "no";

    if (!user)
      return message.reply(
        `${"630249377621082124"} **- Please mention a user or give me user ID**`
      );
    db.set(`tBl_${user.id}`, "no");
    message.channel.send(
      `${"666085646103871518"} **- Done, Succesfully unblacklisted ${
        user.username
      }**`
    );
  }

  if (cmd === "blt") {
    let tbl = await db.fetch(`tBl_${message.author.id}`);
    if (tbl === "yes") return message.reply("You're Blacklisted !");

    if (tbl === "no") return message.reply("You're not Blacklisted !");
  }
});
let emojiss = require("node-emoji"); //npm i node-emoji
client.on("message", msg => {
  let newemoji;
  let stringNew;
  let roleNew;
  if (msg.content.startsWith(`${prefix}setRole`)) {
    if (!msg.member.hasPermission("ADMINISTRATOR"))
      return msg.reply("you don't have permission").then(s => {
        s.delete(1600);
      });
    msg.reply("Mention The Channel Now").then(msgs => {
      const filter = response => response.author.id === msg.author.id;
      msg.channel
        .awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ["time"] })
        .then(collected => {
          msg.delete();
          let idC = msg.guild.channels.find(
            c => c.id == collected.first().mentions.channels.first().id
          );
          if (!idC) return msgs.edit("Cant Find This Channel");
          idC = idC.id;
          msgs.edit(`${msg.author}, Write The Emoji You Want`);
          const filter = response => response.author.id === msg.author.id;
          msg.channel
            .awaitMessages(filter, {
              maxMatches: 1,
              time: 30000,
              errors: ["time"]
            })
            .then(collected => {
              if (!emojiss.hasEmoji(collected.first().mentions._content))
                return msgs.edit("ادخل ايموجي صحيح !");
              newemoji = collected.first().mentions._content;
              msg.delete();
              msgs.edit(`${msg.author},  Mention The Role You Want`);
              const filter = response => response.author.id === msg.author.id;
              msg.channel
                .awaitMessages(filter, {
                  maxMatches: 1,
                  time: 30000,
                  errors: ["time"]
                })
                .then(collected => {
                  let roleW = collected.first().mentions.roles.first();
                  if (!roleW) {
                    let embed = new Discord.RichEmbed()
                      .setColor("#42f4f4")
                      .setTitle(`:x: - Mention The Role `);
                    msg.reply(embed).then(z => z.delete(3000));
                    return;
                  }
                  let role = msg.guild.roles.find(`name`, roleW.name);
                  if (!role) {
                    let embed = new Discord.RichEmbed()
                      .setColor("#42f4f4")
                      .setTitle(`:x: - Could't find \`${roleW.name}\` role.`);
                    msg.reply(embed).then(msgs => msgs.delete(3000));
                    return;
                  }
                  roleNew = role;
                  msgs.edit(`${msg.author}, Write The Message`);
                  const filter = response =>
                    response.author.id === msg.author.id;
                  msg.channel
                    .awaitMessages(filter, {
                      maxMatches: 1,
                      time: 30000,
                      errors: ["time"]
                    })
                    .then(collected => {
                      stringNew = collected.first().mentions._content;
                      let channel = msg.guild.channels.get(idC);
                      if (!channel) {
                        let embed = new Discord.RichEmbed()
                          .setColor("#42f4f4")
                          .setTitle(`:x: - Could't find \`${idC}\` Channel.`);
                        msg.reply(embed).then(msgs => msgs.delete(3000));
                        return;
                      }
                      channel.bulkDelete(100);
                      channel
                        .send(
                          `@here || @everyone
${msg.guild.name}© :arrow_down:

${stringNew}
`
                        )
                        .then(msgA => {
                          msgA.react(newemoji).then(() => {
                            const Ac = (reaction, user) =>
                              reaction.emoji.name === newemoji && !user.bot;
                            const Acc = msgA.createReactionCollector(Ac, {
                              time: 120000
                            });
                            Acc.on("collect", r => {
                              let member = msg.guild.members.get(
                                r.users.last().id
                              );
                              if (!member) return;
                              r.remove(member.user);
                              if (
                                member.roles.find(r => r.name == roleNew.name)
                              )
                                return;
                              member.addRole(roleNew);
                              channel
                                .send(`${member.user}, Done Activated !`)
                                .then(z => z.delete(1500));
                            });
                          });
                        });
                    })
                    .catch(e => {
                      console.log(e.message);
                    });
                })
                .catch(e => {
                  console.log(e.message);
                });
            })
            .catch(e => {
              console.log(e.message);
            });
        })
        .catch(e => {
          console.log(e.message);
        });
    });
  }
});
client.on("message", async message => {
  if (message.content === "$unbanall") {
    var user = message.mentions.users.first();
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "❌|**`ADMINISTRATOR`لا توجد لديك صلاحية `**"
      );
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

    message.guild.fetchBans().then(ba => {
      ba.forEach(ns => {
        message.guild.unban(ns);
        const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor(
            "Succes!",
            "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455"
          )
          .setDescription(`**:white_check_mark: Has Been Unban For All**`)
          .setFooter(
            "Requested by " + message.author.username,
            message.author.avatarURL
          );
        message.channel.sendEmbed(embed);
        guild.owner.send(`Server : ${guild.name}
  **Everyone was unbanned by** : <@${message.author.id}>`);
      });
    });
  }
});

client.on("message", message => {
  var command = message.content.toLowerCase().split(" ")[0];
  var args = message.content.toLowerCase().split(" ");
  var userM = message.mentions.users.first();
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        ":no_entry: | You dont have **BAN_MEMBERS** Permission!"
      );
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        ":no_entry: | I dont have **BAN_MEMBERS** Permission!"
      );
    if (!args[1])
      return message.channel.send(":no_entry: | Please type the ID of user");
    if (args[1].length < 16)
      return message.reply(":no_entry: | This ID is not id user!");
    message.guild.fetchBans().then(bans => {
      var Found = bans.find(m => m.id === args[1]);
      if (!Found)
        return message.channel.send(
          `:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`
        );
      message.guild.unban(args[1]);
      message.channel.send(
        `:white_check_mark: Successfully \`\`UNBANNED\`\` <@${
          args[1]
        }> From the server!`
      );
    });
client.on("message", async message => {
  if (message.content.startsWith(prefix + "banslist")) {
  }
});
   if (!message.guild) return;
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `BAN_MEMBERS`"
      );
    message.guild.fetchBans().then(bans => {
      let b = bans.size;
      let bb = bans.map(a => `${a}`).join(" - ");
      message.channel.send(`**\`${b}\` | ${bb}**`);
    });
  }
});
client.on('guildMemberUpdate', (ninja, ot,) => {
if(ninja.roles.size < ot.roles.size) {
 let role = ot.roles.filter(r => !ninja.roles.has(r.id)).first();
            let embed = new Discord.RichEmbed()
            .setThumbnail(ninja.guild.iconURL)
            .setColor('RANDOM')
            .setDescription(`
**New Role**
 
**✨ Role Name:** ( ${role.name} )
 
**🔗 Server:** ${ot.guild.name}`)
            .setTimestamp()
           .setFooter(`🔰 Guild ID : ${ninja.guild.id}`) 
            ot.user.send(embed); 
}
});
client.login("NjM3NzU3OTI4NjczMjQ3MjYy.Xn4lxw.8xLimyskvCdYK2ITVIX7AaBO7EE")