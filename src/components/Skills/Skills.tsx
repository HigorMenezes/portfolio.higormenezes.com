import Link from "next/link";

import styles from "./styles.module.scss";

import TechIcons from "../TechIcons";
import Grade from "../Grade";

import mainSkills from "../../../api/skills/mainSkills";

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
        {mainSkills.map((skill) => (
          <section key={skill.id} className={styles.skill}>
            <h3 className={styles.skillName}>{skill.name}</h3>
            <TechIcons techIconName={skill.icon} size={120} />
            <Grade grande={skill.grade} />
          </section>
        ))}
      </div>
    </section>
  );
}

export default Skills;
