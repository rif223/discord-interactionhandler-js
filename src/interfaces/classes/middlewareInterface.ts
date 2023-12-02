import { CommandContext } from "../contexts/commandContextInterface";
import { Command } from "./commandInterface";

export class MiddlewareBeforeInterface {
    handle(cmd: Command, ctx: CommandContext): boolean {
      throw Error("handle(command, context, next) must be implemented!");
    }
  }
  
export class MiddlewareAfterInterface {
    handle(cmd: Command, ctx: CommandContext) {
      throw Error("handle(command, context) must be implemented!");
    }
  }