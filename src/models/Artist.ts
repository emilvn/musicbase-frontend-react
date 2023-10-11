import Item from "./Item.ts";
import {ArtistData} from "../types/types.ts";
class Artist extends Item{
	private readonly _image:string;
	constructor(ItemData:ArtistData){
		super(ItemData);
		this._image = ItemData.image;
	}
	get image():string{
		return this._image;
	}
}
export default Artist;