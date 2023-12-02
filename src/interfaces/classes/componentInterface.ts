import {
    EmbedBuilder
} from "discord.js";
import { ComponentContext } from "../contexts/componentContextInterface";

export class ComponentInterface {
    get custom_id(): string {
        return "";
    }

    run(ctx: ComponentContext) {
        throw Error("run() must be implemented!");
    }

    sendErrorMsg(interaction: any, error: string) {
        let emb = new EmbedBuilder()
        .setColor(15158332)
        .setTitle("Error")
        .setDescription(error)

        return interaction.reply({ embeds: [emb] });
    }
}