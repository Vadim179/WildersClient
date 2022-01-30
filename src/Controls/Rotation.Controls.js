import Phaser from 'phaser'

/**
 * Allows the player to seek out the cursor using
 * the cursor's {X, Y} coordinates. This method should
 * be invoked every frame.
 */
export function doRotatePlayer() {
  const { input, player, cameras } = this
  input.mousePointer.updateWorldPoint(cameras.main)

  const mouseX = input.mousePointer.worldX
  const mouseY = input.mousePointer.worldY

  const playerX = player.x
  const playerY = player.y

  const angle = Phaser.Math.Angle.Between(
    playerX,
    playerY,
    mouseX,
    mouseY
  )

  player.setRotation(angle - 1.5)
}

/**
 * Sends the player's angle to the server 30 times per second.
 * This method should be invoked once the scene is created.
 */
export function doStreamAngle() {
  const { player } = this
  let _previousAngle = 0

  setInterval(() => {
    if (_previousAngle !== player.angle) {
      _previousAngle = player.angle
      // TODO: EMIT ANGLE TO SERVER
    }
  }, 1000 / 10)
}
