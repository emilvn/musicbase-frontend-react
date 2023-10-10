import React, { useState } from "react";
import "./Tabs.css";
function Tabs() {
    const [selectedTab, setSelectedTab] = useState("artists");

    const handleTabClick = (tabName) => {
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
        </div>
    );
}

export default Tabs;