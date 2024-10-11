import Command from "../interfaces/classes/commandInterface";
import MessageCommand from "../interfaces/classes/messageCommandInterface";
import SlashCommand from "../interfaces/classes/slashCommandInterface";
import UserCommand from "../interfaces/classes/userCommandInterface";
import { CommandInteraction } from "discord.js";
import Handler from "./mainHandler";
import CommandContext from "../interfaces/contexts/commandContextInterface";
import { compFunc, modalFunc } from "../interfaces/contexts/funcTypes";

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
    constructor(mhandler: Handler) {
        this.mhandler = mhandler;
        this.cmds = {};
    }

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
    registerCommand(CmdClass: any) {
        if (!CmdClass) throw Error("The class must be set!");
        if (CmdClass.prototype instanceof SlashCommand || CmdClass.prototype instanceof MessageCommand || CmdClass.prototype instanceof UserCommand || CmdClass.prototype instanceof Command) {
            let cmd = new CmdClass();

            this.cmds[cmd.name] = cmd;

        } else {
            throw Error("The class must be extend the SlashCommand/MessageCommand/UserCommand class!");
        }
    }

    /**
     * This function registers multiple command!
     * @param CmdClassArray 
     */
    registerCommands(CmdClassArray: any[]) {
        CmdClassArray.forEach(CmdClass => {
            this.registerCommand(CmdClass);
        });
    }

    /**
     * This function sets the default error message if a command is guild only!
     * @param ctx
     * @returns The function returns the error reply!
     */
    defaultGuildOnlyError(ctx: CommandContext) {
        return this.cmds[ctx.interaction.commandName].sendErrorMsg(
            ctx.interaction,
            "This command can only be used for guilds!"
        );
    }
    
    /**
     * This function handles the command interaction event!
     * @param interaction 
     * @returns
     */
    handle(interaction: CommandInteraction) {
        let ctx: CommandContext = {
            interaction: interaction,
            options: interaction.options,
            guild: interaction.guild,
            channel: interaction.channel,
            user: interaction.user,
            command: interaction.command,
            handler: this.mhandler,
            addComponentEvent: (comp: any, runComponentFunc: compFunc) => this.mhandler.componentHandler.addComponentEvent(comp, runComponentFunc),
            addModalEvent: (mod: any, runModalFunc: modalFunc) => this.mhandler.modalHandler.addModalEvent(mod, runModalFunc)
        };
        if (!interaction.inGuild() && this.cmds[interaction.commandName].guildOnly) return this.mhandler.guildOnlyError(ctx);

        let middlewaresBefore = this.mhandler.middlewareHandler.middlewaresBefore;
        for (let mw in middlewaresBefore) {
            let next = middlewaresBefore[mw].handle(this.cmds[interaction.commandName], ctx);

            if (!next) {
                return;
            }
        }
        this.cmds[interaction.commandName].run(ctx);

        let middlewaresAfter = this.mhandler.middlewareHandler.middlewaresAfter;
        for (let mw in middlewaresAfter) {
            middlewaresAfter[mw].handle(this.cmds[interaction.commandName], ctx);
        }

        return;
    }
}