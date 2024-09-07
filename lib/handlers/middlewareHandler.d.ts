import Handler from "./mainHandler.js";
/**
 * This class handles the middlewares!
 */
export default class MiddlewareHandler {
    mhandler: Handler;
    middlewaresBefore: any[];
    middlewaresAfter: any[];
    /**
     *
     * @param mhandler
     */
    constructor(mhandler: Handler);
    /**
     * This function registers a middleware!
     * @param MW
     * @example
     * ```
     * ...
     *
     * handler.middlewareHandler.registerMiddleware(MiddlewareClass);
     *
     * ```
     */
    registerMiddleware(MW: any): void;
    /**
     * This function registers middlewares!
     * @param MWArray
     */
    registerMiddlewares(MWArray: any[]): void;
}
//# sourceMappingURL=middlewareHandler.d.ts.map