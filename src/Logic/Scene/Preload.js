// * ENTITIES / PLAYER
import PlayerBody from "Assets/Beings/Player/PlayerBody.svg";

// * DECORS
import LargeFlower from "Assets/Decors/LargeFlower.svg";
import SmallFlower from "Assets/Decors/SmallFlower.svg";
import LargeHill from "Assets/Decors/LargeHill.svg";
import SmallHill from "Assets/Decors/SmallHill.svg";
import LargePebble from "Assets/Decors/LargePebble.svg";
import MediumPebble from "Assets/Decors/MediumPebble.svg";
import SmallPebble from "Assets/Decors/SmallPebble.svg";

// * RESOURCES / ORES
import LargeCopper from "Assets/Resources/Ores/LargeCopper.svg";
import SmallCopper from "Assets/Resources/Ores/SmallCopper.svg";
import LargeGold from "Assets/Resources/Ores/LargeGold.svg";
import SmallGold from "Assets/Resources/Ores/SmallGold.svg";
import LargeIron from "Assets/Resources/Ores/LargeIron.svg";
import SmallIron from "Assets/Resources/Ores/SmallIron.svg";
import LargeRock from "Assets/Resources/Ores/LargeRock.svg";
import SmallRock from "Assets/Resources/Ores/SmallRock.svg";

// * RESOURCES / TREES
import LargeTree from "Assets/Resources/Trees/LargeTree.svg";
import MediumTree from "Assets/Resources/Trees/MediumTree.svg";
import SmallTree from "Assets/Resources/Trees/SmallTree.svg";
import LargeDarkTree from "Assets/Resources/Trees/LargeDarkTree.svg";
import MediumDarkTree from "Assets/Resources/Trees/MediumDarkTree.svg";
import SmallDarkTree from "Assets/Resources/Trees/SmallDarkTree.svg";

// * UI
import InventorySlot from "Assets/UI/InventorySlot.svg";

// * ITEMS
import WoodItem from "Assets/Items/WoodItem.svg";

export default function preload() {
  // * ENTITIES / PLAYER
  this.load.svg("PLAYER_BODY", PlayerBody);

  // * DECORS
  this.load.svg("LARGE_FLOWER", LargeFlower);
  this.load.svg("SMALL_FLOWER", SmallFlower);
  this.load.svg("LARGE_HILL", LargeHill);
  this.load.svg("SMALL_HILL", SmallHill);
  this.load.svg("LARGE_PEBBLE", LargePebble);
  this.load.svg("MEDIUM_PEBBLE", MediumPebble);
  this.load.svg("SMALL_PEBBLE", SmallPebble);

  // * RESOURCES / ORES
  this.load.svg("LARGE_COPPER", LargeCopper);
  this.load.svg("SMALL_COPPER", SmallCopper);
  this.load.svg("LARGE_GOLD", LargeGold);
  this.load.svg("SMALL_GOLD", SmallGold);
  this.load.svg("LARGE_IRON", LargeIron);
  this.load.svg("SMALL_IRON", SmallIron);
  this.load.svg("LARGE_ROCK", LargeRock);
  this.load.svg("SMALL_ROCK", SmallRock);

  // * RESOURCES / TREES
  this.load.svg("LARGE_TREE", LargeTree);
  this.load.svg("LARGE_DARK_TREE", LargeDarkTree);
  this.load.svg("MEDIUM_TREE", MediumTree);
  this.load.svg("MEDIUM_DARK_TREE", MediumDarkTree);
  this.load.svg("SMALL_TREE", SmallTree);
  this.load.svg("SMALL_DARK_TREE", SmallDarkTree);

  // * UI
  this.load.svg("INVENTORY_SLOT", InventorySlot);

  // * ITEMS
  this.load.svg("WOOD_ITEM", WoodItem);
}
