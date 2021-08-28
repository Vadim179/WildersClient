import validate from "aproba";
import RigidEntity from "Entities/RigidEntity";

class SmallGold extends RigidEntity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(scene, x, y, "SMALL_GOLD");
    this.setDepth(10);
  }

  _setCollider() {
    const { scene, body } = this;
    body.setImmovable();
    body.setCircle(50, 5, 10);
    scene.physics.add.collider(scene.player, this);
  }
}

export default SmallGold;
