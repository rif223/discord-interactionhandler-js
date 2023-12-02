import { ApplicationCommandType } from "discord.js";
import { Command } from "./commandInterface";

export class UserCommand extends Command {
  get type() {
    return ApplicationCommandType.User;
  }
}