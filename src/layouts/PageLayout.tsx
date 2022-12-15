import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

import styles from "./PageLayout.module.css";

type Props = {
  children: React.ReactNode;
};

const PageLayout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <div className={styles["page-layout"]}>
        <NavBar />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PageLayout;
