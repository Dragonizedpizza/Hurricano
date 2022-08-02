import database from "../schemas/giveaway.js";
import { GiveawaysManager } from "discord-giveaways";
export default (class Gmanager extends GiveawaysManager {
    async refreshStorage() {
        return client.shard.broadcastEval(() => this.giveawaysManager.getAllGiveaways());
    }
    async getAllGiveaways() {
        return await database.find().lean().exec();
    }
    async saveGiveaway(messageId, giveawayData) {
        await database.create(giveawayData);
        return true;
    }
    async editGiveaway(messageId, giveawayData) {
        await database.updateOne({ messageId }, giveawayData, { omitUndefined: true }).exec();
        return true;
    }
    async deleteGiveaway(messageId) {
        await database.deleteOne({ messageId }).exec();
        return true;
    }
});
