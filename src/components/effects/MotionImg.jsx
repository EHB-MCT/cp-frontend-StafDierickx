import * as React from "react";
import { motion, useInView } from "framer-motion";

// this component exists to separete the concern of the isInView logic.
// This way I don't have to clutter and mentally manage a bunch of them for each elemen in Story.jsx

function MotionImg({ src, className, initial, animate, exit, transition }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  if (!transition)
    transition = {duration: 0.5, delay: 0.5}
  return (
    <motion.img
      src={src}
      ref={ref}
      className={className}
      initial={initial}
      animate= { isInView ? animate : {}}
      exit={exit}
      transition={transition}
    />
  );
}

export default MotionImg;
