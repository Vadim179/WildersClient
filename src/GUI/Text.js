import validate from "aproba";
import Phaser from "phaser";

class Text extends Phaser.GameObjects.Text {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   * @param {string} text
   */
  constructor(scene, x, y, text) {
    validate("ONNS", arguments);
    const style = { fontSize: 20, color: "#ffffff" };
    super(scene, x, y, text, style);

    this.setDepth(200);
    this.setScrollFactor(0);
    this._doAddToScene();
  }

  _doAddToScene() {
    this.scene.add.existing(this);
  }
}

export default Text;