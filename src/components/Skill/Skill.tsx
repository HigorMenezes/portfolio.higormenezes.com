import Grade from "../Grade";

import styles from "./styles.module.scss";

interface SkillProps {
  name: string;
  image: {
    src: string;
    alt: string;
  };
  grade: number;
}

function Skill({ name, image, grade }: SkillProps): JSX.Element {
  return (
    <section className={styles.root}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.imageContainer}>
        <img
          title={name}
          className={styles.image}
          src={image.src}
          alt={image.alt}
        />
      </div>
      <Grade grande={grade} />
    </section>
  );
}

export default Skill;
