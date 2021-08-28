import validate from "aproba";
import RigidEntity from "Entities/RigidEntity";

class LargeTree1 extends RigidEntity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(scene, x, y, "LARGE_TREE");
    this.setDepth(50);
  }

  _setCollider() {
    const { scene, body } = this;
    body.setImmovable();
    body.setCircle(60, 150, 100);
    scene.physics.add.collider(scene.player, this);
  }
}

export default LargeTree1;
