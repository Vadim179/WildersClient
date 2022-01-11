import validate from "aproba"
import { Sprite } from "Config/Objects.Config"
import { ImageGUI, TextGUI } from "GUI"

class InventorySlotGUI extends Sprite {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments)
    super(scene, x, y, "INVENTORY_SLOT")

    this.setScrollFactor(0)
    this.setDepth(100)
    this.setAlpha(0.9)
    this.setScale(0.7)

    this.item = null
    this.count = 0

    this.text = new TextGUI(scene, x, y + 10)
    this.icon = new ImageGUI(scene, x, y)
    this.icon.setScale(0.7)

    this._update()
  }

  /**
   * @param {object} item
   * @param {number} count
   */
  addItem(item, count) {
    validate("ON", arguments)

    this.count += count
    if (this.item === null) {
      this.item = item
    }

    this._update()
    return this
  }

  /**
   * @param {number} count
   */
  removeItem(count) {
    validate("N", arguments)

    this.count -= count
    if (this.count <= 0) {
      this.count = 0
      this.item = null
    }

    this._update()
    return this
  }

  _update() {
    this._updateIcon()
    this._updateText()
  }

  _updateIcon() {
    const { icon, item } = this

    if (item) {
      icon.setTexture(item.texture)
      icon.setAlpha(1)
      return
    }

    icon.setTexture("")
    icon.setAlpha(0)
  }

  _updateText() {
    const { x, text, count } = this

    if (count > 999) text.setText("x999+")
    else text.setText("x" + count)

    const length = text.text.length
    text.setX(x + 30 - length * 8.5)

    if (count > 1 && text.alpha === 0) {
      text.setAlpha(1)
      return
    }

    text.setAlpha(0)
  }
}

export default InventorySlotGUI
