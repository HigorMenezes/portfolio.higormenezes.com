import Link from "next/link";

import styles from "./styles.module.scss";

import TechIcons from "../TechIcons";
import Grade from "../Grade";

function Skills(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Main Skills</h2>
        <Link href="/skills">
          <a className={styles.viewAllSkills}>view all skills</a>
        </Link>
      </div>

      <div className={styles.content}>
        <section className={styles.skill}>
          <h3 className={styles.skillName}>Html5</h3>
          <TechIcons techIconName="Html5Icon" size={120} />
          <Grade grande={5} />
        </section>
        <section className={styles.skill}>
          <h3 className={styles.skillName}>Css3</h3>
          <TechIcons techIconName="Css3Icon" size={120} />
          <Grade grande={5} />
        </section>
        <section className={styles.skill}>
          <h3 className={styles.skillName}>Javascript</h3>
          <TechIcons techIconName="JavascriptIcon" size={120} />
          <Grade grande={5} />
        </section>
        <section className={styles.skill}>
          <h3 className={styles.skillName}>ReactJS</h3>
          <TechIcons techIconName="ReactJSIcon" size={120} />
          <Grade grande={5} />
        </section>
        <section className={styles.skill}>
          <h3 className={styles.skillName}>NodeJS</h3>
          <TechIcons techIconName="NodeIcon" size={120} />
          <Grade grande={5} />
        </section>
      </div>
    </section>
  );
}

export default Skills;
