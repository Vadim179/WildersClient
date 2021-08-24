import validate from "aproba";

class InventoryItem {
  /**
   * @param {string} ID
   * @param {string} name
   */
  constructor(ID, name) {
    validate("SS", arguments);

    this.ID = ID;
    this.name = name;
  }
}

export default InventoryItem;
