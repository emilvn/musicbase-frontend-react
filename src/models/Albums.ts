import Track from "./Track.ts";
import Item from "./Item.ts";
import Artist from "./Artist.ts";
import {AlbumData} from "../types/types.ts";

class Album extends Item{
	private readonly _image:string;
	private readonly _artists:Artist[];
	private readonly _tracks:Track[];
	constructor(ItemData:AlbumData){
		super(ItemData);
		this._image = ItemData.image;
		this._artists = ItemData.artists.map(artist => new Artist(artist));
		this._tracks = (ItemData.tracks)
		? ItemData.tracks.map(track => new Track(track))
		: [];
	}
	get image():string{
		return this._image;
	}
   get artistNames():string{
      return this._artists.map(artist => artist.name).reduce((acc,curr)=> acc + curr + ', ', "").slice(0, -2);
    }
	get tracks():Track[]{
		return this._tracks.map(track => new Track(track));
	}
}
export default Album;