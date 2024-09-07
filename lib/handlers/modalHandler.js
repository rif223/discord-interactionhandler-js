import ModalInterface from "../interfaces/classes/modalInterface.js";
/**
 * This class handles the modals!
 */
export default class ModalHandler {
    mhandler;
    modals;
    modals_c;
    /**
     *
     * @param mhandler
     */
    constructor(mhandler) {
        this.mhandler = mhandler;
        this.modals = {};
        this.modals_c = {};
    }
    /**
     * This function registers a modal!
     * @param ModalClass
     */
    registerModal(ModalClass) {
        if (!ModalClass)
            throw Error("The class must be set!");
        if (ModalClass.prototype instanceof ModalInterface) {
            let modal = new ModalClass();
            this.modals_c[modal.custom_id] = modal;
        }
        else {
            throw Error("The class must be extend the ModalInterface class!");
        }
    }
    /**
     * This function adds a modal!
     * @param modal
     * @param runModalFunc
     * @returns
     */
    addModalEvent(modal, runModalFunc) {
        this.modals[modal.data.custom_id] = runModalFunc;
        return modal;
    }
    /**
     * This function handles the modal interaction event!
     * @param interaction
     * @returns
     */
    handle(interaction) {
        let ctx = {
            interaction: interaction,
            guild: interaction.guild,
            channel: interaction.channel,
            user: interaction.user,
            handler: this.mhandler,
            addComponentEvent: (comp, runComponentFunc) => this.mhandler.componentHandler.addComponentEvent(comp, runComponentFunc),
            addModalEvent: (mod, runModalFunc) => this.mhandler.modalHandler.addModalEvent(mod, runModalFunc)
        };
        if (this.modals[interaction.customId]) {
            this.modals[interaction.customId](ctx);
        }
        if (Object.keys(this.modals_c).length !== 0)
            this.modals_c[""].run(ctx);
        if (this.modals_c[interaction.customId]) {
            this.modals_c[interaction.customId].run(ctx);
        }
        return;
    }
}
