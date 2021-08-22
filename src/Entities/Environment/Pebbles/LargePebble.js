import validate from "aproba";
import Entity from "Entities/Entity";

class LargePebble extends Entity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(scene, x, y, "pebble_l");
    this.setDepth(1);
  }
}

export default LargePebble;
