import { Node } from "../../runtime/nodes/Node";
import { Stage } from "tree2d/lib";

class FocusManager {
    private activeNode?: Node = undefined;

    constructor(private canvasElement: HTMLCanvasElement, private stage: Stage) {
        this.canvasElement.addEventListener("focus", (e) => this.onFocus(e));
        this.canvasElement.addEventListener("blur", (e) => this.onBlur(e));
    }

    private onFocus(e: FocusEvent) {
        console.log("focus");
    }

    private onBlur(e: FocusEvent) {
        console.log("blur");
    }
}

export { FocusManager };