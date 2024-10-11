import { ApplicationCommandType } from "discord.js";
import Command from "./commandInterface";

/**
 * A message command requires this command class!
 * @extends Command
 * @example
 * ```
 * import { CommandContext, MessageCommand } from "discord-interactionhandler-js";
 * 
 * class MCommand extends MessageCommand {
 *     get name() {
 *         return "message";
 *     }
 *     
 *     get description() {
 *         return "This is a massage command!"
 *     }
 *
 *     get version() {
 *         return "1.0.0";
 *     }
 *
 *     async run(ctx: CommandContext) {
 *
 *     }
 * }
 * ```
 */
export default class MessageCommand extends Command {
  get type() {
    return ApplicationCommandType.Message;
  }
}