import Item from "./Item";

class CookedRabbitItem extends Item {
  constructor() {
    super("Cooked Rabbit", "COOKED_RABBIT_ITEM");
  }
}

export default new CookedRabbitItem();
