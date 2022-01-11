import Phaser from "phaser"
import validate from "aproba"

import { ColorPallete } from "Config/Game.Config"
import { Sprite, PhysicsSprite } from "Config/Objects.Config"

export class Player extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "PLAYER_BODY")
    this.setDepth(25)
    this._setCollider()
  }

  _setCollider() {
    this.body.setCircle(35)
  }
}

export class Camera extends Phaser.Cameras.Scene2D.Camera {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(x, y, window.innerWidth, window.innerHeight)
    this.scene = scene
    this._initialize()
  }

  _initialize() {
    this.scene.cameras.cameras.length = 0
    this.scene.cameras.addExisting(this, true)
    this.setBackgroundColor(ColorPallete.BACKGROUND)
  }
}

/* 🌳
 *.########.########..########.########..######.
 *....##....##.....##.##.......##.......##....##
 *....##....##.....##.##.......##.......##......
 *....##....########..######...######....######.
 *....##....##...##...##.......##.............##
 *....##....##....##..##.......##.......##....##
 *....##....##.....##.########.########..######.
 */

export class SmallTree extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "SMALL_TREE")
    this.setDepth(30)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(30, 60, 40)
    scene.physics.add.collider(scene.player, this)
  }
}

export class SmallDarkTree extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "SMALL_DARK_TREE")
    this.setDepth(30)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(30, 60, 40)
    scene.physics.add.collider(scene.player, this)
  }
}

export class MediumTree extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "MEDIUM_TREE")
    this.setDepth(40)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(50, 100, 60)
    scene.physics.add.collider(scene.player, this)
  }
}

export class MediumDarkTree extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "MEDIUM_DARK_TREE")
    this.setDepth(40)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(50, 100, 60)
    scene.physics.add.collider(scene.player, this)
  }
}

export class LargeTree extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "LARGE_TREE")
    this.setDepth(50)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(60, 150, 100)
    scene.physics.add.collider(scene.player, this)
  }
}

export class LargeDarkTree extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "LARGE_DARK_TREE")
    this.setDepth(50)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(60, 150, 100)
    scene.physics.add.collider(scene.player, this)
  }
}

/* 🪨
 ?.########..########.########..########..##.......########..######.
 ?.##.....##.##.......##.....##.##.....##.##.......##.......##....##
 ?.##.....##.##.......##.....##.##.....##.##.......##.......##......
 ?.########..######...########..########..##.......######....######.
 ?.##........##.......##.....##.##.....##.##.......##.............##
 ?.##........##.......##.....##.##.....##.##.......##.......##....##
 ?.##........########.########..########..########.########..######.
 */

export class SmallPebble extends Sprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "SMALL_PEBBLE")
    this.setDepth(1)
  }
}

export class MediumPebble extends Sprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "MEDIUM_PEBBLE")
    this.setDepth(1)
  }
}

export class LargePebble extends Sprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "LARGE_PEBBLE")
    this.setDepth(1)
  }
}

/* 🌸
 &.########.##........#######..##......##.########.########...######.
 &.##.......##.......##.....##.##..##..##.##.......##.....##.##....##
 &.##.......##.......##.....##.##..##..##.##.......##.....##.##......
 &.######...##.......##.....##.##..##..##.######...########...######.
 &.##.......##.......##.....##.##..##..##.##.......##...##.........##
 &.##.......##.......##.....##.##..##..##.##.......##....##..##....##
 &.##.......########..#######...###..###..########.##.....##..######.
 */

export class LargeFlower extends Sprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "LARGE_FLOWER")
    this.setDepth(1)
  }
}

export class SmallFlower extends Sprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "SMALL_FLOWER")
    this.setDepth(1)
  }
}

/* ⛰️
 *.##.....##.####.##.......##........######.
 *.##.....##..##..##.......##.......##....##
 *.##.....##..##..##.......##.......##......
 *.#########..##..##.......##........######.
 *.##.....##..##..##.......##.............##
 *.##.....##..##..##.......##.......##....##
 *.##.....##.####.########.########..######.
 **/

export class LargeHill extends Sprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "LARGE_HILL")
    this.setDepth(0)
  }
}

export class SmallHill extends Sprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "SMALL_HILL")
    this.setDepth(0)
  }
}

/* 💎
 ?..#######..########..########..######.
 ?.##.....##.##.....##.##.......##....##
 ?.##.....##.##.....##.##.......##......
 ?.##.....##.########..######....######.
 ?.##.....##.##...##...##.............##
 ?.##.....##.##....##..##.......##....##
 ?..#######..##.....##.########..######.
 */

export class LargeCopper extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "LARGE_COPPER")
    this.setDepth(20)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(65, 5, 10)
    scene.physics.add.collider(scene.player, this)
  }
}

export class SmallCopper extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "SMALL_COPPER")
    this.setDepth(10)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(50, 5, 10)
    scene.physics.add.collider(scene.player, this)
  }
}

export class LargeGold extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "LARGE_GOLD")
    this.setDepth(20)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(65, 5, 10)
    scene.physics.add.collider(scene.player, this)
  }
}

export class SmallGold extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "SMALL_GOLD")
    this.setDepth(10)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(50, 5, 10)
    scene.physics.add.collider(scene.player, this)
  }
}

export class LargeIron extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "LARGE_IRON")
    this.setDepth(20)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(65, 5, 10)
    scene.physics.add.collider(scene.player, this)
  }
}

export class SmallIron extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "SMALL_IRON")
    this.setDepth(10)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(50, 5, 10)
    scene.physics.add.collider(scene.player, this)
  }
}

export class LargeRock extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "LARGE_ROCK")
    this.setDepth(20)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(65, 5, 10)
    scene.physics.add.collider(scene.player, this)
  }
}

export class SmallRock extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "SMALL_ROCK")
    this.setDepth(10)
  }

  _setCollider() {
    const { scene, body } = this
    body.setImmovable()
    body.setCircle(50, 5, 10)
    scene.physics.add.collider(scene.player, this)
  }
}
