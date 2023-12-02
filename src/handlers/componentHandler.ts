import { MessageComponentInteraction } from "discord.js";
import { ComponentContext } from "../interfaces/contexts/componentContextInterface";
import { Handler } from "./mainHandler";
import { ComponentInterface } from "../interfaces/classes/componentInterface";

export class ComponentHandler {

    mhandler: Handler;
    comps: any;
    comps_c: any;

    constructor(mhandler: Handler) {
        this.mhandler = mhandler;
        this.comps = {};
        this.comps_c = {};
    }

    registerModal(CompClass: any) {
        if (!CompClass) throw Error("The class must be set!");
        if (CompClass.prototype instanceof ComponentInterface) {
            let comp = new CompClass();

            this.comps_c[comp.custom_id] = comp;

        } else {
            throw Error("The class must be extend the ComponentInterface class!");
        }
    }

    addComponentEvent(comp: any, runComponentFunc: any) {
        this.comps[comp.data.custom_id] = runComponentFunc;
        return comp;
    }

    handle(interaction: MessageComponentInteraction) {

        let ctx: ComponentContext = {
            interaction: interaction,
            guild: interaction.guild,
            channel: interaction.channel,
            user: interaction.user,
            handler: this.mhandler,
            addComponentEvent: (comp: any, runComponentFunc: any) => this.mhandler.componentHandler.addComponentEvent(comp, runComponentFunc),
            addModalEvent: (mod: any, runModalFunc: any) => this.mhandler.modalHandler.addModalEvent(mod, runModalFunc)
        };

        if(Object.keys(this.comps_c).length !== 0)  this.comps_c[""].run(ctx);

        if(this.comps_c[interaction.customId]) {
            this.comps_c[interaction.customId].run(ctx);
        }

        if(this.comps[interaction.customId]) {
            this.comps[interaction.customId](ctx);
        }
        
        return;
    }

}