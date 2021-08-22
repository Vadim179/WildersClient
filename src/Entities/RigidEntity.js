import validate from "aproba";
import Entity from "Entities/Entity";

class RigidEntity extends Entity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   * @param {string} texture
   */
  constructor(scene, x, y, texture) {
    validate("ONNS", arguments);
    super(scene, x, y, texture);
    this._doEnablePhysics();
    this._setCollider();
  }

  _doEnablePhysics() {
    this.scene.physics.world.enable(this);
    this.body.setAllowGravity(false);
  }

  _setCollider() {}
}

export default RigidEntity;
