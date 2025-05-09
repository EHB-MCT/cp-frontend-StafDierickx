import React, { useContext } from "react";

import Header from "../components/Header.jsx";

import Story from '../components/Story.jsx';
import { BannerExpandContext } from "../context/BannerContext.jsx";

function Home({expand = true}) {
  const { bannerExpand, setBannerExpand } = useContext(BannerExpandContext)
  setBannerExpand(true)

  return (
    <>
        {/* <Header expand={true} /> */}
        <h1>This is the temp home page</h1>
        <Story />
    </>
  )
}

export default Home;