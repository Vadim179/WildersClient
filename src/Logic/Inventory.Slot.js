import validate from "aproba";

class InventorySlot {
  constructor() {
    this.item = null;
    this.count = 0;
  }

  /**
   * @param {object} item
   * @param {number} count
   */
  doPushItem(item, count) {
    validate("ON", arguments);

    this.count += count;
    if (this.item === null) {
      this.item = item;
    }

    return this;
  }

  /**
   * @param {number} count
   */
  doRemoveItem(count) {
    validate("N", arguments);

    this.count -= count;
    if (this.count <= 0) {
      this.count = 0;
      this.item = null;
    }

    return this;
  }
}

export default InventorySlot;
