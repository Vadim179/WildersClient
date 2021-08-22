import validate from "aproba";
import Entity from "Entities/Entity";

class SmallHill extends Entity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(scene, x, y, "hill_s");
    this.setDepth(0);
  }
}

export default SmallHill;
