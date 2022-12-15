import PageLayout from "./layouts/PageLayout";
import styles from "./App.module.css";

import WorkImage from "./assets/work.png";
import HumanImage from "./assets/human-code.png";
import ContactImage from "./assets/paper.png";

function App() {
  return (
    <PageLayout>
      <section id={styles["my-name"]}>
        <div className={styles.container}>
          <h1>John Carlo</h1>
          <p>- - -</p>
          <p>Web Developer</p>
        </div>
      </section>

      <section id={styles["works"]}>
        <div className={styles.container}>
          <img src={WorkImage} className={styles["work-img"]} />
          <h2>PROJECTS</h2>
        </div>
      </section>

      <section id={styles["about"]}>
        <div className={styles.container}>
          <img src={HumanImage} className={styles["human-img"]} />
          <h2>ABOUT ME</h2>

          <div className={styles.description}>
            <div className={styles.intro}>
              <h3>Hello, I'm John Carlo.</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, eligendi
                veritatis! Obcaecati excepturi recusandae porro fuga dolorum quaerat beatae
                explicabo repudiandae quibusdam? Cupiditate minima maiores deleniti, maxime fugit
                magnam voluptatum.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga dolor accusamus
                nostrum, ipsam ipsum deserunt excepturi, vero laboriosam repellendus molestias
                similique sapiente? Alias itaque harum adipisci vero officia quo doloribus?
              </p>
            </div>
            <div className={styles.skills}>
              <h3>TL;DR</h3>

              <ul>
                <li>TEST 1</li>
                <li>TEST 1</li>
                <li>TEST 1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id={styles["contact"]}>
        <div className={styles.container}>
          <img src={ContactImage} className={styles["contact-img"]} />
          <h2>CONTACT</h2>
          <p>Let's Connect</p>

          <form className={styles["contact-form"]}>
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
