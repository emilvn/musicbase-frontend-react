export interface AlbumData {
    id: string;
    name: string;
    image: string;
    artists: ArtistData[];
    tracks: TrackData[];
}
export interface ArtistData {
    id: string;
    name: string;
    image: string;
}
export interface TrackData {
    id: string;
    name: string;
}

export type ItemData = ArtistData | AlbumData | TrackData;