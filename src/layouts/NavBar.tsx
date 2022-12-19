import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

import styles from "./NavBar.module.css";

type Props = {
  myNameScroll: () => void;
  worksScroll: () => void;
  aboutScroll: () => void;
  contactScroll: () => void;
};

const NavBar = (props: Props) => {
  const { myNameScroll, worksScroll, aboutScroll, contactScroll } = props;

  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <header>
      <nav className={styles[`main-nav`]}>
        {matches && (
          <h2 className={styles.name} onClick={myNameScroll}>
            JCARLO
          </h2>
        )}

        <ul className={styles.links}>
          <li onClick={worksScroll}>
            <a href="#works">WORK</a>
          </li>
          <li onClick={aboutScroll}>
            <a href="#about">ABOUT</a>
          </li>
          <li onClick={contactScroll}>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
