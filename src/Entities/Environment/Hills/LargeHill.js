import validate from "aproba";
import Entity from "Entities/Entity";

class LargeHill extends Entity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(scene, x, y, "hill_l");
    this.setDepth(0);
  }
}

export default LargeHill;
