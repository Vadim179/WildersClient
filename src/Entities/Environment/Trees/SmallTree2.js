import validate from "aproba";
import RigidEntity from "Entities/RigidEntity";

class SmallTree2 extends RigidEntity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(scene, x, y, "tree_s2");
    this.setDepth(30);
  }

  _setCollider() {
    const { scene, body } = this;
    body.setImmovable();
    body.setCircle(30, 60, 40);
    scene.physics.add.collider(scene.player, this);
  }
}

export default SmallTree2;