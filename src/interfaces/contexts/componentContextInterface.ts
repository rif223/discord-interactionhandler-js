import {
    MessageComponentInteraction
} from "discord.js";
import BaseContext from "./contextInterface";

/**
 * This is the component context interface!
 */
export default interface ComponentContext extends BaseContext {
    /**
     * This is the component interaction!
     */
    interaction: MessageComponentInteraction
}