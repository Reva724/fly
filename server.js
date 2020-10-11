//=============================== - [ Consts ] - ===================================
const Discord = require("discord.js");
const client = new Discord.Client();
const { Util } = require("discord.js");
const timezone = require("moment-timezone");
const fs = require("fs");
const request = require("request");
const prefix = "!";
const { Collection, RichEmbed } = require("discord.js");

const beautify = require("js-beautify");
const { inspect } = require("util");
client.on("ready", () => console.log("🤖Ready Bot In Online🤖"));

client.on("message", message => {
  let args = message.content.split(" "),
    cmd = args[0];
  if (cmd === prefix + "register") {
    if (message.channel.id !== "747034924447694940") return;
    let channel = client.channels.get("750747951705489448"),
      role = message.member.guild.roles.find(
        role => role.id === "755215445069398156"
      );
    channel.overwritePermissions(role, { SEND_MESSAGES: true });
    message.reply(" Opened").then(msg => {
      setTimeout(() => {
        channel.overwritePermissions(role, { SEND_MESSAGES: false });
        msg.edit(`<@${message.author.id}> closed`);
      }, 1000 * 45);
    });
  }
});


client.on("message", message => {
  let args = message.content.split(" ");
  if (message.content.startsWith(prefix + "register")) {
    if (message.channel.id !== "750747951705489448") return;
    if (!args[1]) return message.react("❌");
    message.react("➿").then(R => {
      let role = message.member.guild.roles.find(
        role => role.id === "764440793695125505"
      );
      R.remove();
      message.react("➰").then(RR => {
        message.member.addRole(role);
        RR.remove();
        message.react("✅");
      });
    });
  }
});

client.login("NzY0ODI4NDkzNDA1NzQ5MjUx.X4L8Cg.obDwMKrRILi4H5tbQFiTLvbHHvU");
