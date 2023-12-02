import {
    Guild,
    TextBasedChannel,
    User,
    MessageComponentInteraction
} from "discord.js";
import { Handler } from "../../handlers/mainHandler";

export interface ComponentContext {
    interaction: MessageComponentInteraction,
    guild: Guild | null,
    channel: TextBasedChannel | null,
    user: User,
    handler: Handler,
    addComponentEvent: (comp: any, runComponentFunc: any) => any;
    addModalEvent: (mod: any, runModalFunc: any) => any;
}