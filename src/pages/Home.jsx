import React, { useContext } from "react";

import Header from "../components/Header.jsx";

import Story from '../components/Story.jsx';
import SectionHeader from "../components/SectionHeader.jsx";
import TileGrid from "../components/TileGrid.jsx";
import { BannerExpandContext } from "../context/BannerContext.jsx";

import Styles from "../styles/pages/Home.module.css"

import dummydata from "../assets/dummy-data.json"

function Home({expand = true}) {
  const { bannerExpand, setBannerExpand } = useContext(BannerExpandContext)
  setBannerExpand(true)

  let storyCards = dummydata

  return (
    <>
        {/* <Header expand={true} /> */}
        <br />
        <SectionHeader text="Populair" />
        <div className="center-body">
          <TileGrid data={storyCards} max='8' />
        </div>
    </>
  )
}

export default Home;