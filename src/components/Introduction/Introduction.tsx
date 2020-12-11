import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "./styles.module.scss";

function Introduction(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.greetingContent}>
        <div className={styles.greeting}>
          <p className={styles.hi}>Hi,</p>
          <p className={styles.who}>I&rsquo;m Higor,</p>
          <p className={styles.role}>a web developer</p>
        </div>

        <div className={styles.contact}>
          <a
            className={styles.contactAnchor}
            href="https://github.com/HigorMenezes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>
          <a
            className={styles.contactAnchor}
            href="https://www.linkedin.com/in/higor-aparecido-menezes-95ab4a182/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <div className={`${styles.animationRight} ${styles.aboutContent}`}>
        <p>
          I have been working with web development since 2018, I have a degree
          in computing engineering and I am passionate about <b>Javascript</b>.
        </p>
        <p>
          I have professional experiences with <b>ReactJS</b>, <b>NodeJS</b>,{" "}
          <b>Redux</b>, <b>GraphQL</b>, and other javascript libraries,
          furthermore, <b>I am willing to learn new technologies</b>.
        </p>
        <p>
          Even in my free time, I am still coding and reading something about
          programming, currently, my focus is on <b>Clean Code</b>,{" "}
          <b>Clean Architecture</b>, and <b>Design Patterns</b>.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
