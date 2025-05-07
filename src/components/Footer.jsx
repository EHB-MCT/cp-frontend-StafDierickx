import * as React from "react";

import styles from "../styles/Footer.module.css";
import logo from "../assets/logo.svg";

import SearchBar from "./Searchbar.jsx";

const Footer = () => {
  const scrollToFooter = () => {
    
  }

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.couldsBackground} />
      <div className={styles.content}>
        <img className={styles.logo} src={logo} alt="Story Time Logo" />
        <div>
          <h2>About</h2>
          <p>Deze website is een portaalsite van een verzameling van sprookjesverhalen, vertelt in de vorm van een interactieve parallax website. Elk sprookje heeft zijn eigen website waarin het sprookje verteld wordt terwijl je scrollt.

            Elke sprookjessite is gemaakt door een student aan de Erasmushogeschool Brussel in het academiejaar 2024-2025, voor het vak Front-End.</p>
        </div>
        <div className={styles.navigation}>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
        </div>
        {/* <SearchBar/> */}
      </div>
    </footer>
  );
};

export default Footer;
