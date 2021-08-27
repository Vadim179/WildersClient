import validate from "aproba";
import Inventory from "Logic/Inventory";
import InventorySlotUI from "./InventorySlot";

class InventoryUI {
  /**
   * @param {object} scene
   */
  constructor(scene) {
    validate("O", arguments);
    this.inventory = new Inventory();

    this.scene = scene;
    this.doInitializeSlots();
  }

  /**
   * @param {object} slot
   * @param {number} index
   * @param {object[]} slots
   */
  doCreateSlot = (_, index, slots) => {
    const count = slots.length;
    const x = (window.innerWidth - count * 120) / 2 + index * 120 + 60;
    const y = window.innerHeight - 100;

    new InventorySlotUI(this.scene, x, y);
  };

  doInitializeSlots() {
    this.inventory.slots.forEach(this.doCreateSlot);
  }
}

export default InventoryUI;
