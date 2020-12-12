import TechIcons from "../TechIcons";
import Grade from "../Grade";

import styles from "./styles.module.scss";

interface SkillProps {
  name: string;
  icon:
    | "Css3Icon"
    | "Html5Icon"
    | "JavascriptIcon"
    | "NodeJSIcon"
    | "ReactJSIcon";
  grade: number;
}

function Skill({ name, icon, grade }: SkillProps): JSX.Element {
  return (
    <section className={styles.root}>
      <h3 className={styles.name}>{name}</h3>
      <TechIcons techIconName={icon} size={120} />
      <Grade grande={grade} />
    </section>
  );
}

export default Skill;
