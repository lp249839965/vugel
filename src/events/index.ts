import { Stage } from "tree2d/lib";
import { setupMouseEvents } from "./mouseEvents";
import { setupTouchEvents } from "./touchEvents";
import { setupFocusEvents } from "./focus";

export const setupEvents = (canvasElement: HTMLCanvasElement, stage: Stage) => {
    setupMouseEvents(canvasElement, stage);
    setupTouchEvents(canvasElement, stage);
    setupFocusEvents(canvasElement, stage);
};

export * from "./types";
export * from "./mouseEvents";
export * from "./touchEvents";
export * from "./focus";
