import PlayerBody from "Assets/PlayerBody.svg"
import LargeFlower from "Assets/LargeFlower.svg"
import SmallFlower from "Assets/SmallFlower.svg"
import LargeHill from "Assets/LargeHill.svg"
import SmallHill from "Assets/SmallHill.svg"
import LargePebble from "Assets/LargePebble.svg"
import MediumPebble from "Assets/MediumPebble.svg"
import SmallPebble from "Assets/SmallPebble.svg"
import LargeCopper from "Assets/LargeCopper.svg"
import SmallCopper from "Assets/SmallCopper.svg"
import LargeGold from "Assets/LargeGold.svg"
import SmallGold from "Assets/SmallGold.svg"
import LargeIron from "Assets/LargeIron.svg"
import SmallIron from "Assets/SmallIron.svg"
import LargeRock from "Assets/LargeRock.svg"
import SmallRock from "Assets/SmallRock.svg"
import LargeTree from "Assets/LargeTree.svg"
import MediumTree from "Assets/MediumTree.svg"
import SmallTree from "Assets/SmallTree.svg"
import LargeDarkTree from "Assets/LargeDarkTree.svg"
import MediumDarkTree from "Assets/MediumDarkTree.svg"
import SmallDarkTree from "Assets/SmallDarkTree.svg"
import InventorySlot from "Assets/InventorySlot.svg"
import WoodItem from "Assets/WoodItem.svg"
import StoneItem from "Assets/StoneItem.svg"
import CopperItem from "Assets/CopperItem.svg"
import GoldItem from "Assets/GoldItem.svg"
import IronItem from "Assets/IronItem.svg"
import CookedRabbitItem from "Assets/CookedRabbitItem.svg"
import RawRabbitItem from "Assets/RawRabbitItem.svg"
import RabbitFurItem from "Assets/RabbitFurItem.svg"

function onPreloadScene() {
  this.load.svg("PLAYER_BODY", PlayerBody)
  this.load.svg("LARGE_FLOWER", LargeFlower)
  this.load.svg("SMALL_FLOWER", SmallFlower)
  this.load.svg("LARGE_HILL", LargeHill)
  this.load.svg("SMALL_HILL", SmallHill)
  this.load.svg("LARGE_PEBBLE", LargePebble)
  this.load.svg("MEDIUM_PEBBLE", MediumPebble)
  this.load.svg("SMALL_PEBBLE", SmallPebble)
  this.load.svg("LARGE_COPPER", LargeCopper)
  this.load.svg("SMALL_COPPER", SmallCopper)
  this.load.svg("LARGE_GOLD", LargeGold)
  this.load.svg("SMALL_GOLD", SmallGold)
  this.load.svg("LARGE_IRON", LargeIron)
  this.load.svg("SMALL_IRON", SmallIron)
  this.load.svg("LARGE_ROCK", LargeRock)
  this.load.svg("SMALL_ROCK", SmallRock)
  this.load.svg("LARGE_TREE", LargeTree)
  this.load.svg("LARGE_DARK_TREE", LargeDarkTree)
  this.load.svg("MEDIUM_TREE", MediumTree)
  this.load.svg("MEDIUM_DARK_TREE", MediumDarkTree)
  this.load.svg("SMALL_TREE", SmallTree)
  this.load.svg("SMALL_DARK_TREE", SmallDarkTree)
  this.load.svg("WOOD_ITEM", WoodItem)
  this.load.svg("STONE_ITEM", StoneItem)
  this.load.svg("COPPER_ITEM", CopperItem)
  this.load.svg("GOLD_ITEM", GoldItem)
  this.load.svg("IRON_ITEM", IronItem)
  this.load.svg("COOKED_RABBIT_ITEM", CookedRabbitItem)
  this.load.svg("RAW_RABBIT_ITEM", RawRabbitItem)
  this.load.svg("RABBIT_FUR_ITEM", RabbitFurItem)
  this.load.svg("INVENTORY_SLOT", InventorySlot)
}

export default onPreloadScene
