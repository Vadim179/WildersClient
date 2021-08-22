import Phaser from "phaser";

function doInitializeInput() {
  const KeyCodes = Phaser.Input.Keyboard.KeyCodes;
  this.W = this.input.keyboard.addKey(KeyCodes.W);
  this.A = this.input.keyboard.addKey(KeyCodes.A);
  this.S = this.input.keyboard.addKey(KeyCodes.S);
  this.D = this.input.keyboard.addKey(KeyCodes.D);
}

export default doInitializeInput;
