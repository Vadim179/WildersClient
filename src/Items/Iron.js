import Item from './Item'

class IronItem extends Item{
  constructor(){
    super("Iron", "IRON_ITEM");
  }
}
export default new IronItem();