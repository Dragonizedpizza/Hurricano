import moduleAlias from "../utilities/module-alias.js";
import { Intents, Collection } from "discord.js";
import client$0 from "@root/bot/Client.js";
import config from "@config";
import "@root/website/index.js";
moduleAlias();
const { HurricanoClient, loadStructures } = client$0, intents = new Intents();
global._Collection = Collection;
loadStructures();
intents.add("GUILD_PRESENCES", "GUILD_MEMBERS", "GUILDS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS");
const client = new HurricanoClient(config, {
    intents: intents,
    allowedMentions: { parse: ["users"], repliedUser: false },
});
global.client = client;
// website initialization
if (client.config.website.enabled) {
}
async function init() {
    client.loadCommands();
    client.loadEvents();
    await client.loadTopgg();
    client.db.init();
    client.connect();
}
init();
process.on("unhandledRejection", (error) => client.logger.warn(error));
