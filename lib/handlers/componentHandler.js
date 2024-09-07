import ComponentInterface from "../interfaces/classes/componentInterface.js";
/**
 * This class handles the components!
 */
export default class ComponentHandler {
    mhandler;
    comps;
    comps_c;
    /**
     *
     * @param mhandler
     */
    constructor(mhandler) {
        this.mhandler = mhandler;
        this.comps = {};
        this.comps_c = {};
    }
    /**
     * This function registers a component!
     * @param CompClass
     */
    registerComponent(CompClass) {
        if (!CompClass)
            throw Error("The class must be set!");
        if (CompClass.prototype instanceof ComponentInterface) {
            let comp = new CompClass();
            this.comps_c[comp.custom_id] = comp;
        }
        else {
            throw Error("The class must be extend the ComponentInterface class!");
        }
    }
    /**
     * This function adds a component!
     * @param comp
     * @param runComponentFunc
     * @returns
     */
    addComponentEvent(comp, runComponentFunc) {
        this.comps[comp.data.custom_id] = runComponentFunc;
        return comp;
    }
    /**
     * This function handles the component interaction event!
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
        if (Object.keys(this.comps_c).length !== 0)
            this.comps_c[""].run(ctx);
        if (this.comps_c[interaction.customId]) {
            this.comps_c[interaction.customId].run(ctx);
        }
        if (this.comps[interaction.customId]) {
            this.comps[interaction.customId](ctx);
        }
        return;
    }
}
