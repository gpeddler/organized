import GameObject from './object.js';

export default class extends GameObject {
    constructor() {
        super();

        let circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);

        this.setObject(circle);
    }
}