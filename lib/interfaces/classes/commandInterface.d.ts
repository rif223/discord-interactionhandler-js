import { ApplicationCommandType, CommandInteraction } from "discord.js";
import CommandContext from "../contexts/commandContextInterface.js";
/**
 * A command requires this command class!
 */
export default class Command {
    /**
     * This function set the command name!
     * @returns The function must be return a string!
     */
    get name(): string;
    /**
     * This function set the command description!
     * @returns The function must be return a string!
     */
    get description(): string;
    get type(): ApplicationCommandType;
    /**
     * This function restrict the command usage to guilds only!
     * @returns The function must be return a boolean!
     * @default false
     */
    get guildOnly(): boolean;
    /**
     * This function set the version of the command!
     * @returns The function must be return a string!
     * @default "1.0.0"
     */
    get version(): string;
    /**
     * This function is executed when the command is called!
     * @param ctx
     */
    run(ctx: CommandContext): void;
    /**
     * This function can be used in to send a error message in discord!
     * @param interaction
     * @param error
     * @returns The function returns the error reply!
     */
    sendErrorMsg(interaction: CommandInteraction, error: string): Promise<import("discord.js").InteractionResponse<boolean>>;
}
//# sourceMappingURL=commandInterface.d.ts.map