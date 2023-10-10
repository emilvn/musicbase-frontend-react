import ArtistCard from "../ArtistCard/ArtistCard.tsx";
import {ReactElement} from "react";
import {Artist} from "../../models/Artist.ts";
import "./ArtistGrid.css";

interface ArtistGridProps {
    artists: Artist[]
}

function ArtistGrid({artists}:ArtistGridProps):ReactElement {
    return (
        <div className="ArtistGrid">
            {artists.map((artist:Artist) => (
                <ArtistCard
                key={artist.id}
                artist={artist}
                />
            ))}
        </div>
  );
}
export default ArtistGrid;