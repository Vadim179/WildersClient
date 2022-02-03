let PLAYER_X = 0
let PLAYER_Y = 0
let PLAYER_SPEED = 200

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
