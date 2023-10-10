import {ReactElement, useState} from "react";
import "./Tabs.css";
import ArtistGrid from "../Containers/ArtistGrid.tsx";
import {Artist} from "../../models/Artist.ts";
import {Album} from "../../models/Albums.ts";
import {Track} from "../../models/Track.ts";
import AlbumGrid from "../Containers/AlbumGrid.tsx";
import TrackList from "../Containers/TrackList.tsx";

interface TabsProps {
    artists: Artist[];
    albums: Album[];
    tracks: Track[];
}

function Tabs({artists, albums, tracks}:TabsProps):ReactElement {
    const [selectedTab, setSelectedTab] = useState<string>("artists");

    const handleTabClick = (tabName:string) => {
        setSelectedTab(tabName);
    };

    return (
        <div id="tabs" className={"Tabs"}>
            <h2
                data-tab-show="artists"
                className={selectedTab === "artists" ? "selected" : ""}
                onClick={() => handleTabClick("artists")}
            >
                Artists
            </h2>
            <h2
                data-tab-show="albums"
                className={selectedTab === "albums" ? "selected" : ""}
                onClick={() => handleTabClick("albums")}
            >
                Albums
            </h2>
            <h2
                data-tab-show="tracks"
                className={selectedTab === "tracks" ? "selected" : ""}
                onClick={() => handleTabClick("tracks")}
            >
                Tracks
            </h2>
            { selectedTab === "artists" && <ArtistGrid artists={artists}/> }
            { selectedTab === "albums" && <AlbumGrid albums={albums}/> }
            { selectedTab === "tracks" && <TrackList tracks={tracks}/> }
        </div>
    );
}

export default Tabs;