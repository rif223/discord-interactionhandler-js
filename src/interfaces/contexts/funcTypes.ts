import { ModalContext } from "./modalContextInterface";
import { ComponentContext } from "./componentContextInterface";

export type modalFunc = (ctx: ModalContext) => void;
export type compFunc = (ctx: ComponentContext) => void;