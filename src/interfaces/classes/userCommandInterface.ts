import { ApplicationCommandType } from "discord.js";
import Command from "./commandInterface";

/**
 * A user command requires this command class!
 * @extends Command
 * @example
 * ```
 * import { CommandContext, UserCommand } from "discord-interactionhandler-js";
 * 
 * class UCommand extends UserCommand {
 *     get name() {
 *         return "user";
 *     }
 *     
 *     get description() {
 *         return "This is a user command!"
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
export default class UserCommand extends Command {
  get type() {
    return ApplicationCommandType.User;
  }
}