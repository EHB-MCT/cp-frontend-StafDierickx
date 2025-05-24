import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Paralax = ({children, offset}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
        <motion.div
            ref={ref}
            style={{
                y,
                position:"absolute",
            }}
        >
            {children}
        </motion.div>
    );
}