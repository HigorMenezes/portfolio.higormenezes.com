import Link from "next/link";

import styles from "./styles.module.scss";

import Skill from "../Skill";

import mainSkills from "../../../api/skills/mainSkills";

function MainSkills(): JSX.Element {
  return (
    <section>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Main Skills</h2>
        <Link href="/skills">
          <a className={styles.viewAllSkills}>view all skills</a>
        </Link>
      </div>

      <div className={styles.content}>
        {mainSkills.map((skill) => (
          <Skill
            key={skill.id}
            name={skill.name}
            icon={skill.icon}
            grade={skill.grade}
          />
        ))}
      </div>
    </section>
  );
}

export default MainSkills;
