import styles from "./styles.module.scss";

function ProjectCard(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className={styles.about}>
        <div>
          <h3 className={styles.title}>Rich Text Editor</h3>
          <p className={styles.description}>
            A front-end project to edit text.
          </p>
        </div>
        <div className={styles.techs}>
          <img
            className={styles.techImage}
            title="React"
            src="/icons/tech/reactjs.svg"
            alt="ReactJS Logo"
          />
        </div>
      </div>
      <img
        className={styles.projectImage}
        title="Rich Text Editor"
        src="/projects/rich-text-editor/1.png"
        alt="Rich Text Editor Interface"
      />
    </section>
  );
}

export default ProjectCard;
