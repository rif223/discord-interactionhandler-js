import { Guild, TextBasedChannel, User } from "discord.js";
import Handler from "../../handlers/mainHandler.js";
import { compFunc, modalFunc } from "./funcTypes.js";
/**
 * This is the base context interface!
 */
export default interface BaseContext {
    /**
     * This is the guild of the event!
     */
    guild: Guild | null;
    /**
     * This is the channel where the event was executed!
     */
    channel: TextBasedChannel | null;
    /**
     * This is the user who executed the event!
     */
    user: User;
    /**
     * This is the main handler!
     */
    handler: Handler;
    /**
     * This function adds a component event!
     * @param comp
     * @param runComponentFunc
     * @returns
     */
    addComponentEvent: (comp: any, runComponentFunc: compFunc) => any;
    /**
     * This function adds a modal event!
     * @param mod
     * @param runModalFunc
     * @returns
     */
    addModalEvent: (mod: any, runModalFunc: modalFunc) => any;
}
//# sourceMappingURL=contextInterface.d.ts.map