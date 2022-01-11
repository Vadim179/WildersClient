import validate from "aproba"
import { InventorySlotGUI } from "GUI"

import { Item } from "Config/Items.Config"
import { StarterInventoryItems } from "Config/Game.Config"

class InventoryGUI {
  /**
   * @param {object} scene
   */
  constructor(scene) {
    validate("O", arguments)

    this.scene = scene
    this.slots = []

    this._createSlots()
    this._setStarterItems()
  }

  /**
   * @param {object} item
   * @param {number} count
   */
  addItem(item, count) {
    validate("ON", arguments)
    if (item instanceof Item === false) return
    const slot = this.slots.find(
      (slot) => slot.item == null || slot.item.name === item.name
    )
    slot && slot.addItem(item, count)
  }

  /**
   * @param {object} item
   * @param {number} count
   */
  removeItem(item, count) {
    validate("ON", arguments)
    if (item instanceof Item === false) return
    const slot = this.slots.find((slot) => slot.item.name === item.name)
    slot && slot.removeItem(count)
  }

  _createSlots() {
    for (let i = 0; i < 8; i++) {
      const x = (window.innerWidth - 8 * 80) / 2 + i * 80 + 40
      const y = window.innerHeight - 40
      this.slots.push(new InventorySlotGUI(this.scene, x, y))
    }
  }

  _setStarterItems() {
    StarterInventoryItems.forEach(({ item, count }) => this.addItem(item, count))
  }
}

export default InventoryGUI
