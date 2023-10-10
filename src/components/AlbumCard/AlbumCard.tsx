import {Album} from "../../models/Albums.ts";
import {ReactElement} from "react";


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
            </div>
        </article>
    );
}
export default AlbumCard;