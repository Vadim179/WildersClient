import validate from "aproba";
import Entity from "Entities/Entity";

class OtherPlayer extends Entity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(scene, x, y, "PLAYER_BODY");
    this.setDepth(25);
  }
}

export default OtherPlayer;
