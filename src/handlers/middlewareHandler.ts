import { MiddlewareAfterInterface, MiddlewareBeforeInterface } from "../interfaces/classes/middlewareInterface";
import { Handler } from "./mainHandler";
import * as fs from "fs";

/**
 * This class handles the middlewares!
 */
export class MiddlewareHandler {

    mhandler: Handler;

    middlewaresBefore: any[];
    middlewaresAfter: any[];

    /**
     * 
     * @param mhandler 
     */
    constructor(mhandler: Handler) {
        this.mhandler = mhandler;

        this.middlewaresBefore = [];
        this.middlewaresAfter = [];
    }

    /**
     * This function registers a middleware!
     * @param MW 
     */
    registerMiddleware(MW: any) {
        if (!MW) throw Error("The middleware class must be set!");
        if ((MW.prototype instanceof MiddlewareBeforeInterface) || (MW.prototype instanceof MiddlewareAfterInterface)) {
          if (MW.prototype instanceof MiddlewareBeforeInterface) {
            let mw = new MW();
            this.middlewaresBefore.push(mw);
          } else if (MW.prototype instanceof MiddlewareAfterInterface) {
            let mw = new MW();
            this.middlewaresAfter.push(mw);
          }
        } else {
          throw Error("The class must be extend the MiddlewareBeforeInterface or MiddlewareAfterInterface class!");
        }
      }
    
      /**
       * This function registers middlewares!
       * @param MWArray 
       */
      registerMiddlewares(MWArray: any[]) {
        MWArray.forEach(MW => {
          this.registerMiddleware(MW);
        });
      }

      registerMiddlewaresIn(path: string) {
        fs.readdir(path, (err: any, files: any[]) => {
            if (err) throw Error(err);
            files.forEach(file => {
                const mw = require(path + file);
                this.registerMiddleware(mw);
            });
        });
      }
}