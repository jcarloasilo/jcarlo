import PageLayout from "./layouts/PageLayout";
import styles from "./App.module.css";

import WorkImage from "./assets/work.png";
import HumanImage from "./assets/human-code.png";
import ContactImage from "./assets/paper.png";
import ProjectList from "./components/ProjectList";
import { useRef } from "react";

function App() {
  const myNameRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLFormElement | null>(null);

  const myNameScroll = () => {
    myNameRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const worksScroll = () => {
    worksRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const aboutScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const contactScroll = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageLayout
      myNameScroll={myNameScroll}
      worksScroll={worksScroll}
      aboutScroll={aboutScroll}
      contactScroll={contactScroll}
    >
      <section id={styles["my-name"]}>
        <div className={styles.container} ref={myNameRef}>
          <h1>John Carlo</h1>
          <p>- - -</p>
          <p>Web Developer</p>
        </div>
      </section>

      <section id={styles["works"]}>
        <div className={styles.container} ref={worksRef}>
          <img src={WorkImage} className={styles["work-img"]} />
          <h2>PROJECTS</h2>

          <ProjectList />
        </div>
      </section>

      <section id={styles["about"]}>
        <div className={styles.container} ref={aboutRef}>
          <img src={HumanImage} className={styles["human-img"]} />
          <h2>ABOUT ME</h2>

          <div className={styles.description}>
            <div className={styles.intro}>
              <h3>Hello, I'm John Carlo.</h3>
              <p>
                I am a web developer from Phillipines. My journey to programming started in C that
                eventually got me into Mobile Robotics, I get picked to be a{" "}
                <a href="https://www.tesda.gov.ph/Gallery/Details/10337" target="_blank">
                  competitor
                </a>{" "}
                and work mostly working on embedded system. Now i build websites from small business
                sites to rich interactive websites using my diverse skillsets.
              </p>

              <p>
                If you are someone seeking for a web presence or an employer looking to hire, you
                can get in touch with me{" "}
                <a href="#contact" onClick={contactScroll}>
                  here
                </a>
                .
              </p>
            </div>
            <div className={styles.skills}>
              <h3>TL;DR</h3>

              <div className={styles.skillset}>
                <ul>
                  <li>HTML</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                </ul>

                <ul>
                  <li>Typescript</li>
                  <li>React</li>
                  <li>Prisma</li>
                  <li>MUI5</li>
                  <li>Next.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={styles["contact"]}>
        <div className={styles.container}>
          <img src={ContactImage} className={styles["contact-img"]} />
          <h2>CONTACT</h2>
          <p>Let's Connect</p>

          <form className={styles["contact-form"]} ref={contactRef}>
            <input type="text" required />
            <input type="text" required />
            <textarea className={styles["long-input"]} required />

            <button type="submit">CONNECT</button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}

export default App;
