import { Assets } from 'pixi.js';

export class Loader {
    getAssetsFromFolder() {
        const assets = [];
        const req = require["context"]("./../../sprites", true, /\.(png|jpe?g)$/);

        req.keys().forEach(name => {
            assets.push({
                alias: name.split('/').reverse()[0].replace(".png", ""),
                src: req(name).default
            });
        });

        return assets;
    }

    preload() {
        return Assets.load(this.getAssetsFromFolder());
    }
}
