import validate from "aproba";
import Entity from "Entities/Entity";

class InventorySlot extends Entity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(scene, x, y, "inv_slot");

    this.setScrollFactor(0);
    this.setDepth(100);
    this.setAlpha(0.9);
  }
}

export default InventorySlot;
