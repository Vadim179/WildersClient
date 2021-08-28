import validate from "aproba";
import RigidEntity from "Entities/RigidEntity";

class LargeCopper extends RigidEntity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(scene, x, y, "LARGE_COPPER");
    this.setDepth(20);
  }

  _setCollider() {
    const { scene, body } = this;
    body.setImmovable();
    body.setCircle(65, 5, 10);
    scene.physics.add.collider(scene.player, this);
  }
}

export default LargeCopper;
