import { ApplicationCommandType } from "discord.js";
import { Command } from "./commandInterface";

/**
 * A user command requires this command class!
 * @extends Command
 */
export class UserCommand extends Command {
  get type() {
    return ApplicationCommandType.User;
  }
}