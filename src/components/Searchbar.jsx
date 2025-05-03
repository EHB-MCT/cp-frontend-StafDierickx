import * as React from "react"

import styles from "../styles/SearchBar.module.css";

const SearchBar = () => {
    return (
        <div className={styles.search}>
            <input type="text" placeholder="Zoek hier naar een sprookje" />
            <button>Zoek</button>
        </div>
    )
}

export default SearchBar