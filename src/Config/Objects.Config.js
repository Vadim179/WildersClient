import Phaser from 'phaser'
import validate from 'aproba'

export class Sprite extends Phaser.GameObjects.Sprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   * @param {string} texture
   */
  constructor(scene, x, y, texture) {
    validate('ONNS', arguments)
    super(scene, x, y, texture)
    this._addToScene()
  }

  _addToScene() {
    this.scene.add.existing(this)
  }
}

export class PhysicsSprite extends Sprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   * @param {string} texture
   */
  constructor(scene, x, y, texture) {
    validate('ONNS', arguments)
    super(scene, x, y, texture)
    this._doEnablePhysics()
    this._setCollider()
  }

  _doEnablePhysics() {
    this.scene.physics.world.enable(this)
    this.body.setAllowGravity(false)
  }

  _setCollider() {}
}
