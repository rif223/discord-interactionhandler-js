import { Client, Interaction } from "discord.js";
import { CommandHandler } from "./commandHandler";
import { ComponentHandler } from "./componentHandler";
import { MiddlewareHandler } from "./middlewareHandler";
import { ModalHandler } from "./modalHandler";

interface HandlerOption {
  guildId: number,
  guildOnlyError(): any
}

/**
 * This class handles all features!
 */
export class Handler {

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
  constructor(client: Client, options?: HandlerOption) {
    if (!client) throw Error("The client must be set!");

    this.client = client;

    this.commandHandler = new CommandHandler(this);
    this.componentHandler = new ComponentHandler(this);
    this.middlewareHandler = new MiddlewareHandler(this);
    this.modalHandler = new ModalHandler(this);
    
    this.guildId = options?.guildId;
    this.guildOnlyError = options?.guildOnlyError || this.commandHandler.defaultGuildOnlyError;

    client.on("ready", () => this.readyHandler());
    client.on("interactionCreate", (interaction: Interaction) => this.interactionCreateHandler(interaction));

  }

  /**
   * This function handles the ready event!
   */
  readyHandler() {
    
    let cmds: any[] = Object.values(this.commandHandler.cmds);
    cmds = cmds.map(cmd => {
      return {
        name: cmd.name,
        type: cmd.type,
        version: cmd.version,
        description: cmd.type == 1 ? cmd.description : undefined,
        options: cmd.type == 1 ? cmd.options : undefined
      };
    });

    if (this.guildId) {
      this.client.application.commands.set(cmds, this.guildId);
    } else {
      this.client.application.commands.set(cmds);
    }

  }

  /**
   * This function handles the interaction event!
   * @param interaction 
   * @returns 
   */
  interactionCreateHandler(interaction: Interaction) {

    if(interaction.isCommand()) {
      this.commandHandler.handle(interaction);
      return;
    }

    if(interaction.isMessageComponent()) {
      this.componentHandler.handle(interaction);
      return;
    }

    if(interaction.isModalSubmit()) {
      this.modalHandler.handle(interaction);
      return;
    }

  }
}