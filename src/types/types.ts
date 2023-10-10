export interface AlbumData extends ItemData{
    id: string;
    name: string;
    image: string;
    artists: ArtistData[];
    tracks: TrackData[];
}
export interface ArtistData extends ItemData{
    id: string;
    name: string;
    image: string;
}
export interface TrackData extends ItemData{
    id: string;
    name: string;
}

export interface ItemData {
    id: string;
    name: string;
}
