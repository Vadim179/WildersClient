let PLAYER_X = 0
let PLAYER_Y = 0
let PLAYER_SPEED = 200

class Position {
  /**
   * @param {Number} x
   * @param {Number} y
   */
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  /**
   * @param {Position} newPosition
   * @returns {Boolean}
   */
  compare({ x, y }) {
    return this.x === x && this.y === y
  }
}

/**
 * Sends the player's position to the server 30 times per second.
 * This method should be invoked once the scene is created.
 */
export function doStreamPosition() {
  const { player } = this
  let _previousPosition = new Position()

  setInterval(() => {
    const newPosition = new Position(player.x, player.y)
    if (_previousPosition.compare(newPosition)) return
    _previousPosition = newPosition
    // TODO: EMIT ANGLE TO SERVER
  }, 1000 / 10)
}

/**
 * Allows the player to move using the keyboard keys
 * This method should be invoked every frame.
 */
export function doMovePlayer() {
  const { player, Keys } = this

  if (Keys.W.isDown) PLAYER_Y = -1
  else if (Keys.S.isDown) PLAYER_Y = 1
  else PLAYER_Y = 0

  if (Keys.D.isDown) PLAYER_X = 1
  else if (Keys.A.isDown) PLAYER_X = -1
  else PLAYER_X = 0

  let xVelocity = PLAYER_X * PLAYER_SPEED
  let yVelocity = PLAYER_Y * PLAYER_SPEED

  if (PLAYER_X !== 0 && PLAYER_Y !== 0) {
    xVelocity = (PLAYER_X * PLAYER_SPEED) / Math.sqrt(2)
    yVelocity = (PLAYER_Y * PLAYER_SPEED) / Math.sqrt(2)
  }

  player.body.setVelocityX(xVelocity)
  player.body.setVelocityY(yVelocity)
}
