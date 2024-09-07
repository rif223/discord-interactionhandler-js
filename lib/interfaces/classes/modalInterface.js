import { EmbedBuilder } from "discord.js";
/**
 * A modal requires the ModalInterface class!
 * @example
 * ```
 * import { ModalContext, ModalInterface } from "discord-interactionhandler-js";
 *
 * class Modal extends ModalInterface {
 *     get custom_id() {
 *         return "modal_1";
 *     }
 *
 *     async run(ctx: ModalContext) {
 *
 *     }
 * }
 * ```
 */
export default class ModalInterface {
    /**
     * This function set the custom id!
     * @returns The function must be return a string!
     * @default ""
     */
    get custom_id() {
        return "";
    }
    /**
     * This function is executed when the modal is called!
     * @param ctx
     */
    run(ctx) {
        throw Error("run() must be implemented!");
    }
    /**
     * This function can be used in to send a error message in discord!
     * @param interaction
     * @param error
     * @returns The function returns the error reply!
     */
    sendErrorMsg(interaction, error) {
        let emb = new EmbedBuilder()
            .setColor(15158332)
            .setTitle("Error")
            .setDescription(error);
        return interaction.reply({ embeds: [emb] });
    }
}
