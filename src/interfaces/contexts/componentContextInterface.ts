import {
    MessageComponentInteraction
} from "discord.js";
import { BaseContext } from "./contextInterface";

/**
 * This is the component context interface!
 */
export interface ComponentContext extends BaseContext {
    /**
     * This is the component interaction!
     */
    interaction: MessageComponentInteraction
}