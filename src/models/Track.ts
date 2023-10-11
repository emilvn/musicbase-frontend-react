import Item from "./Item.ts";
import {TrackData} from "../types/types.ts";
class Track extends Item{
	constructor(ItemData:TrackData){
		super(ItemData);
	}
}
export default Track;