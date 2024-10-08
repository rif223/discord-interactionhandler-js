import { MiddlewareAfterInterface, MiddlewareBeforeInterface } from "../interfaces/classes/middlewareInterface.js";
/**
 * This class handles the middlewares!
 */
export default class MiddlewareHandler {
    mhandler;
    middlewaresBefore;
    middlewaresAfter;
    /**
     *
     * @param mhandler
     */
    constructor(mhandler) {
        this.mhandler = mhandler;
        this.middlewaresBefore = [];
        this.middlewaresAfter = [];
    }
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
    registerMiddleware(MW) {
        if (!MW)
            throw Error("The middleware class must be set!");
        if ((MW.prototype instanceof MiddlewareBeforeInterface) || (MW.prototype instanceof MiddlewareAfterInterface)) {
            if (MW.prototype instanceof MiddlewareBeforeInterface) {
                let mw = new MW();
                this.middlewaresBefore.push(mw);
            }
            else if (MW.prototype instanceof MiddlewareAfterInterface) {
                let mw = new MW();
                this.middlewaresAfter.push(mw);
            }
        }
        else {
            throw Error("The class must be extend the MiddlewareBeforeInterface or MiddlewareAfterInterface class!");
        }
    }
    /**
     * This function registers middlewares!
     * @param MWArray
     */
    registerMiddlewares(MWArray) {
        MWArray.forEach(MW => {
            this.registerMiddleware(MW);
        });
    }
}
