import { motion, useInView, useScroll, useTransform } from "framer-motion";
import * as React from "react";

function PullUpText({ text, size = 16 }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.p
      style={{ fontSize: size }}
      ref={ref}
      initial={{ y: 15, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 15, opacity: 0 }}
      exit={{ y: -15, opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
    >
      {text}
    </motion.p>
  );
}

export default PullUpText;
