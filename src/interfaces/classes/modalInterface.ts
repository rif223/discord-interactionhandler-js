import {
    EmbedBuilder,
    ModalSubmitInteraction
} from "discord.js";
import { ModalContext } from "../contexts/modalContextInterface";

/**
 * A modal requires this modal class!
 */
export class ModalInterface {
    /**
     * This function set the custom id!
     * @returns The function must be return a string!
     * @default ""
     */
    get custom_id(): string {
        return "";
    }

    /**
     * This function is executed when the modal is called!
     * @param ctx
     */
    run(ctx: ModalContext) {
        throw Error("run() must be implemented!");
    }
    
    /**
     * This function can be used in to send a error message in discord!
     * @param interaction
     * @param error
     * @returns The function returns the error reply!
     */
    sendErrorMsg(interaction: ModalSubmitInteraction, error: string) {
        let emb = new EmbedBuilder()
        .setColor(15158332)
        .setTitle("Error")
        .setDescription(error)

        return interaction.reply({ embeds: [emb] });
    }
}