import PageLayout from "./layouts/PageLayout";
import styles from "./App.module.css";

import WorkImage from "./assets/work.png";
import HumanImage from "./assets/human-code.png";
import ContactImage from "./assets/paper.png";
import ProjectList from "./components/ProjectList";

import MyResume from "./assets/RESUME-ASILO.pdf";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

function App() {
  const myNameRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLFormElement | null>(null);

  const [sent, setSent] = useState(false);

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

  const sendEmail = (e: React.FormEvent<EventTarget | HTMLFormElement>) => {
    e.preventDefault();

    console.log(e.currentTarget);

    emailjs
      .sendForm(
        "service_kwc0sz8",
        "template_n75xdba",
        e.currentTarget as HTMLFormElement,
        "ITMO6gj3jfs0OWuEk"
      )
      .then(
        (result) => {
          console.log(result.text);
          contactRef.current?.reset();
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
                I am a web developer from Phillipines. My journey to programming
                started in C that eventually got me into Mobile Robotics, I get
                picked to be a{" "}
                <a
                  href="https://www.tesda.gov.ph/Gallery/Details/10337"
                  target="_blank"
                >
                  competitor
                </a>{" "}
                and work mostly working on embedded system. Now i build websites
                from small business sites to rich interactive websites using my
                diverse skillsets.
              </p>

              <p>
                If you are someone seeking for a web presence or an employer
                looking to hire, you can get in touch with me{" "}
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
                  <li>Typescript</li>
                  <li>Javascript</li>
                  <li>Golang</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS3</li>
                  <li>SQL</li>
                  <li>Node.js</li>
                  <li>REST</li>
                </ul>

                <ul>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Svelte</li>
                  <li>Sveltekit</li>
                  <li>Prisma</li>
                  <li>Git</li>
                  <li>Git</li>
                  <li>CI/CD</li>
                  <li>tRPC</li>
                </ul>
              </div>

              <a
                className={styles.resume}
                target="_blank"
                href="https://drive.google.com/file/d/1slrMqvYJ1Iwd4Nr9m-JQJIhi0VojoeOO/view?usp=sharing"
              >
                <span>RESUME</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id={styles["contact"]}>
        <div className={styles.container}>
          <img src={ContactImage} className={styles["contact-img"]} />
          <h2>CONTACT</h2>
          <p>Let's Connect ttt</p>

          <form
            className={styles["contact-form"]}
            ref={contactRef}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              required
              placeholder="What's your name?"
              name="from_name"
            />
            <input
              type="email"
              required
              placeholder="Your Email Address"
              name="from_email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <textarea
              className={styles["long-input"]}
              placeholder="Anything you want to say?"
              required
              name="html_message"
            />
            {sent && <h4 className={styles.sent}>Message sent </h4>}
            <button value="Send" type="submit">
              CONNECT
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}

export default App;
