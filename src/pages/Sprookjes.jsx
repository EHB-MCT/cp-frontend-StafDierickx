import React, { useState, useEffect } from "react";

import TileGrid from "@/components/ui/TileGrid";
import SearchBar from "@/components/ui/Searchbar";
import LoadingElement from "@/components/ui/LoadingElement";

// import dummydata from "@/assets/dummy-data.json"

function Sprookjes() {
  const [storyCards, setStoryCards] = useState([])
  const [filteredStoryCards, setFilteredStoryCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    setIsLoading(true)
    
    // fetch json array from api
    console.log("Fetching sprookjes data...")
    fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json")
      .then(response => response.json())
      .then(data => {
        setStoryCards(data)
        console.log("Data fetched:", data)
        setFilteredStoryCards(data)
        setIsLoading(false)
      })
      .catch(error => console.error(error))
    
  }, [])
  
  useEffect(() => {
    filterData(searchTerm)
  }, [searchTerm, storyCards])
  
  const handleSearch = (term) => {
    console.log(term)
    setSearchTerm(term)
  }
  
  // Filter results based on searhc term
  const filterData = (term) => {
    if (!term) {
      setFilteredStoryCards(storyCards)
      console.log("No search term provided")
      return
    }

    let cards = storyCards
    
    cards = cards.filter((data) => {
      // console.log(data)
      if (data.fairytale.includes(term))
        return true
      if (data.nameStudent.includes(term))
        return true
    })
    console.log("resutl count:", cards.length)
    setFilteredStoryCards(cards)
  }

  if (isLoading) 
    return (
      <LoadingElement />
    )
  
  return (
    <>
      <SearchBar expanded={true} onSearch={handleSearch} />
      { isLoading && 
        <div className="center-body">
          <p>Loading...</p>
        </div>
      }
      { !isLoading && 
        <div className="center-body">
          <TileGrid data={filteredStoryCards} />
        </div>
      }
    </>
  )
}

export default Sprookjes;