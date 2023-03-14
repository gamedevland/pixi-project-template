import * as PIXI from "pixi.js";
import { App } from "./App";

export class ScenesManager {
    constructor() {
        this.container = new PIXI.Container();
        this.container.interactive = true;
        this.scene = null;
    }

    start(scene) {
        if (this.scene) {
            this.scene.remove();
        }

        this.scene = new App.config.scenes[scene]();
        this.container.addChild(this.scene.container);
    }
}
