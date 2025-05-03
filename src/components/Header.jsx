import * as React from "react";

import styles from "../styles/Header.module.css";
import logo from "../assets/logo.svg";

import SearchBar from "./Searchbar.jsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img className={styles.logo} src={logo} alt="Story Time Logo" />
        <div className={styles.navigation}>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">making-of</a>
        </div>
        {/* <SearchBar/> */}
      </div>
      <div className={styles.couldsBackground} />
    </header>
  );
};

export default Header;
