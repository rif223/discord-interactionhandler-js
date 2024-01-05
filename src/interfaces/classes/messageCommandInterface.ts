import { ApplicationCommandType } from "discord.js";
import { Command } from "./commandInterface";

/**
 * A message command requires this command class!
 * @extends Command
 */
export class MessageCommand extends Command {
  get type() {
    return ApplicationCommandType.Message;
  }
}