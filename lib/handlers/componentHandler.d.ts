import { MessageComponentInteraction } from "discord.js";
import Handler from "./mainHandler.js";
import { compFunc } from "../interfaces/contexts/funcTypes.js";
/**
 * This class handles the components!
 */
export default class ComponentHandler {
    mhandler: Handler;
    comps: any;
    comps_c: any;
    /**
     *
     * @param mhandler
     */
    constructor(mhandler: Handler);
    /**
     * This function registers a component!
     * @param CompClass
     */
    registerComponent(CompClass: any): void;
    /**
     * This function adds a component!
     * @param comp
     * @param runComponentFunc
     * @returns
     */
    addComponentEvent(comp: any, runComponentFunc: compFunc): any;
    /**
     * This function handles the component interaction event!
     * @param interaction
     * @returns
     */
    handle(interaction: MessageComponentInteraction): void;
}
//# sourceMappingURL=componentHandler.d.ts.map