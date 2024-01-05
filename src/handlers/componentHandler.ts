import { APIActionRowComponent, APIActionRowComponentTypes, AnyComponentBuilder, ButtonBuilder, ChannelSelectMenuBuilder, MentionableSelectMenuBuilder, MessageActionRowComponentBuilder, MessageComponentInteraction, RoleSelectMenuBuilder, StringSelectMenuBuilder, UserSelectMenuBuilder } from "discord.js";
import { ComponentContext } from "../interfaces/contexts/componentContextInterface";
import { Handler } from "./mainHandler";
import { ComponentInterface } from "../interfaces/classes/componentInterface";
import { compFunc, modalFunc } from "../interfaces/contexts/funcTypes";

/**
 * This class handles the components!
 */
export class ComponentHandler {

    mhandler: Handler;
    comps: any;
    comps_c: any;

    /**
     * 
     * @param mhandler
     */
    constructor(mhandler: Handler) {
        this.mhandler = mhandler;
        this.comps = {};
        this.comps_c = {};
    }

    /**
     * This function registers a component!
     * @param CompClass 
     */
    registerComponent(CompClass: any) {
        if (!CompClass) throw Error("The class must be set!");
        if (CompClass.prototype instanceof ComponentInterface) {
            let comp = new CompClass();

            this.comps_c[comp.custom_id] = comp;

        } else {
            throw Error("The class must be extend the ComponentInterface class!");
        }
    }

    /**
     * This function adds a component!
     * @param comp 
     * @param runComponentFunc 
     * @returns 
     */
    addComponentEvent(comp: any, runComponentFunc: compFunc) {
        this.comps[comp.data.custom_id] = runComponentFunc;
        return comp;
    }

    /**
     * This function handles the component interaction event!
     * @param interaction 
     * @returns 
     */
    handle(interaction: MessageComponentInteraction) {

        let ctx: ComponentContext = {
            interaction: interaction,
            guild: interaction.guild,
            channel: interaction.channel,
            user: interaction.user,
            handler: this.mhandler,
            addComponentEvent: (comp: any, runComponentFunc: compFunc) => this.mhandler.componentHandler.addComponentEvent(comp, runComponentFunc),
            addModalEvent: (mod: any, runModalFunc: modalFunc) => this.mhandler.modalHandler.addModalEvent(mod, runModalFunc)
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