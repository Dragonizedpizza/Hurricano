import BaseEvent from "../../structures/BaseEvent.js";
export default (class guildDeleteEvent extends BaseEvent {
	constructor(client) {
		super("guildDelete", {
			client: client,
			description: "Event meant disabling a guild if left.",
		});
	}
	async run(guild, client) {
		const guildSchema = guild.db.cache();
		guildSchema.isActive = false;
		await guildSchema.save();
	}
});
