import { useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import Styles from "../styles/components/Tile.module.css"
import { style } from "framer-motion/m";

import img from "../assets/dummy.jpeg"

function Tile({title, creator, url, image}) {
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

    return (
        <div className={Styles.tile} onClick={() => window.location.href = url}>
            <img src={img} alt="" />
            <div>
                <div className={Styles.content}>
                    <p className={Styles.title}>{title}</p>
                    <p>{creator}</p>
                </div>
            </div>
        </div>
    );
}

export default Tile