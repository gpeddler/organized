import LobbyScene from './scenes/lobby.scene.js';

class Game {
    constructor() {
        this.stage = new createjs.Stage("screen");
        this.scene = new LobbyScene();

        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", this.update.bind(this));
    }

    update() {
        this.scene.update();

        this.stage.removeAllChildren();
        this.scene.getObjects().forEach((object) => {
            this.stage.addChild(object.getObject());
        });
        this.stage.update();
    }
}

export default new Game();