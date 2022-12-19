import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

import styles from "./PageLayout.module.css";

type Props = {
  children: React.ReactNode;
  myNameScroll: () => void;
  worksScroll: () => void;
  aboutScroll: () => void;
  contactScroll: () => void;
};

const PageLayout = (props: Props) => {
  const { children, myNameScroll, worksScroll, aboutScroll, contactScroll } = props;

  return (
    <>
      <div className={styles["page-layout"]}>
        <NavBar
          myNameScroll={myNameScroll}
          worksScroll={worksScroll}
          aboutScroll={aboutScroll}
          contactScroll={contactScroll}
        />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
