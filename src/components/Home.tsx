// src/components/Home/Home.tsx

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import coderAnimation from "../assets/coder.json"; // path to your coder.json
import styles from "./Home.module.css";

const techIcons = [
  { name: "js", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "react", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "node", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "python", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "typescript", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "mongodb", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

const Home: React.FC = () => {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.contentWrapper}>
        {/* Left */}
        <div className={styles.leftContent}>
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hey, I'm <span className={styles.nameHighlight}>Akil Pathan</span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer 🚀",
              1500,
              "MEAN | MERN | AI ⚙️",
              1500,
              "Open to Remote 🌍",
              1500,
            ]}
            wrapper="span"
            speed={40}
            className={styles.typewriter}
            repeat={Infinity}
          />

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I specialize in building full-stack apps using modern technologies like React.js,
            Node.js, and AI/ML integrations. Let’s create something amazing together!
          </motion.p>

          {/* Buttons */}
          <div className={styles.buttons}>
            <motion.a
              href="/Akil__Resume (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Preview Resume
              <span className={styles.buttonGlow}></span>
            </motion.a>

            <motion.a
              href="/Akil__Resume (1).pdf"
              className={styles.secondaryButton}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
              <span className={styles.buttonGlow}></span>
            </motion.a>
          </div>

          {/* Tech Icons */}
          <div className={styles.techStack}>
            {techIcons.map((icon, index) => (
              <motion.div
                key={icon.name}
                className={styles.techIcon}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <img
                  src={icon.svg}
                  alt={`${icon.name} icon`}
                  className={styles.iconImage}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Lottie */}
        <div className={styles.rightContent}>
          <Lottie animationData={coderAnimation} loop className={styles.lottieAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Home;
