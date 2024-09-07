import ModalContext from "./modalContextInterface.js";
import ComponentContext from "./componentContextInterface.js";

export type modalFunc = (ctx: ModalContext) => void;
export type compFunc = (ctx: ComponentContext) => void;