import {Album} from "../../models/Albums.ts";
import {ReactElement} from "react";
import AlbumCard from "../Cards/AlbumCard.tsx";
import "./styles/AlbumGrid.css";

interface AlbumGridProps {
    albums: Album[]
}

function AlbumGrid({albums}:AlbumGridProps):ReactElement{
    return (
        <div className="AlbumGrid">
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