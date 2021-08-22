import validate from "aproba";
import Entity from "Entities/Entity";

class SmallFlower extends Entity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(scene, x, y, "flower_s");
    this.setDepth(1);
  }
}

export default SmallFlower;
