import validate from "aproba";

class Item {
  /**
   * @param {string} name
   * @param {string} texture
   */
  constructor(name, texture) {
    validate("SS", arguments);
    this.name = name;
    this.texture = texture;
  }
}

export default Item;
