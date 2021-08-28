import Entity from "Entities/Entity";

class Image extends Entity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   * @param {string} texture
   */
  constructor(scene, x, y, texture = "") {
    super(scene, x, y, texture);
    this.setScrollFactor(0);
    this.setDepth(100);
  }
}

export default Image;
