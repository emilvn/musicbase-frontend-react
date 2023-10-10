import './MusicBase.css'
import Header from '../Header/Header.tsx'
import {ReactElement} from "react";
import Tabs from "../Tabs/Tabs.tsx";

function MusicBase():ReactElement{
  return (
    <>
        <Header/>
        <Tabs/>
    </>
  )
}
export default MusicBase;
