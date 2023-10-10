import {Track} from "../../models/Track.ts";
import {ReactElement} from "react";

interface TrackCardProps {
    track: Track;
}

function TrackCard({track}:TrackCardProps):ReactElement{
    return (
        <li className={"TrackCard"}>{track.name}</li>
    );
}
export default TrackCard;