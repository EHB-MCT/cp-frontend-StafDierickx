import { useState, useRef } from "react";
import { StrictMode } from "react";
import {
  motion,
  transform,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import "@/styles/components/Story.css";

import PullUpWords from "./effects/PullUpWords";
import PullUpText from "./effects/PullUpText";
import Spotlight from "./effects/Spotlight";

// function TitleAnimation({ text = "Hello World" }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

//   return (
//     <div className="relative h-full w-full overflow-hidden">
//       <motion.h2
//         ref={ref}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         style={{ y }}
//         className="absolute left-0"
//       >
//         {text}
//       </motion.h2>
//     </div>
//   );
// }

import oil_lamp from "@/assets/story/oil_lamp.png";
import aladin from "@/assets/story/aladin.png";
import aladinHold from "@/assets/story/aladinHold.png";
import wizard from "@/assets/story/wizard.png";
import quest from "@/assets/story/quest.png";

import bg1 from "@/assets/story/backgrounds/bg1.png";
import bg2 from "@/assets/story/backgrounds/bg2.png";
import bg3 from "@/assets/story/backgrounds/bg3.png";
import bg4 from "@/assets/story/backgrounds/bg4.png";
import bg5 from "@/assets/story/backgrounds/bg5.png";
import bg6 from "@/assets/story/backgrounds/bg6.png";
// import bg7 from "./assets/story/backgrounds/bg7.png";

const transition = {
  duration: 0.5,
  delay: 0.5,
};

import { div } from "motion/react-m";
import { img } from "motion/react-client";
import MotionImg from "./effects/MotionImg";

function Story() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="story">
      <section>
        <div className="title-section">
          <Spotlight src={oil_lamp} />
          <div className="text">
            <h1>Aladdin and the Wonderful Oil Lamp</h1>
          </div>
        </div>
      </section>
      <section className="img-container">
        <div className="img-wrapper panel1">
          <img src={bg1} alt="" />
          <div className="text">
            <PullUpWords text="A strange encounter." size={44} />
            <PullUpText text="Alladin met a strange sorcerer." />
          </div>
          <img className="aladin" src={aladin} />
          {/* <img
            className="wizard"
            src={wizard}
          /> */}
          <MotionImg
            src={wizard}
            className={"wizard"}
            initial={{
              transform: "translate(-300%, -20%)",
              opacity: 0,
            }}
            animate={{
              transform: "translate(-110%, -20%)",
              opacity: 1,
            }}
            transition={{
              duration: 4,
            }}
          />
          <MotionImg
            src={quest}
            className={"quest"}
            initial={{
              transform: "translate(-75%, -100%)",
              opacity: 0,
            }}
            animate={{
              transform: "translate(-60%, -150%)",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 4
            }}
          />
        </div>
      </section>
      <section className="img-container">
        <div className="img-wrapper panel2">
          <img src={bg2} alt="" />
          <div className="text">
            <PullUpWords text="The oil lamp." size={44} />
            <PullUpText text="Alladin met a strange sorcerer." />
          </div>
          <img className="lamp" src={oil_lamp} />
          <img className="aladin" src={aladin} />
        </div>
      </section>
      <section className="img-container">
        <div className="img-wrapper panel3">
          <img src={bg3} alt="" />
          <div className="text">
            <PullUpWords text="The genie is out." size={44} />
            <PullUpText text="Alladin met a strange sorcerer." />
          </div>
          <img className="aladin" src={aladinHold} />
          <img className="lamp" src={oil_lamp} alt="" />
        </div>
      </section>
      <section className="img-container">
        <div className="img-wrapper">
          <img src={bg4} alt="" />
          <div className="text">
            <PullUpWords text="A beautiful princess." size={44} />
            <PullUpText text="Alladin met a strange sorcerer." />
          </div>
        </div>
      </section>
      <section className="img-container">
        <div className="img-wrapper">
          <img src={bg5} alt="" />
          <div className="text">
            <PullUpWords text="A fierce battle." size={44} />
            <PullUpText text="Alladin met a strange sorcerer." />
          </div>
        </div>
      </section>
      <section className="img-container">
        <div className="img-wrapper">
          <img src={bg6} alt="" />
          <div className="text">
            <PullUpWords text="A happy ending." size={44} />
            <PullUpText text="Alladin met a strange sorcerer." />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Story;
