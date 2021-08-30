import Item from "./Item";

class CookedRabbitMeatItem extends Item {
  constructor() {
    super("Cooked Rabbit", "COOKED_RABBIT_ITEM");
  }
}

export default new CookedRabbitMeatItem();
