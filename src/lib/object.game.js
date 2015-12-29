export default class {
    constuctor() {
        this.x = 0;
        this.y = 0;
        this.depth = 0;

        this._object = null;
    }

    update() {
        this._object.x = this.x;
        this._object.y = this.y;
    }

    setObject(target) {
        this._object = target;

    }

    getObject() {
        return this._object;
    }
}