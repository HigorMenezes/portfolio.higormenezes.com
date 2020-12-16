import { Icon } from "../../../api/skills/skills";

import Grade from "../Grade";
import TechIcon from "../TechIcon";

import styles from "./styles.module.scss";

interface SkillProps {
  name: string;
  icon: Icon;
  grade: number;
}

function Skill({ name, icon, grade }: SkillProps): JSX.Element {
  return (
    <section className={styles.root}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.imageContainer}>
        <TechIcon title={name} icon={icon} size={90} />
      </div>
      <Grade grande={grade} />
    </section>
  );
}

export default Skill;
