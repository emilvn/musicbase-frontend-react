import {Track} from "./Track.ts";
import {Item} from "./Item.ts";
import {Artist} from "./Artist.ts";
import {AlbumData} from "../types/types.ts";

export class Album extends Item{
	private readonly _image:string;
	private readonly _artists:Artist[];
	private readonly _tracks:Track[];
	constructor(AlbumData:AlbumData){
		super(AlbumData);
		this._image = AlbumData.image;
		this._artists = AlbumData.artists.map(artist => new Artist(artist));
		this._tracks = (AlbumData.tracks)
		? AlbumData.tracks.map(track => new Track(track))
		: [];
	}
	get image():string{
		return this._image;
	}
   get artistNames():string {
      return this._artists.map(artist => artist.name).reduce((acc,curr)=> acc + curr + ', ', "").slice(0, -2);
    }
	get tracks():Track[]{
		return this._tracks.map(track => new Track(track));
	}
}

