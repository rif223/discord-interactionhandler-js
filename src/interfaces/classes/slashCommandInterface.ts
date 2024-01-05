import { ApplicationCommandType } from "discord.js";
import { Command } from "./commandInterface";

/**
 * A slash command requires this command class!
 * @extends Command
 */
export class SlashCommand extends Command {
    get type() {
        return ApplicationCommandType.ChatInput;
    }

    /**
     * This function set the command options!
     * @returns The function must be return a array!
     * @default []
     */
    get options(): any {
        return [];
    }
}