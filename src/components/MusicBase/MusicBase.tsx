import './MusicBase.css'
import {ReactElement, useEffect, useState} from "react";
import Tabs from "../Tabs/Tabs.tsx";
import {Artist} from "../../models/Artist.ts";
import {Album} from "../../models/Albums.ts";
import {Track} from "../../models/Track.ts";
import {DataService} from "../../utils/DataService/DataService.ts";
import {AlbumData, ArtistData, TrackData} from "../../types/types.ts";
import Search from "../Search/Search.tsx";

function MusicBase():ReactElement{
    const [artists, setArtists] = useState<Artist[]>([]);
    const [albums, setAlbums] = useState<Album[]>([]);
    const [tracks, setTracks] = useState<Track[]>([]);

    useEffect(():void => {
        const artistDataService = new DataService<ArtistData, Artist>("/artists", Artist);
        artistDataService.getAll().then((artists:Artist[]):void => {
            setArtists(artists);
        });
    }, []);

    useEffect(():void => {
        const albumDataService = new DataService<AlbumData, Album>("/albums", Album);
        albumDataService.getAll().then((albums:Album[]):void => {
            setAlbums(albums);
        });
    }, []);

    useEffect(():void => {
        const trackDataService = new DataService<TrackData, Track>("/tracks", Track);
        trackDataService.getAll().then((tracks:Track[]):void => {
            setTracks(tracks);
        });
    }, []);

    return (
        <>
            <header className={"Header"}>
                <h1>Musicbase</h1>
                <Search setArtists={setArtists} setAlbums={setAlbums} setTracks={setTracks}/>
            </header>
            <main>
                <Tabs artists={artists} albums={albums} tracks={tracks}/>
            </main>
        </>
    )
}
export default MusicBase;
