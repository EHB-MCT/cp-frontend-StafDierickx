import React, { useState, useEffect, useContext } from "react";

import Header from "@/components/ui/Header.jsx";

import Story from '@/components/Story.jsx';
import SectionHeader from "@/components/SectionHeader.jsx";
import TileGrid from "@/components/ui/TileGrid.jsx";
import { BannerExpandContext } from "@/context/BannerContext.jsx";

import Styles from "@/styles/pages/Home.module.css"

// import dummydata from "@/assets/dummy-data.json"

function Home({expand = true}) {
  const { bannerExpand, setBannerExpand } = useContext(BannerExpandContext)
  setBannerExpand(true)

  let [storyCards, setStoryCards] = useState()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setIsLoading(true)
    
    // fetch json array from api
    console.log("Fetching sprookjes data...")
    fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json")
      .then(response => response.json())
      .then(data => {
        console.log("Data fetched:", data)
        
        setStoryCards([...storyCards].sort(() => Math.random() - 0.5));
        setIsLoading(false)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <>
        {/* <Header expand={true} /> */}
        <br />
        <SectionHeader text="Populair" />
        { !isLoading && 
          <div className="center-body">
            <TileGrid data={storyCards} max='8' />
          </div>  
        }
    </>
  )
}

export default Home;