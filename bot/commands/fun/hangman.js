import * as Discord from "discord.js";
import Command from "@Command";
import Hangman from "../../utilities/game-apis/hangman.js";
export default new Command({
	name: "hangman",
	aliases: ["hangm"],
	description: "Play hangman!",
	clientPermissions: ["SEND_MESSAGES"],
	async run(message, args) {
		const hangman = new Hangman(message);
		hangman.newGame(message);
	},
});
