import {ChangeEvent, Dispatch, ReactElement, SetStateAction} from "react";
import {FaSearch} from "react-icons/fa";
import "./Search.css";
import {DataService} from "../../utils/DataService.ts";
import {AlbumData, ArtistData, TrackData} from "../../types/types.ts";
import {Artist} from "../../models/Artist.ts";
import {Album} from "../../models/Albums.ts";
import {Track} from "../../models/Track.ts";

interface SearchProps {
    setArtists: Dispatch<SetStateAction<Artist[]>>;
    setAlbums: Dispatch<SetStateAction<Album[]>>;
    setTracks: Dispatch<SetStateAction<Track[]>>;
}

function Search({setArtists, setAlbums, setTracks}:SearchProps):ReactElement{
    const handleSearch = (event:ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        const artistDataService = new DataService<ArtistData, Artist>("/artists", Artist);
        const albumDataService = new DataService<AlbumData, Album>("/albums", Album);
        const trackDataService = new DataService<TrackData, Track>("/tracks", Track);

        artistDataService.search(searchValue).then((artists:Artist[]):void => {
            setArtists(artists);
        });
        albumDataService.search(searchValue).then((albums:Album[]):void => {
            setAlbums(albums);
        });
        trackDataService.search(searchValue).then((tracks:Track[]):void => {
            setTracks(tracks);
        });
    }
    return <div className={"SearchDiv"}>
            <FaSearch color={"black"}/>
            <input type="search"
                   className={"SearchBar"}
                   placeholder="Search for artists, albums, tracks..."
                   onChange={handleSearch}
            />
        </div>

}
export default Search;