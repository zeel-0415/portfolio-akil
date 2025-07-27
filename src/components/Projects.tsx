'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import styles from "./Projects.module.css";

// Define the interface for ProjectCard props
interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  github: string;
  demo: string;
}

const projects = [
  {
    title: 'CodeVisor',
    description: 'AI-powered code optimizer for JS, Python, and Java.',
    tech: 'React, Flask, OpenAI',
    github: 'https://github.com/akilpathan/CodeVisor',
    demo: '#',
  },
  {
    title: 'DevHireX',
    description: 'A job board platform with smart filtering.',
    tech: 'MERN Stack',
    github: 'https://github.com/akilpathan/DevHireX',
    demo: '#',
  },
  {
    title: 'Final Round AI Clone',
    description: 'AI Interview Assistant mimicking HR final rounds.',
    tech: 'Next.js, TypeScript, OpenAI',
    github: 'https://github.com/akilpathan/final-round-ai',
    demo: '#',
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, github, demo }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={styles.projectCard}
    whileTap={{ scale: 0.98 }}
  >
    <div className={styles.cardContent}>
      <div className={styles.cardHeader}>
        <FaCode className={styles.icon} />
        <h3 className={styles.projectTitle}>{title}</h3>
      </div>
      <p className={styles.projectDescription}>{description}</p>
      <p className={styles.projectTech}>{tech}</p>
    </div>
    <div className={styles.cardLinks}>
      <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <FaGithub size={20} /> GitHub
      </a>
      <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link} aria-disabled={demo === '#'}>
        <FaExternalLinkAlt size={20} /> Demo
      </a>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;