import Phaser from "phaser"
import {
  CookedRabbitMeatItem,
  CopperItem,
  GoldItem,
  IronItem,
  RabbitFurItem,
  RawRabbitMeatItem,
  StoneItem,
  WoodItem,
} from "./Items.Config"

export const StarterInventoryItems = [
  { item: new WoodItem(), count: 1000 },
  { item: new StoneItem(), count: 100 },
  { item: new CopperItem(), count: 20 },
  { item: new GoldItem(), count: 10 },
  { item: new IronItem(), count: 10 },
  { item: new CookedRabbitMeatItem(), count: 10 },
  { item: new RawRabbitMeatItem(), count: 10 },
  { item: new RabbitFurItem(), count: 10 },
]

export const ColorPallete = {
  BACKGROUND: "#9AB855",
}

export function initKeyboardInput() {
  const KeyCodes = Phaser.Input.Keyboard.KeyCodes
  this.W = this.input.keyboard.addKey(KeyCodes.W)
  this.A = this.input.keyboard.addKey(KeyCodes.A)
  this.S = this.input.keyboard.addKey(KeyCodes.S)
  this.D = this.input.keyboard.addKey(KeyCodes.D)
}
