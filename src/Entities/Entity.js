import validate from "aproba";
import Phaser from "phaser";

class Entity extends Phaser.GameObjects.Sprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   * @param {string} texture
   */
  constructor(scene, x, y, texture) {
    validate("ONNS", arguments);
    super(scene, x, y, texture);
    this._doAddToScene();
  }

  _doAddToScene() {
    this.scene.add.existing(this);
  }
}

export default Entity;
