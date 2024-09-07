import CommandContext from "../contexts/commandContextInterface.js";
import Command from "./commandInterface.js";
/**
 * If a middleware is to be executed before a command, it needs this class required!
 */
export declare class MiddlewareBeforeInterface {
    /**
       * This function is executed after the command is called!
       * @param cmd
       * @param ctx
       * @returns The function must be return a boolean!
       */
    handle(cmd: Command, ctx: CommandContext): boolean;
}
/**
 * If a middleware is to be executed after a command, it needs this class required!
 * @class  MiddlewareAfterInterface
 */
export declare class MiddlewareAfterInterface {
    /**
       * This function is executed after the command is called!
       * @param cmd
       * @param ctx
       */
    handle(cmd: Command, ctx: CommandContext): void;
}
//# sourceMappingURL=middlewareInterface.d.ts.map