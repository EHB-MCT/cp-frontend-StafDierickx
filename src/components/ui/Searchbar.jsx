import * as React from "react"

import styles from "@/styles/components/SearchBar.module.css";

function SearchBar({ expanded = false}) {
    return (
      <>
        <div className={styles.search}>
            <input type="text" placeholder="Zoek hier naar een sprookje" />
            <button>Zoek</button>
        </div>
        { expanded &&
          <div>
            
          </div>
        }
      </>
    )
}

export default SearchBar