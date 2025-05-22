import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/components/Spotlight.module.css";

const Spotlight = ({src}) => {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!isFocused) return;

    const div = ref.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleMouseEnter = () => {
    setIsFocused(true);
  };
  const handleMouseLeave = () => {
    setIsFocused(false);
  };

  return (
    <>
      <motion.div
        ref={ref}
        className={styles.divEffect} //"relative w-full h-32 overflow-hidden rounded-lg bg-black"
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* masked text with spotlight effect */}
          <motion.div
            className="text-center"
            style={{
              maskImage: !isFocused ? 'none' : `radial-gradient(circle 400px at ${position.x}px ${position.y}px, white 0%, transparent 100%)`,
            }}
          >
            <img src={src} alt="Image" />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Spotlight;
