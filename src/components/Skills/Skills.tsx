import skillsByCategory from "../../../api/skills/skillsByCategory";

import Skill from "../Skill";

import styles from "./styles.module.scss";

function Skills(): JSX.Element {
  return (
    <div>
      {Object.entries(skillsByCategory).map(([key, value]) => (
        <section key={key}>
          <h3 className={styles.categoryTitle}>{key}</h3>
          <div className={styles.skillsByCategoryContent}>
            {value.map((skill) => (
              <Skill
                key={skill.id}
                name={skill.name}
                image={skill.image}
                grade={skill.grade}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Skills;
