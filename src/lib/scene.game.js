export default class {
    constructor() {
        this._objects = [];
    }

    _compareByDepth(a, b) {
        return a.depth < b.depth ? -1 : a.depth > b.depth ? 1 : 0;
    }

    update() {
        this._objects.forEach((object) => {
            object.update();
        });
    }

    addObject(object) {
        this._objects.push(object);
    }

    getObjects() {
        this._objects.sort(this._compareByDepth);
        return this._objects;
    }
}