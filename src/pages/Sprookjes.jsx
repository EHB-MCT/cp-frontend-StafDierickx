import React from "react";

import TileGrid from "../components/TileGrid";
import SearchBar from "../components/Searchbar";

import dummydata from "../assets/dummy-data.json"

function Sprookjes() {
  let storyCards = dummydata
  
  return (
    <>
      <SearchBar expanded={true} />
      <div className="center-body">
        <TileGrid data={storyCards} max='8' />
      </div>
    </>
  )
}

export default Sprookjes;