import { MessageEmbed } from "discord.js";
import Command from "@Command";
import fetch from "node-fetch";
export default new Command({
	name: "trump",
	aliases: ["trumpquote"],
	description: "Sends a random trump quote.",
	clientPermissions: ["SEND_MESSAGES"],
	async run(message, args) {
		fetch("https://api.tronalddump.io/random/quote")
			.then((res) => res.json())
			.then((json) => {
				const embed = new MessageEmbed()
					.setColor("#BB7D61")
					.setAuthor("Donald Trump", "https://www.whitehouse.gov/wp-content/uploads/2021/01/45_donald_trump.jpg")
					.setDescription(json.value)
					.setTimestamp(json.appeared_at)
					.setFooter("Powered by tronalddump.io! Quote was posted", " ");
				message.channel.send({
					embeds: [embed],
				});
				return;
			})
			.catch((err) => {
				message.reply("Failed to deliver quote :sob:");
				return console.error(err);
			});
	},
});
