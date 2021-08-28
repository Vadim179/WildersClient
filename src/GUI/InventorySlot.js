import validate from "aproba";
import Entity from "Entities/Entity";
import Text from "GUI/Text";
import Image from "GUI/Image";

class InventorySlot extends Entity {
  /**
   * @param {object} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    validate("ONN", arguments);
    super(scene, x, y, "INVENTORY_SLOT");

    this.setScrollFactor(0);
    this.setDepth(100);
    this.setAlpha(0.9);

    this.item = null;
    this.count = 0;

    this.text = new Text(scene, x, y + 10);
    this.icon = new Image(scene, x, y);
    this._doUpdate();
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

    this._doUpdate();
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

    this._doUpdate();
    return this;
  }

  _doUpdate() {
    this._doUpdateIcon();
    this._doUpdateText();
  }

  _doUpdateIcon() {
    const { icon, item } = this;

    if (item) {
      icon.setTexture(item.texture);
      icon.setAlpha(1);
      return;
    }

    icon.setTexture("");
    icon.setAlpha(0);
  }

  _doUpdateText() {
    const { x, text, count } = this;

    if (count > 999) text.setText("x999+");
    else text.setText("x" + count);

    const length = text.text.length;
    text.setX(x + 30 - length * 11);

    if (count > 1 && text.alpha === 0) {
      text.setAlpha(1);
      return;
    }

    text.setAlpha(0);
  }
}

export default InventorySlot;
