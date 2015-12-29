import Circle from './objects/circle.js';

class Game {
    constructor() {
        this.stage = new createjs.Stage("screen");
        this.circle = new Circle();

        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", this.update.bind(this));
    }

    update() {
        this.circle.update();

        this.stage.removeAllChildren();
        this.stage.addChild(this.circle.getObject());
        this.stage.update();
    }
}

export default new Game();