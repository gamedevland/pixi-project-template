import { App } from "../system/App";
import { Scene } from "../system/Scene";

export class Game extends Scene {
    create() {
        this.createBackground();
    }
    createBackground() {
        this.bg = App.sprite("bg");
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;
        this.container.addChild(this.bg);
    }
}
