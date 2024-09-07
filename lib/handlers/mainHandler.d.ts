import { Client, Interaction } from "discord.js";
import CommandHandler from "./commandHandler.js";
import ComponentHandler from "./componentHandler.js";
import MiddlewareHandler from "./middlewareHandler.js";
import ModalHandler from "./modalHandler.js";
interface HandlerOption {
    guildId: number;
    guildOnlyError(): any;
}
/**
 * This class handles all features!
 * @example
 * ```
 * import { Client } from "discord.js";
 * import { Handler } from "discord-interactionhandler-js";
 *
 * const handler = new Handler(client);
 *
 * ```
 */
export default class Handler {
    client: Client | any;
    guildId?: number;
    guildOnlyError: any;
    commandHandler: CommandHandler;
    componentHandler: ComponentHandler;
    middlewareHandler: MiddlewareHandler;
    modalHandler: ModalHandler;
    /**
     *
     * @param client
     * @param options
     */
    constructor(client: Client, options?: HandlerOption);
    /**
     * This function handles the ready event!
     */
    readyHandler(): void;
    /**
     * This function handles the interaction event!
     * @param interaction
     * @returns
     */
    interactionCreateHandler(interaction: Interaction): void;
}
export {};
//# sourceMappingURL=mainHandler.d.ts.map