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

  _setShadow() {
    const { scene, x, y, texture } = this
    const shadow = new Phaser.GameObjects.Sprite(scene, x, y, texture)

    shadow.setTint(0x000000)
    shadow.setAlpha(0.25)
    shadow.setScale(1, 1)
    shadow.setPosition(this.x + 10, this.y + 10)
    shadow.setDepth(this.depth - 1)

    this.scene.add.existing(shadow)
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
