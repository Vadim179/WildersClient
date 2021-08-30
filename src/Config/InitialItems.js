import WoodItem from "Items/Wood";
import StoneItem from "Items/Stone";
import CopperItem from "Items/Copper";
import GoldItem from "Items/Gold";
import IronItem from "Items/Iron";
import CookedRabbitItem from "Items/CookedRabbit";
import RawRabbitItem from "Items/RawRabbit";
import RabbitFurItem from "Items/RabbitFur";

const INITIAL_ITEMS = [
  { item: WoodItem, count: 1000 },
  { item: StoneItem, count: 100 },
  { item: CopperItem, count: 20 },
  { item: GoldItem, count: 10 },
  { item: IronItem, count: 10 },
  { item: CookedRabbitItem, count: 10 },
  { item: RawRabbitItem, count: 10 },
  { item: RabbitFurItem, count: 10 },
];

export default INITIAL_ITEMS;
