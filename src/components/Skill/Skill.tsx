import { TechIcon as TechIconType } from "../../../api/skills/skills";

import Grade from "../Grade";
import TechIcon from "../TechIcon";

import styles from "./styles.module.scss";

interface SkillProps {
  name: string;
  techIcon: TechIconType;
  grade: number;
}

function Skill({ name, techIcon, grade }: SkillProps): JSX.Element {
  return (
    <section className={styles.root}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.imageContainer}>
        <TechIcon title={name} icon={techIcon} size={90} />
      </div>
      <Grade grande={grade} />
    </section>
  );
}

export default Skill;
