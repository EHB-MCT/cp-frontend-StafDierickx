import Styles from "@/styles/components/Tile.module.css"
import { style } from "framer-motion/m";

import Tile from "./Tile"

import img from "@/assets/dummy.jpeg"

function TileGrid({data, max = 0}) {
    const animations = {
        fadeIn: {
            height: "auto",
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        fadeout: {
            height: 0,
            // margin:0,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const displayData = max > 0 ? data.slice(0, max) : data;

    return (
        <div className={Styles.tileGrid}>
            {displayData.map((entry, index) => {
                return <Tile key={index} {...entry}/>
            })}
        </div>
    );
}

export default TileGrid