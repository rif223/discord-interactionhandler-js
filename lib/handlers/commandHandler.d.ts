import { CommandInteraction } from "discord.js";
import Handler from "./mainHandler.js";
import CommandContext from "../interfaces/contexts/commandContextInterface.js";
/**
 * This class handles the commands!
 */
export default class CommandHandler {
    mhandler: Handler;
    cmds: any;
    /**
     *
     * @param mhandler
     */
    constructor(mhandler: Handler);
    /**
     * This function registers a single command!
     * @param CmdClass
     * @example
     * ```
     * ...
     *
     * handler.commandHandler.registerCommand(CommandClass);
     *
     * ```
     */
    registerCommand(CmdClass: any): void;
    /**
     * This function registers multiple command!
     * @param CmdClassArray
     */
    registerCommands(CmdClassArray: any[]): void;
    /**
     * This function sets the default error message if a command is guild only!
     * @param ctx
     * @returns The function returns the error reply!
     */
    defaultGuildOnlyError(ctx: CommandContext): any;
    /**
     * This function handles the command interaction event!
     * @param interaction
     * @returns
     */
    handle(interaction: CommandInteraction): any;
}
//# sourceMappingURL=commandHandler.d.ts.map