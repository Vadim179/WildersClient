import validate from "aproba"
import Phaser from "phaser"

class CursorSeeker {
  /**
   * @param {object} player
   * @param {object} scene
   */
  constructor(player, scene) {
    validate("OO", arguments)
    this.player = player
    this.scene = scene
  }

  doSeekCursor() {
    const { input, cameras } = this.scene
    input.mousePointer.updateWorldPoint(cameras.main)

    const mouseX = input.mousePointer.worldX
    const mouseY = input.mousePointer.worldY

    const playerX = this.player.x
    const playerY = this.player.y

    const angle = Phaser.Math.Angle.Between(playerX, playerY, mouseX, mouseY)
    this.player.setRotation(angle - 1.5)
  }
}

export default CursorSeeker
