import {Item} from "./Item.ts";
import {TrackData} from "../types/types.ts";
export class Track extends Item{
	constructor(TrackData:TrackData){
		super(TrackData);
	}
}