import validate from "aproba";

import InventoryItem from "./Inventory.Item";
import InventorySlot from "./Inventory.Slot";

class Inventory {
  constructor() {
    this.slots = new Array(8).fill(0).map(() => new InventorySlot());
  }

  /**
   * @param {object} item
   * @param {number} count
   */
  doPushItem(item, count) {
    validate("ON", arguments);
    if (item instanceof InventoryItem === false) return;

    const slot = this.slots.find((slot) => {
      return slot.item == null || slot.item.ID === item.ID;
    });
    if (slot) slot.doPushItem(item, count);
  }

  /**
   * @param {object} item
   * @param {number} count
   */
  doRemoveItem(item, count) {
    validate("ON", arguments);
    if (item instanceof InventoryItem === false) return;

    const slot = this.slots.find((slot) => slot.item.ID === item.ID);
    if (slot) slot.doRemoveItem(count);
  }

  /**
   * @param {number} count
   */
  doPushSlots(count) {
    validate("N", arguments);
    const slots = new Array(count).fill(new InventorySlot());
    this.slots = [...this.slots, slots];
  }
}

export default Inventory;
