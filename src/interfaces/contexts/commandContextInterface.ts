import {
    CommandInteraction,
    ApplicationCommand
} from "discord.js";
import BaseContext from "./contextInterface";

/**
 * This is the command context interface!
 */
export default interface CommandContext extends BaseContext {
    /**
     * This is the command interaction!
     */
    interaction: CommandInteraction,
    /**
     * They are the options of the command!
     */
    options: any,
    /**
     * This is the command!
     */
    command: ApplicationCommand | null
}