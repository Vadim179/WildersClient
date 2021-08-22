import validate from "aproba";
import RigidEntity from "Entities/RigidEntity";

class MediumTree1 extends RigidEntity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(scene, x, y, "tree_m1");
    this.setDepth(40);
  }

  _setCollider() {
    const { scene, body } = this;
    body.setImmovable();
    body.setCircle(50, 100, 60);
    scene.physics.add.collider(scene.player, this);
  }
}

export default MediumTree1;
