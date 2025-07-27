import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <motion.h1
          className={styles.logo}
          whileHover={{ scale: 1.1, textShadow: "0px 0px 8px cyan" }}
        >
          Akil.<span className={styles.dot}>Dev</span>
        </motion.h1>

        <div className={styles.navGroup}>
          <AnimatePresence>
            <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
              {links.map((link, i) => (
                <motion.li
                  key={link}
                  className={styles.navItem}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.08 }}
                >
                  <Link
                    to={link}
                    smooth
                    duration={600}
                    offset={-70}
                    spy={true}
                    className={styles.link}
                    activeClass={styles.active}
                  >
                    {"</" + link + ">"}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </AnimatePresence>

          <motion.button
            className={styles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className={styles.menuIcon}
              fill="none"
              stroke="cyan"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4 }}
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
