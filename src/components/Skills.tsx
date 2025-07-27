// components/Skills.tsx
import React from 'react';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import {
  SiJavascript, SiPython, SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiCplusplus, SiPhp, SiHtml5, SiCss3, SiTailwindcss, SiExpress,
  SiMysql, SiSqlite, SiPostman, SiGit, SiTensorflow, SiScikitlearn, SiDjango, SiFlask
} from 'react-icons/si';

const skillData = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'SQLite', icon: <SiSqlite /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'Git', icon: <SiGit /> },

  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'PHP', icon: <SiPhp /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'TensorFlow', icon: <SiTensorflow /> },
  { name: 'scikit-learn', icon: <SiScikitlearn /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'Flask', icon: <SiFlask /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skillData.map((skill, index) => (
          <motion.div
            className={styles.skillItem}
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.15 }}
          >
            <div className={styles.icon}>{skill.icon}</div>
            <p className={styles.skillName}>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
