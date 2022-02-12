import validate from 'aproba'
import { Sprite, PhysicsSprite } from 'Config/Objects.Config'

export class Player extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate('ONN', arguments)
    super(scene, x, y, 'PLAYER_BODY')

    this.setDepth(25)
    this._setCollider()
  }

  _setCollider() {
    this.body.setCircle(35)
    this.body.setCollideWorldBounds(true)

    const bodies = this.scene.physics.world.bodies.entries
    bodies.forEach(({ gameObject }) => {
      if (gameObject instanceof Player) return
      this.scene.physics.add.collider(gameObject, this)
    })
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
    validate('ONN', arguments)
    super(scene, x, y, 'SMALL_TREE')
    this.setDepth(30)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(30, 60, 40)
  }
}

export class SmallDarkTree extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate('ONN', arguments)
    super(scene, x, y, 'SMALL_DARK_TREE')
    this.setDepth(30)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(30, 60, 40)
  }
}

export class MediumTree extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate('ONN', arguments)
    super(scene, x, y, 'MEDIUM_TREE')
    this.setDepth(40)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(50, 100, 60)
  }
}

export class MediumDarkTree extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate('ONN', arguments)
    super(scene, x, y, 'MEDIUM_DARK_TREE')
    this.setDepth(40)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(50, 100, 60)
  }
}

export class LargeTree extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate('ONN', arguments)
    super(scene, x, y, 'LARGE_TREE')
    this.setDepth(50)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(60, 150, 100)
  }
}

export class LargeDarkTree extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate('ONN', arguments)
    super(scene, x, y, 'LARGE_DARK_TREE')
    this.setDepth(50)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(60, 150, 100)
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
    validate('ONN', arguments)
    super(scene, x, y, 'SMALL_PEBBLE')
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
    validate('ONN', arguments)
    super(scene, x, y, 'MEDIUM_PEBBLE')
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
    validate('ONN', arguments)
    super(scene, x, y, 'LARGE_PEBBLE')
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
    validate('ONN', arguments)
    super(scene, x, y, 'LARGE_FLOWER')
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
    validate('ONN', arguments)
    super(scene, x, y, 'SMALL_FLOWER')
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
    validate('ONN', arguments)
    super(scene, x, y, 'LARGE_HILL')
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
    validate('ONN', arguments)
    super(scene, x, y, 'SMALL_HILL')
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
    validate('ONN', arguments)
    super(scene, x, y, 'LARGE_COPPER')
    this.setDepth(20)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(65, 5, 10)
  }
}

export class SmallCopper extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate('ONN', arguments)
    super(scene, x, y, 'SMALL_COPPER')
    this.setDepth(10)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(50, 5, 10)
  }
}

export class LargeGold extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate('ONN', arguments)
    super(scene, x, y, 'LARGE_GOLD')
    this.setDepth(20)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(65, 5, 10)
  }
}

export class SmallGold extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate('ONN', arguments)
    super(scene, x, y, 'SMALL_GOLD')
    this.setDepth(10)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(50, 5, 10)
  }
}

export class LargeIron extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate('ONN', arguments)
    super(scene, x, y, 'LARGE_IRON')
    this.setDepth(20)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(65, 5, 10)
  }
}

export class SmallIron extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate('ONN', arguments)
    super(scene, x, y, 'SMALL_IRON')
    this.setDepth(10)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(50, 5, 10)
  }
}

export class LargeRock extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate('ONN', arguments)
    super(scene, x, y, 'LARGE_ROCK')
    this.setDepth(20)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(65, 5, 10)
  }
}

export class SmallRock extends PhysicsSprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate('ONN', arguments)
    super(scene, x, y, 'SMALL_ROCK')
    this.setDepth(10)
  }

  _setCollider() {
    this.body.setImmovable()
    this.body.setCircle(50, 5, 10)
  }
}
