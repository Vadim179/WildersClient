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

  const angle = Phaser.Math.Angle.Between(playerX, playerY, mouseX, mouseY)
  player.setRotation(angle - 1.5)
}
