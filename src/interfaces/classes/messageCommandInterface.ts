import { ApplicationCommandType } from "discord.js";
import { Command } from "./commandInterface";

export class MessageCommand extends Command {
  get type() {
    return ApplicationCommandType.Message;
  }
}