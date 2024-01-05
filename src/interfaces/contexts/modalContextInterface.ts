import {
    ModalSubmitInteraction
} from "discord.js";
import { BaseContext } from "./contextInterface";

/**
 * This is the modal context interface!
 */
export interface ModalContext extends BaseContext {
    /**
     * This is the modal interaction!
     */
    interaction: ModalSubmitInteraction
}