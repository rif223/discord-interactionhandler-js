import {
    EmbedBuilder,
    ModalSubmitInteraction
} from "discord.js";
import { ModalContext } from "../contexts/modalContextInterface";

export class ModalInterface {
    get custom_id(): string {
        return "";
    }

    run(ctx: ModalContext) {
        throw Error("run() must be implemented!");
    }

    sendErrorMsg(interaction: ModalSubmitInteraction, error: string) {
        let emb = new EmbedBuilder()
        .setColor(15158332)
        .setTitle("Error")
        .setDescription(error)

        return interaction.reply({ embeds: [emb] });
    }
}