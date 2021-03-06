import { Container } from "../Container";
import { GrayscaleShader } from "tree2d/lib";
import { ensureFloat } from "../Node";
import { VugelStage } from "../../../wrapper";

export class Grayscale extends Container {
    private shader = new GrayscaleShader(this.stage.context);

    constructor(stage: VugelStage) {
        super(stage);
        this.el.renderToTexture = true;
        this.el.shader = this.shader;
    }

    set amount(v: number) {
        this.shader.amount = ensureFloat(v);
    }
}
