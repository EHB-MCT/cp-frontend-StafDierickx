import { useState, useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "react-router";

import styles from "@/styles/components/Header.module.css";
import logo from "@/assets/logo.svg";

import SearchBar from "./Searchbar.jsx";
import { CurrentStoryContext } from "@/context/CurrentStoryContext.jsx";

function Header() {
  const location = useLocation();
  const { currentStory, setCurrentStory} = useContext(CurrentStoryContext)
  const [ bannerExpand, setBannerExpand ] = useState(false);
  const [ makingOfParam, setMakingOfParam] = useState()
  
  // Effect to update banner state based on current route
  useEffect(() => {
    // Set expanded banner for home page, collapsed for others
    const shouldExpandBanner = location.pathname === "/";
    setBannerExpand(shouldExpandBanner);
  }, [location.pathname, setBannerExpand]);

  // based on current story, set url params for making-of page
  useEffect(() => {
    if (currentStory == undefined)
      return
    
    console.log("banner: changing making-of url to id:", currentStory.id)
    const params = new URLSearchParams();
    params.set('storyId', currentStory.id)
    setMakingOfParam(params.toString())

  }, [currentStory])

  const navigationVariants = {
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    collapsed: {
      height: 0,
      // margin:0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" 
      }
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.navigation}>
          <AnimatePresence mode="wait">
            {!bannerExpand && 
              <motion.div
                key="small-logo"
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                variants={navigationVariants}
              >
                <img className={styles.logoSmall} src={logo} alt="Story Time Logo" />
              </motion.div>
            }
          </AnimatePresence>
          <br />
          <div className={styles.navigationLinks}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sprookjes">Sprookjes</NavLink>
            <NavLink to={`/making-of?${makingOfParam}`}>Making-of</NavLink>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {bannerExpand &&
            <motion.div
              key="banner"
              className={styles.banner}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              variants={navigationVariants}
            >
              <div>
                <img className={styles.logoBig} src={logo} alt="Story Time Logo" />
                <p>De sprookjes poortaalsite voor alle interactieve sprookjeservaringen</p>
              </div>
              <SearchBar/>
            </motion.div>
          }
        </AnimatePresence>
      </div>
      <div className={styles.couldsBackground} />
    </header>
  );
}

export default Header;