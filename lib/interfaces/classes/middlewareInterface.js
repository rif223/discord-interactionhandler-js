/**
 * If a middleware is to be executed before a command, it needs this class required!
 */
export class MiddlewareBeforeInterface {
    /**
       * This function is executed after the command is called!
       * @param cmd
       * @param ctx
       * @returns The function must be return a boolean!
       */
    handle(cmd, ctx) {
        throw Error("handle(command, context, next) must be implemented!");
    }
}
/**
 * If a middleware is to be executed after a command, it needs this class required!
 * @class  MiddlewareAfterInterface
 */
export class MiddlewareAfterInterface {
    /**
       * This function is executed after the command is called!
       * @param cmd
       * @param ctx
       */
    handle(cmd, ctx) {
        throw Error("handle(command, context) must be implemented!");
    }
}
