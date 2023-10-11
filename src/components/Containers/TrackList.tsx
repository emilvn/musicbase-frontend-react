import {ReactElement} from "react";
import Track from "../../models/Track.ts";
import TrackCard from "../Cards/TrackCard.tsx";
import "./styles/TrackList.css";

interface TrackListProps {
    tracks: Track[];
}

function TrackList({tracks}:TrackListProps):ReactElement{
    return (
        <ul className="TrackList">
            {tracks.map((track:Track) => (
                <TrackCard
                    key={track.id}
                    track={track}
                />
            ))}
        </ul>
    )
}
export default TrackList;