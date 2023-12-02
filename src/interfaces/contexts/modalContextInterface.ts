import {
    Guild,
    TextBasedChannel,
    User,
    ModalSubmitInteraction,
    ModalBuilder
} from "discord.js";
import { Handler } from "../../handlers/mainHandler";

export interface ModalContext {
    interaction: ModalSubmitInteraction,
    guild: Guild | null,
    channel: TextBasedChannel | null,
    user: User,
    handler: Handler,
    addComponentEvent: (comp: any, runComponentFunc: any) => any;
    addModalEvent: (mod: any, runModalFunc: any) => any;
}