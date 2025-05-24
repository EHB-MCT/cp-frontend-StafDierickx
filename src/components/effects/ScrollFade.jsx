import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function ScrollFade({ children }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 0.8]);

    return (
        <motion.div
            ref={ref}
            style={{
                opacity,
                scale
            }}
        >
            { children }
        </motion.div>
    );
}

export default ScrollFade;
