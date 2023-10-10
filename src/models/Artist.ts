import {Item} from "./Item.ts";
import {ArtistData} from "../types/types.ts";
export class Artist extends Item{
	private readonly _image;
	constructor(ArtistData:ArtistData){
		super(ArtistData);
		this._image = ArtistData.image;
	}
	get image():string{
		return this._image;
	}
}