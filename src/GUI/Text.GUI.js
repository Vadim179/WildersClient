import Phaser from "phaser"

class TextGUI extends Phaser.GameObjects.Text {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   * @param {string} text
   */
  constructor(scene, x, y, text = "") {
    const style = { fontSize: 12, color: "#ffffff" }
    super(scene, x, y, text, style)

    this.setDepth(200)
    this.setScrollFactor(0)
    this.addToScene()
  }

  addToScene() {
    this.scene.add.existing(this)
  }
}

export default TextGUI
