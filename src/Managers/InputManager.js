import Phaser from 'phaser'
import { BaseManager } from './BaseManager'

export class InputManager extends BaseManager {
  _doSetup() {
    const Keys = {}

    const Keyboard = this.scene.input.keyboard
    const KeyCodes = Phaser.Input.Keyboard.KeyCodes

    Keys.W = Keyboard.addKey(KeyCodes.W)
    Keys.A = Keyboard.addKey(KeyCodes.A)
    Keys.S = Keyboard.addKey(KeyCodes.S)
    Keys.D = Keyboard.addKey(KeyCodes.D)

    this.scene.Keys = Keys
  }
}
