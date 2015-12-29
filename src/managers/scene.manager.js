export default class {
    constructor() {
        this._scenes = [];
        this._current = "";
    }

    update() {
        if (this._current === "") {
            return;
        }

        this._getScene(this._current).update();
    }

    start(name) {
        this._scenes.forEach((data) => {
            if(data.name === name) {
                this._current = name;
                return false;
            }
        });
    }

    addScene(name, scene) {
        this._scenes.push({
            name: name,
            scene: scene
        });
    }

    getObjects() {
        let scene = this._getScene(this._current);
        return scene != null ? scene.getObjects() : [];
    }

    _getScene(name) {
        let scene = null;

        this._scenes.forEach((data) => {
            if(data.name === name) {
                scene = data.scene;
                return false;
            }
        });

        return scene;
    }
}