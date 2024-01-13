import { ModalSubmitInteraction } from "discord.js";
import Handler from "./mainHandler";
import ModalInterface from "../interfaces/classes/modalInterface";
import ModalContext from "../interfaces/contexts/modalContextInterface";
import { compFunc, modalFunc } from "../interfaces/contexts/funcTypes";

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
    constructor(mhandler: Handler) {
        this.mhandler = mhandler;
        this.modals = {};
        this.modals_c = {};
    }

    /**
     * This function registers a modal!
     * @param ModalClass 
     */
    registerModal(ModalClass: any) {
        if (!ModalClass) throw Error("The class must be set!");
        if (ModalClass.prototype instanceof ModalInterface) {
            let modal = new ModalClass();

            this.modals_c[modal.custom_id] = modal;

        } else {
            throw Error("The class must be extend the ModalInterface class!");
        }
    }

    /**
     * This function adds a modal!
     * @param modal 
     * @param runModalFunc
     * @returns 
     */
    addModalEvent(modal: any, runModalFunc: modalFunc) {
        this.modals[modal.data.custom_id] = runModalFunc;
        return modal;
    }

    /**
     * This function handles the modal interaction event!
     * @param interaction 
     * @returns 
     */
    handle(interaction: ModalSubmitInteraction) {

        let ctx: ModalContext = {
            interaction: interaction,
            guild: interaction.guild,
            channel: interaction.channel,
            user: interaction.user,
            handler: this.mhandler,
            addComponentEvent: (comp: any, runComponentFunc: compFunc) => this.mhandler.componentHandler.addComponentEvent(comp, runComponentFunc),
            addModalEvent: (mod: any, runModalFunc: modalFunc) => this.mhandler.modalHandler.addModalEvent(mod, runModalFunc)
        };

        if(this.modals[interaction.customId]) {
            this.modals[interaction.customId](ctx);
        }

        if(Object.keys(this.modals_c).length !== 0) this.modals_c[""].run(ctx);

        if(this.modals_c[interaction.customId]) {
            this.modals_c[interaction.customId].run(ctx);
        }
        
        return;
    }

}