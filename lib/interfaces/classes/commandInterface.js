import { EmbedBuilder } from "discord.js";
/**
 * A command requires this command class!
 */
export default class Command {
    /**
     * This function set the command name!
     * @returns The function must be return a string!
     */
    get name() {
        throw Error("name must be implemented!");
    }
    /**
     * This function set the command description!
     * @returns The function must be return a string!
     */
    get description() {
        return "no description";
    }
    get type() {
        return 1;
    }
    /**
     * This function restrict the command usage to guilds only!
     * @returns The function must be return a boolean!
     * @default false
     */
    get guildOnly() {
        return false;
    }
    /**
     * This function set the version of the command!
     * @returns The function must be return a string!
     * @default "1.0.0"
     */
    get version() {
        return "1.0.0";
    }
    /**
     * This function is executed when the command is called!
     * @param ctx
     */
    run(ctx) {
        throw Error("run() must be implemented!");
    }
    /**
     * This function can be used in to send a error message in discord!
     * @param interaction
     * @param error
     * @returns The function returns the error reply!
     */
    sendErrorMsg(interaction, error) {
        let emb = new EmbedBuilder()
            .setColor(15158332)
            .setTitle("Error")
            .setDescription(error);
        return interaction.reply({ embeds: [emb] });
    }
}
