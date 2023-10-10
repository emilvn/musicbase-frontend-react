import {ReactElement} from "react";
import {Artist} from "../../models/Artist.ts";
import "./styles/ArtistCard.css";
interface ArtistCardProps {
    artist: Artist
}
function ArtistCard({ artist }:ArtistCardProps):ReactElement{
    return (
        <article
            className="ArtistCard"
            style={{backgroundImage: `url(${artist.image})`}}
        >
            <div>
                <h3>{artist.name}</h3>
            </div>
        </article>
    );
}
export default ArtistCard;