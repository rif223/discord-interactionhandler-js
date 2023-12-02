import { ApplicationCommandType } from "discord.js";
import { Command } from "./commandInterface";

export class SlashCommand extends Command {
    get type() {
        return ApplicationCommandType.ChatInput;
    }

    get options(): any {
        return [];
    }
}