import { ItemData } from "../types/types.ts";
class Item{
	private readonly _id:string;
	private readonly _name:string;
	constructor(ItemData: ItemData){
		this._id = ItemData.id;
		this._name = ItemData.name;
	}
	public get id():string{
		return this._id;
	}
	public get name():string{
		return this._name;
	}
}
export default Item;