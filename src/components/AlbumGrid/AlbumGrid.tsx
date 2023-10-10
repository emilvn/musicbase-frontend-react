import {Album} from "../../models/Albums.ts";
import {ReactElement} from "react";
import AlbumCard from "../AlbumCard/AlbumCard.tsx";

interface AlbumGridProps {
    albums: Album[]
}

function AlbumGrid({albums}:AlbumGridProps):ReactElement{
    return (
        <div className="ArtistGrid">
            {albums.map((album:Album) => (
                <AlbumCard
                    key={album.id}
                    album={album}
                />
            ))}
        </div>
    )
}
export default AlbumGrid;