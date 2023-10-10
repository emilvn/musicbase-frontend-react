import {ReactElement} from "react";
import {FaSearch} from "react-icons/fa";

function Header():ReactElement{
    return <header>
        <h1>Musicbase</h1>
        <div id="artist-search-div">
            <label htmlFor="artist-search">
                <FaSearch />
            </label>
            <input type="search" id="artist-search" name="search" placeholder="Search for artists, albums, tracks..." />
        </div>
    </header>
}
export default Header;