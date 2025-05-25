import { StrictMode } from "react";
import {
  useScroll,
  useSpring,
} from "framer-motion";
import "@/styles/components/Story.css";

import { motion } from "framer-motion";

import PullUpWords from "./effects/PullUpWords";
import PullUpText from "./effects/PullUpText";
import Spotlight from "./effects/Spotlight";
import ScrollFade from "./effects/ScrollFade"
import Paralax from "./effects/Paralax";

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
import aladinFancy from "@/assets/story/aladinFancy.png";
import princess from "@/assets/story/princess.png";
import wizard from "@/assets/story/wizard.png";
import wizardHalf from "@/assets/story/wizard-half.png";
import quest from "@/assets/story/quest.png";

import bg1 from "@/assets/story/backgrounds/bg1.png";
import bg2 from "@/assets/story/backgrounds/bg2.png";
import bg3 from "@/assets/story/backgrounds/bg3.png";
import bg4 from "@/assets/story/backgrounds/bg4.png";
import bg4_overlay from "@/assets/story/backgrounds/bg4_overlay.png";
import bg5 from "@/assets/story/backgrounds/bg5.png";
import desertSky from "@/assets/story/backgrounds/desert0.png";
import desertBg from "@/assets/story/backgrounds/desert1.png";
import desertSun from "@/assets/story/backgrounds/desert2.png";
import desertHill from "@/assets/story/backgrounds/desert3.png";

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
      <br />
      <section className="img-container">
        <ScrollFade>
        <div className="img-wrapper panel1">
          <img src={bg1} alt="" />
          <div className="text">
            <PullUpWords text="A strange encounter." size={44} />
            <PullUpText text="- Aladin met a strange sorcerer. He had a special job for him." />
            <PullUpText text="- The job was simple, go get an old dusty oil lamp from a cave full of riches!" />
            <PullUpText text="- There where only a few requirements: Bring the oil lamp and don't touch anything else." />
          </div>
          <img className="aladin" src={aladin} />
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
        </ScrollFade>
      </section>
      <section className="img-container">
        <ScrollFade>
        <div className="img-wrapper panel2">
          <img src={bg2} alt="" />
          <div className="text">
            <PullUpWords text="The oil lamp." size={44} />
            <PullUpText text="Aladin accepted and ventured into the cave." />
            <PullUpText text="The cave was full of gold and jewelry, temptation was big to just take some for himself." />
            <PullUpText text="He remembered what the sorcerer said, and soon found the oil lamp." />
            
          </div>
          <img className="lamp" src={oil_lamp} />
          {/* <img className="aladin" src={aladin} /> */}
          <MotionImg
            src={aladin}
            className={"aladin"}
            initial={{
              transform: "scalex(-1) translate(150%, 20%)",
            }}
            animate={{
              transform: "scalex(-1) translate(50%, -40%)",

            }}
            transition={{
              duration: 4,
            }}
          />
        </div>
        </ScrollFade>
      </section>
      <section className="img-container">
        <ScrollFade>
        <div className="img-wrapper panel3">
          <img src={bg3} alt="" />
          <div className="text">
            <PullUpWords text="The genie is out." size={44} />
            <PullUpText text="The cave was dark. Aladin could use some more light" />
            <PullUpText text="He found the oil lamp and wanted to use it to light his path." />
            <PullUpText text="The oil lamp was dusty, so he first tried cleaning it... But something magical happened." />
            <PullUpText text="A genie came out of the lamp, granting him 3 wishes!" />
          </div>
          <img className="aladin" src={aladinHold} />
          <MotionImg 
            // for some reason there's an opacity bug
            src={oil_lamp} 
            className={"lamp"}
            animate={{
              x: [0, 50, 0, 50, 0, -20, 0, 0, 0],
              y: [100, -10, 50, -50, 0, -5, 15, 5, 100],
            }} 
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        </ScrollFade>
      </section>
      <section className="img-container">
        <ScrollFade>
        <div className="img-wrapper panel4">
          <img src={bg4} alt="" />
          <MotionImg 
            className="princess" 
            src={princess}
            initial={{
              x: "-50%",
              y: "-130%"
              // rotate: 0
            }}
            animate={{
              rotate: [0, 10,-10, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <img className="img-overlay" src={bg4_overlay} alt="" />
          <div className="text">
            <PullUpWords text="A beautiful princess." size={44} />
            <PullUpText text="The genie has limitaitons and can't make love, but can help in other ways." />
            <PullUpText text="Aladin uses a wish to try to impress a princess." />
            <PullUpText text="The princess is amused." />
          </div>
          <MotionImg 
            className="aladin" 
            src={aladinFancy}
            animate={{
              x: [-300, -100, -150, -200, -250, -300,],
              y: [0, -20, 0, -20, 0, -20, 0, -20, 0, -20, 0],
            }} 
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        </ScrollFade>
      </section>
      <section className="img-container">
        <ScrollFade>
        <div className="img-wrapper panel5">
          <img src={bg5} alt="" />
          <div className="text">
            <PullUpWords text="A fierce battle." size={44} />
            <PullUpText text="The sorcerer was furious. Aladin kept the lamp to himself." />
            <PullUpText text="He used his powerful magic to try and get the oil lamp back!" />
            <PullUpText text="Aladin put up a great fight and wasn't going to give the lamp back." />
          </div>
          <MotionImg 
            className="aladin" 
            src={aladin}
            initial={{
              x: "50%",
              y: "-20%"
            }}
            animate={{
              x:[10, -10, 10],
              y:[0, -10, 0, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <MotionImg 
            className="wizard" 
            src={wizard}
            initial={{
              x: "-150%",
              y: "-10%",
              opacity: 1,
              boxShadow: "0 0 40px 0px #ffffff"
            }}
            animate={{
              opacity: [1, 0.5, 1],
              boxShadow: [
                "0 0 40px 0px #ffffff",
                "0 0 0px 0px #ffffff",
                "0 0 40px 0px #ffffff"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

        </div>
        </ScrollFade>
      </section>
      <section className="img-container">
        <ScrollFade>
        <div className="img-wrapper panel6">
          <Paralax offset={0}>
            <img src={desertSky} />
          </Paralax>
          <Paralax offset={-200} zIndex={0}>
            <img src={desertSun} alt="" />
          </Paralax>
          <img src={desertBg} alt="" />
          <Paralax offset={-150}>
            <img src={desertHill} alt="" />
            <img className="oil_lamp" src={oil_lamp} />
            <img className="aladin" src={aladin} />
            <img className="princess" src={princess} />
            <motion.img 
              className="wizard" 
              src={wizardHalf}
              style={{
                x: "-270%",
                y: "80%",
              }}
              animate={{
                rotate: [170, 169, 171, 170],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </Paralax>
          <div className="text">
            <PullUpWords text="A happy ending." size={44} />
            <PullUpText text="Aladin managed to outsmart the sorcerer and won the battle" />
            <PullUpText text="The princess was impressed." />
            <PullUpText text="Aladin used his last wish to release the genie." />
            <PullUpText text="Everyone got what they wanted." />
          </div>
        </div>
        </ScrollFade>
      </section>
    </div>
  );
}

export default Story;
