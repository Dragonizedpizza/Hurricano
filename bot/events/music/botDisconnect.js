export const name = "botDisconnect";
export const run = async (queue) => {
	const message = queue.metadata;
	message.channel.sendError(message, "Bot Disconnected.", `Music playback has been seized due to me being disconnected from the channel.`);
};
export default {
	name,
	run,
};
