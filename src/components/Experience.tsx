import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experience} aria-label="Akil's Experience">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.cardContainer}
      >
        <h2 className={styles.title}>Experience</h2>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <h3 className={styles.cardTitle}>Web Developer @ Marqetrix</h3>
            <p className={styles.cardDate}>Jan 2025 – Jun 2025</p>
            <ul className={styles.cardList} role="list">
              <li>Built dashboards and admin panels using MERN stack</li>
              <li>Integrated APIs and third-party analytics tools</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <h3 className={styles.cardTitle}>Full Stack Intern @ Unified</h3>
            <p className={styles.cardDate}>Jul 2025 – Sep 2025</p>
            <ul className={styles.cardList} role="list">
              <li>Working on scalable front-end with modern tech like React & TypeScript</li>
              <li>Collaborating on internal tooling and performance optimizations</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;