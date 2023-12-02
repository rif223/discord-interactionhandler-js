import { Command, CommandContext, MiddlewareAfterInterface, MiddlewareBeforeInterface } from "../../src/index"

export class MiddlewareAfter extends MiddlewareAfterInterface {
    handle(cmd: Command, ctx: CommandContext) {
        console.log(cmd.name + " cmd was executed!");
    }
}

export class MiddlewareBefore extends MiddlewareBeforeInterface {
    handle(cmd: Command, ctx: CommandContext): boolean {
        return true;
    }
}