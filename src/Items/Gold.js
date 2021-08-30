import Item from './Item'

class GoldItem extends Item{
  constructor(){
    super("Gold", "GOLD_ITEM");
  }
}
export default new GoldItem();