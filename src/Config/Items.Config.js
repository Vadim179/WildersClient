import validate from "aproba"

export class Item {
  /**
   * @param {string} name
   * @param {string} texture
   */
  constructor(name, texture) {
    validate("SS", arguments)
    this.name = name
    this.texture = texture
  }
}

/* 🐻
 !.##.....##..#######..########...######.
 !.###...###.##.....##.##.....##.##....##
 !.####.####.##.....##.##.....##.##......
 !.##.###.##.##.....##.########...######.
 !.##.....##.##.....##.##.....##.......##
 !.##.....##.##.....##.##.....##.##....##
 !.##.....##..#######..########...######.
 */

export class RawRabbitMeatItem extends Item {
  constructor() {
    super("Raw Rabbit", "RAW_RABBIT_ITEM")
  }
}

export class CookedRabbitMeatItem extends Item {
  constructor() {
    super("Cooked Rabbit", "COOKED_RABBIT_ITEM")
  }
}

export class RabbitFurItem extends Item {
  constructor() {
    super("Rabbit Fur", "RABBIT_FUR_ITEM")
  }
}

/* 💎
 ?..#######..########..########..######.
 ?.##.....##.##.....##.##.......##....##
 ?.##.....##.##.....##.##.......##......
 ?.##.....##.########..######....######.
 ?.##.....##.##...##...##.............##
 ?.##.....##.##....##..##.......##....##
 ?..#######..##.....##.########..######.
 */

export class WoodItem extends Item {
  constructor() {
    super("Wood", "WOOD_ITEM")
  }
}

export class StoneItem extends Item {
  constructor() {
    super("Stone", "STONE_ITEM")
  }
}

export class CopperItem extends Item {
  constructor() {
    super("Copper", "COPPER_ITEM")
  }
}

export class IronItem extends Item {
  constructor() {
    super("Iron", "IRON_ITEM")
  }
}

export class GoldItem extends Item {
  constructor() {
    super("Gold", "GOLD_ITEM")
  }
}
