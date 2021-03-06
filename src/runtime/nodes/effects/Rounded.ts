import { Container } from "../Container";
import { RoundedRectangleShader } from "tree2d/lib";
import { ensureFloat } from "../Node";
import { VugelStage } from "../../../wrapper";

export class Rounded extends Container {
    private shader = new RoundedRectangleShader(this.stage.context);

    constructor(stage: VugelStage) {
        super(stage);
        this.el.shader = this.shader;
        this.el.renderToTexture = true;
    }

    set radius(v: number) {
        this.shader.radius = ensureFloat(v);
    }
}
