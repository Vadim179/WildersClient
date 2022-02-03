import Phaser from 'phaser'

export const StarterInventoryItems = []

export function doInitializeKeys() {
  const Keys = {}

  const Keyboard = this.input.keyboard
  const KeyCodes = Phaser.Input.Keyboard.KeyCodes

  Keys.W = Keyboard.addKey(KeyCodes.W)
  Keys.A = Keyboard.addKey(KeyCodes.A)
  Keys.S = Keyboard.addKey(KeyCodes.S)
  Keys.D = Keyboard.addKey(KeyCodes.D)

  this.Keys = Keys
}
