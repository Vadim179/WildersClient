import Item from "./Item";

class WoodItem extends Item {
  constructor() {
    super("Wood", "WOOD_ITEM");
  }
}

export default new WoodItem();
