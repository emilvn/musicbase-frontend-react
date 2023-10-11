import Album from "../../models/Albums.ts";
import {ReactElement} from "react";
import TrackList from "../Containers/TrackList.tsx";
import "./styles/AlbumCard.css";

interface AlbumCardProps {
    album: Album
}

function AlbumCard({album}:AlbumCardProps):ReactElement{
    return (
        <article
            className="AlbumCard"
            style={{backgroundImage: `url(${album.image})`}}
        >
            <div>
                <h3>{album.name}</h3>
                <p className={"AlbumCardArtists"}>{album.artistNames}</p>
            </div>
            <div>
                <TrackList tracks={album.tracks}/>
            </div>
        </article>
    );
}
export default AlbumCard;