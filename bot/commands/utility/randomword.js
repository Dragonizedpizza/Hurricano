import Command from "@Command";
import { generateWordWithMaxLength, generateWordWithLength } from "../../utilities/random-words.js";
export default new Command({
	name: "randomword",
	aliases: ["rw"],
	description: "Generate a random word with a specific length!",
	async run(message, args) {
		const amount = args[0];
		if (!amount) return message.editError("Oops!", `Hey! The usage is \`${message._usedPrefix}randomword <wordlength>\``);
		let number = parseInt(amount);
		let word = generateWordWithLength(number);
		if (!word) return message.sendErrorReply("Error!", "Sorry, I couldn't find a word for that length.");
		message.channel.send(`I generated a word!\nIt is: **${word}**`);
	},
});
