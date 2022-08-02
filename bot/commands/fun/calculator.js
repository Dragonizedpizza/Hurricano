import Command from "@Command";
import Calc from "../../utilities/Calculator.js";
export default new Command({
	name: "calculator",
	description: "Calculate a value.",
	cooldown: 40,
	async run(message, args) {
		await Calc(message);
	},
});
