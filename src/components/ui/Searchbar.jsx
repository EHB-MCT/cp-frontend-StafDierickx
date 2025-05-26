import * as React from "react";
import { useState, useEffect } from "react"

import styles from "@/styles/components/SearchBar.module.css";

function SearchBar({ expanded = false, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // get query from url to load as default
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get("storyId");
    if (queryParam) {
      setSearchTerm(queryParam)
      if (onSearch)
        onSearch(searchTerm)
    }
  }, []);

  useEffect(() => {
    if (onSearch)
      onSearch(searchTerm)
    // console.log("searchterm:", searchTerm)
  }, [searchTerm])

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Zoek hier naar een sprookje"
          value={searchTerm}
          onChange={onChange}
        />
        <button>Zoek</button>
      </div>
      {expanded && <div></div>}
    </>
  );
}

export default SearchBar;
