import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <header>
      <nav className={styles[`main-nav`]}>
        {matches && <h2 className={styles.name}>JCARLO</h2>}

        <ul className={styles.links}>
          <li>
            <a href="#works">WORK</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
