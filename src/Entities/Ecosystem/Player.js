import validate from "aproba";
import RigidEntity from "Entities/RigidEntity";
import CursorSeeker from "Logic/CursorSeeker";
import Movement from "Logic/Movement";

class Player extends RigidEntity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);

    super(scene, x, y, "player_body");
    this.setDepth(25);

    this.cSeeker = new CursorSeeker(this, scene);
    this.movement = new Movement(this, scene);
    this.setCollider();
  }

  setCollider() {
    this.body.setCircle(35);
  }
}

export default Player;
