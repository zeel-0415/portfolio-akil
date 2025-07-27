import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const About: React.FC = () => {
  const listItems: string[] = [
    "BSc in Computer Science (Bhavans College, 2025)",
    "Web Developer Intern at Marqetrix",
    "Full Stack Developer at Unified Mentor",
    "Open to remote & international opportunities 🌍",
  ];

  return (
    <section id="about" className={styles.about} aria-label="About Akil Pathan">
      <div className={styles.content}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.04, rotate: 1 }}
        >
          <div className={styles.hexagon}>
            <img
              src="/akil-avatar.jpg"
              alt="Akil Pathan"
              className={styles.image}
            />
            <div className={styles.glowOverlay} />
          </div>
        </motion.div>

        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi! I'm <span className={styles.highlight}>Akil Pathan</span>, a
            passionate Full Stack Developer from Mumbai, skilled in{" "}
            <span className={styles.tech}>MEAN</span>,{" "}
            <span className={styles.tech}>MERN</span>, and{" "}
            <span className={styles.tech}>AI/ML</span>. I build fast, scalable,
            and interactive websites and apps. I'm also the creator of{" "}
            <span className={styles.project}>CodeVisor</span>, an AI-powered code
            optimizer.
          </motion.p>
          <ul className={styles.list} role="list">
            {listItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;