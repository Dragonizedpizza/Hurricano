const Command = require("@Command");
const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

module.exports = new Command({
  name: "github",
  aliases: ["github", "gh"],
  cooldown: 30,
  description: "fetches the github repo of through the information provided by the user",
  async run(message, args) {
    let user = !args[0] ? "Novus" : args[0];
    let repo = !args[1] ? "Novus" : args[1];

    // Fetch repository from github API
    let uri = await fetch(`https://api.github.com/repos/${user}/${repo}`);

    // Check the fetch status, if it's 200 then return embed with information
    if (uri.status === 200) {
      let uriJson = await uri.json();
      let embed = new Discord.MessageEmbed()
        .setAuthor(uriJson.owner.login, uriJson.owner.avatar_url)
        .setDescription(`${uriJson.description}\n[Repository Link](${uriJson.html_url})\n`)
        .addField("Repo Name :notepad_spiral:", `${uriJson.name}`, true)
        .addField("Stars :star:", `${uriJson.stargazers_count}`, true)
        .addField("Forks :gear:", `${uriJson.forks}`, true)
        .addField("Language :desktop:", `${uriJson.language}`, true)
        .setImage(uriJson.owner.avatar_url)
        .setColor("#ffff")
      return message.channel.send(embed)
    } else {
      return message.channel.send("Unable to find the mentioned repository. Please make sure you have entered the correct user/repository. \`.github [user] [repository]\`")
    }
  },
});
