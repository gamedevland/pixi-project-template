import * as PIXI from "pixi.js";
import { App } from "../system/App";
    
export class Game {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
    }
    createBackground() {
        this.bg = App.sprite("bg");
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;
        this.container.addChild(this.bg);
    }

}