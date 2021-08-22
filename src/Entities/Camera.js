import validate from "aproba";
import Phaser from "phaser";
import colors from "Config/ColorPallete";

class Camera extends Phaser.Cameras.Scene2D.Camera {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(x, y, window.innerWidth, window.innerHeight);
    this.scene = scene;
    this._doInitialize();
  }

  _doInitialize() {
    this.scene.cameras.cameras.length = 0;
    this.scene.cameras.addExisting(this, true);
    this.setBackgroundColor(colors.BACKGROUND);
    this.doFollowPlayer();
  }

  doFollowPlayer() {
    const { player } = this.scene;
    this.startFollow(player);
  }
}

export default Camera;
