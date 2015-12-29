import GameScene from '../lib/scene.game.js';
import Circle from '../objects/circle.object.js';

export default class extends GameScene {
    constructor() {
        super();
        this.addObject(new Circle());
    }
}