import * as PIXI from "pixi.js";
import { Sprite, Application } from 'pixi.js';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import { Loader } from "./Loader";
import { ScenesManager } from "./ScenesManager";
import { EventEmitter } from "events";

class GameApplication extends EventEmitter {
    async run(config) {
        gsap.registerPlugin(PixiPlugin);
        PixiPlugin.registerPIXI(PIXI);

        this.config = config;

        this.app = new Application();
        await this.app.init({ width: 960, height: 540});
        document.body.appendChild(this.app.canvas);

        this.scenes = new ScenesManager();
        this.app.stage.interactive = true;
        this.app.stage.addChild(this.scenes.container);

        this.loader = new Loader(this.app.loader, this.config);
        this.loader.preload().then(assets => this.start(assets));
    }

    sprite(key) {
        return new Sprite(this.assets[key]);
    }

    start(assets) {
        this.assets = assets;
        this.scenes.start("Game");
    }
}

export const App = new GameApplication();
