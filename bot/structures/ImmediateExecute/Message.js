const { Structures, APIMessage, MessageEmbed } = require("discord.js");

module.exports = Structures.extend(
  "Message",
  (Message) =>
    class HurricanoMessage extends Message {
      constructor(...args) {
        super(...args);
      }
      async sendErrorReply(Header, Msg, Footer, Fields) {
        const embed = new MessageEmbed()
          .setAuthor(
            Header,
            "https://raw.githubusercontent.com/HurricanoBot/HurricanoImages/master/SetAuthorEmojis/Error.png"
          )
          .setColor("RED");
        if (Msg) {
          embed.setDescription(Msg);
        }
        if (Footer) {
          embed.setFooter(Footer, this.author.displayAvatarURL());
        } else {
          embed.setFooter(this.author.username, this.author.displayAvatarURL());
        }
        if (Fields) embed.addFields(Fields);
        const msg = this.reply(embed);
        return msg;
      }
      async sendSuccessReply(Header, Msg, Footer, Fields) {
        const embed = new MessageEmbed()
          .setAuthor(
            Header,
            "https://raw.githubusercontent.com/HurricanoBot/HurricanoImages/master/SetAuthorEmojis/Success.png"
          )
          .setColor("GREEN");
        if (Msg) {
          embed.setDescription(Msg);
        }
        if (Footer) {
          embed.setFooter(Footer, this.author.displayAvatarURL());
        } else {
          embed.setFooter(this.author.username, this.author.displayAvatarURL());
        }
        if (Footer) {
          embed.setFooter(Footer, this.author.displayAvatarURL());
        } else {
          embed.setFooter(this.author.username, this.author.displayAvatarURL());
        }
        if (Fields) embed.addFields(Fields);
        const msg = this.reply(embed);
        return msg;
      }
    }
);
