import ComponentContext from "../contexts/componentContextInterface.js";
/**
 * A component requires the ComponentInterface class!
 * @example
 * ```
 * import { ComponentContext, ComponentInterface } from "discord-interactionhandler-js";
 *
 * class Comp extends ComponentInterface {
 *     get custom_id() {
 *         return "comp_1";
 *     }
 *
 *     async run(ctx: ComponentContext) {
 *
 *     }
 * }
 * ```
 */
export default class ComponentInterface {
    /**
     * This function set the custom id!
     * @returns The function must be return a string!
     * @default ""
     */
    get custom_id(): string;
    /**
     * This function is executed when the component is called!
     * @param ctx
     */
    run(ctx: ComponentContext): void;
    /**
     * This function can be used in to send a error message in discord!
     * @param interaction
     * @param error
     * @returns The function returns the error reply!
     */
    sendErrorMsg(interaction: any, error: string): any;
}
//# sourceMappingURL=componentInterface.d.ts.map