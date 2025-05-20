import { motion, useInView, useScroll, useTransform } from "framer-motion";
import * as React from "react";

function PullUpWords({ text, size = 16 }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  const splitText = text.split(" ");

  return (
    <div ref={ref} className="flex justify-center">
      {splitText.map((word, index) => (
        <motion.span
          key={index}
          style={{ fontSize: size }}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5 + 0.15 * index,
          }}
        >
          {word == "" ? " " : word}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default PullUpWords;
