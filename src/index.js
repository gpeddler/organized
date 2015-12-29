import {GAME} from './constants.js';

import SceneManager from './managers/scene.manager.js';
import LobbyScene from './scenes/lobby.scene.js';

class Game {
    constructor() {
        let screen = document.getElementById('screen');
        screen.style.width = GAME.WIDTH + "px";
        screen.style.height = GAME.HEIGHT + "px";

        this.stage = new createjs.Stage("screen");
        this.stage.enableMouseOver(20);

        this.initialize();

        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", this.update.bind(this));
    }

    initialize() {
        let scene_lobby = new LobbyScene();

        this.manager_scene = new SceneManager();
        this.manager_scene.addScene('lobby', scene_lobby);
        this.manager_scene.start('lobby');
    }

    update() {
        this.manager_scene.update();

        this.stage.removeAllChildren();
        this.manager_scene.getObjects().forEach((object) => {
            this.stage.addChild(object.getObject());
        });
        this.stage.update();
    }
}

export default new Game();