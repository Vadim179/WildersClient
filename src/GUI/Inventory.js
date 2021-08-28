import validate from "aproba";
import INITIAL_ITEMS from "Config/InitialItems";

import Item from "Items/Item";
import InventorySlot from "./InventorySlot";

class Inventory {
  /**
   * @param {object} scene
   */
  constructor(scene) {
    validate("O", arguments);

    this.scene = scene;
    this.slots = [];
    this.sCount = 8;

    this._doInitializeSlots();
    this._doSetInitialItems();
  }

  /**
   * @param {object} item
   * @param {number} count
   */
  doPushItem(item, count) {
    validate("ON", arguments);
    if (item instanceof Item === false) return;

    const slot = this.slots.find((slot) => {
      return slot.item == null || slot.item.name === item.name;
    });
    if (slot) slot.doPushItem(item, count);
  }

  /**
   * @param {object} item
   * @param {number} count
   */
  doRemoveItem(item, count) {
    validate("ON", arguments);
    if (item instanceof Item === false) return;

    const slot = this.slots.find((slot) => slot.item.name === item.name);
    if (slot) slot.doRemoveItem(count);
  }

  /**
   * @param {number} count
   */
  doPushSlots(count) {
    validate("N", arguments);
    const slots = new Array(count).fill(0).map(() => new InventorySlot());
    this.slots = [...this.slots, slots];
  }

  /**
   * @param {number} index
   */
  _doCreateSlot(index) {
    validate("N", arguments);

    const count = this.sCount;
    const x = (window.innerWidth - count * 80) / 2 + index * 80 + 40;
    const y = window.innerHeight - 40;

    this.slots.push(new InventorySlot(this.scene, x, y));
  }

  _doInitializeSlots() {
    for (let i = 0; i < this.sCount; i++) {
      this._doCreateSlot(i);
    }
  }

  _doSetInitialItems() {
    INITIAL_ITEMS.forEach(({ item, count }) => {
      this.doPushItem(item, count);
    });
  }
}

export default Inventory;
