import * as React from "react";
import { useState, useEffect } from "react"

import styles from "@/styles/components/SearchBar.module.css";

function SearchBar({ expanded = false, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get("query");
    if (queryParam) {
      setSearchTerm(queryParam)
      if (onSearch)
        onSearch(searchTerm)
    }
  }, []);

  const onChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(searchTerm)
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
