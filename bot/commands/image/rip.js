import * as Discord from "discord.js";
import { MessageAttachment } from "discord.js";
import Command from "@Command";
import canvacord from "canvacord";
export default new Command({
	name: "rip",
	cooldown: 5,
	description: "Shows you someone's grave!",
	async run(message, args) {
		let person = (await client.functions.getMember(true, message, args[0])).user;
		let avatar = person.displayAvatarURL({
			dynamic: false,
			format: "png",
			size: 1024,
		});
		const img = await canvacord.Canvas.rip(avatar);
		const embed = new Discord.MessageEmbed()
			.setAuthor("R.I.P.", message.author.displayAvatarURL())
			.setDescription(`Rip ${person.toString()}!`)
			.attachFiles([new Discord.MessageAttachment(img, "img.png")])
			.setImage("attachment://img.png");
		message.reply({
			embeds: [embed],
			files: [new MessageAttachment(img, "img.png")],
		});
	},
});
