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
      console.log(offset)
    }
    else { 
      setNavbarContainerToggle(`${styles.navbarContainer}`)
      setNavbarToggle(`${styles.navbar}`)
      console.log(offset)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  return ( 
    <div className={ navbarContainerToggle }>
      <div className={ navbarToggle }>
        <div className={ styles.logo }>
          <a href="#">mateus neri</a>
        </div>

        <nav>
          <a href="#">
            Home 
            <div className={ styles.underline }></div>
          </a>

          <a href="#">
            About 
            <div className={ styles.underline }></div>
          </a>

          <a href="#">
            Portfolio 
            <div className={ styles.underline }></div>
          </a>

          <a href="#">
            Experiences 
            <div className={ styles.underline }></div>
          </a>

          <a href="#">
            Contact 
          </a>
        </nav>
      </div>
    </div>
  );
}