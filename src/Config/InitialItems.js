import WoodItem from "Items/Wood";
import StoneItem from "Items/Stone";
import CopperItem from "Items/Copper";
import GoldItem from "Items/Gold";
import IronItem from "Items/Iron";
import CookedRabbitMeatItem from "Items/CookedRabbitMeat";
import RawRabbitMeatItem from "Items/RawRabbitMeat";
import RabbitFurItem from "Items/RabbitFur";

const INITIAL_ITEMS = [
  { item: WoodItem, count: 1000 },
  { item: StoneItem, count: 100 },
  { item: CopperItem, count: 20 },
  { item: GoldItem, count: 10 },
  { item: IronItem, count: 10 },
  { item: CookedRabbitMeatItem, count: 10 },
  { item: RawRabbitMeatItem, count: 10 },
  { item: RabbitFurItem, count: 10 },
];

export default INITIAL_ITEMS;
