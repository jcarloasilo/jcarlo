import React from "react";

import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["main-footer"]}>
      <a href="https://github.com/pasokoner">
        <FaGithubSquare className={styles.icon} />
      </a>

      <a href="https://www.linkedin.com/in/john-carlo-asilo-679047204/">
        <FaLinkedin className={styles.icon} />
      </a>

      <a href="https://www.facebook.com/parfum098/">
        <FaFacebookSquare className={styles.icon} />
      </a>
    </footer>
  );
};

export default Footer;
