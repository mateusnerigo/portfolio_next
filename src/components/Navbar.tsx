import { useState, useEffect } from 'react';

import styles from '../styles/components/Navbar.module.css';

export function Navbar() {
  const [navbarContainerToggle, setNavbarContainerToggle] = useState(`${styles.navbarContainer}`);
  const [navbarToggle, setNavbarToggle] = useState(`${styles.navbar}`);

  function handleScroll() {
    const offset = window.scrollY;

    if (offset > 1) {
      setNavbarContainerToggle(`${styles.navbarContainer} ${styles.fixed}`)
      setNavbarToggle(`${styles.navbar} ${styles.fixed}`)
    }
    else {
      setNavbarContainerToggle(`${styles.navbarContainer}`)
      setNavbarToggle(`${styles.navbar}`)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  return (
    <div className={ navbarContainerToggle }>
      <div className={ navbarToggle }>
        <div className={ styles.logo }>
          <a href="#">
            <span className={ styles.name }>MATEUS NERI</span>
            <span className={ styles.function }>web developer</span>
          </a>
        </div>

        <nav>
          <a href="#home">
            Home
            <div className={ styles.underline }></div>
          </a>

          <a href="#about">
            About
            <div className={ styles.underline }></div>
          </a>

          <a href="#portfolio">
            Portfolio
            <div className={ styles.underline }></div>
          </a>

          <a href="#experiments">
            Experiments
            <div className={ styles.underline }></div>
          </a>

          <a href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
