import styles from "./styles.module.scss";

function ProjectCard(): JSX.Element {
  return (
    <section className={styles.root}>
      <h3 className={styles.title}>Rich Text Editor</h3>
      <img
        className={styles.projectImage}
        title="Rich Text Editor"
        src="/projects/rich-text-editor/1.png"
        alt="Rich Text Editor Interface"
      />
      <p className={styles.description}>A front-end project to edit text.</p>
      <div className={styles.techs}>
        <img
          className={styles.techImage}
          title="React"
          src="/icons/tech/reactjs.svg"
          alt="ReactJS Logo"
        />
      </div>
    </section>
  );
}

export default ProjectCard;
