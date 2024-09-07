import { ApplicationCommandType } from "discord.js";
import Command from "./commandInterface.js";

/**
 * A slash command requires this command class!
 * @extends Command
 * @example
 * ```
 * import { CommandContext, SlashCommand } from "discord-interactionhandler-js";
 * 
 * class SayCommand extends SlashCommand {
 *     get name() {
 *         return "say";
 *     }
 *     
 *     get description() {
 *         return "This is a say command!"
 *     }
 *
 *     get options() {
 *         return [
 *             {
 *                 type: 3,
 *                 name: "string",
 *                 description: "This is a string!",
 *                 required: true
 *             }
 *         ];
 *     }
 *
 *     get version() {
 *         return "1.0.0";
 *     }
 *
 *     async run(ctx: CommandContext) {
 *
 *         let string = ctx.options.getString("string");
 *         ctx.interaction.reply({ content: string || undefined, fetchReply: true });
 *
 *     }
 * }
 * ```
 */
export default class SlashCommand extends Command {
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