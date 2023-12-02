import {
    EmbedBuilder,
    ApplicationCommandType,
    CommandInteraction
} from "discord.js";
import { CommandContext } from "../contexts/commandContextInterface";

export class Command {
    get name(): string {
        throw Error("name must be implemented!");
    }

    get description(): string {
        return "no description"
    }

    get type(): ApplicationCommandType {
        return 1;
    }

    get guildOnly(): boolean {
        return false;
    }

    get version(): string {
        return "1.0.0";
    }

    run(ctx: CommandContext) {
        throw Error("run() must be implemented!");
    }

    sendErrorMsg(interaction: CommandInteraction, error: string) {
        let emb = new EmbedBuilder()
        .setColor(15158332)
        .setTitle("Error")
        .setDescription(error)

        return interaction.reply({ embeds: [emb] });
    }
}