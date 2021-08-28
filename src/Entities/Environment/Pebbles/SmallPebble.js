import validate from "aproba";
import Entity from "Entities/Entity";

class SmallPebble extends Entity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(scene, x, y, "SMALL_PEBBLE");
    this.setDepth(1);
  }
}

export default SmallPebble;
