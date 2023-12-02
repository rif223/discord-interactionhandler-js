import {
    CommandInteraction,
    Guild,
    TextBasedChannel,
    User,
    ApplicationCommand,
    Message
} from "discord.js";
import { Handler } from "../../handlers/mainHandler";

export interface CommandContext {
    interaction: CommandInteraction,
    options: any,
    guild: Guild | null,
    channel: TextBasedChannel | null,
    user: User,
    command: ApplicationCommand | null,
    handler: Handler,
    addComponentEvent: (comp: any, runComponentFunc: any) => any;
    addModalEvent: (mod: any, runModalFunc: any) => any;
}