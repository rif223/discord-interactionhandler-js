import { ModalSubmitInteraction } from "discord.js";
import Handler from "./mainHandler.js";
import { modalFunc } from "../interfaces/contexts/funcTypes.js";
/**
 * This class handles the modals!
 */
export default class ModalHandler {
    mhandler: Handler;
    modals: any;
    modals_c: any;
    /**
     *
     * @param mhandler
     */
    constructor(mhandler: Handler);
    /**
     * This function registers a modal!
     * @param ModalClass
     */
    registerModal(ModalClass: any): void;
    /**
     * This function adds a modal!
     * @param modal
     * @param runModalFunc
     * @returns
     */
    addModalEvent(modal: any, runModalFunc: modalFunc): any;
    /**
     * This function handles the modal interaction event!
     * @param interaction
     * @returns
     */
    handle(interaction: ModalSubmitInteraction): void;
}
//# sourceMappingURL=modalHandler.d.ts.map