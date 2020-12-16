import Link from "next/link";

import ProjectCard from "../ProjectCard";

import styles from "./styles.module.scss";

function RecentProjects(): JSX.Element {
  return (
    <section>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Recent Projects</h2>
        <Link href="/projects">
          <a className={styles.viewAllProjects}>view all projects</a>
        </Link>
      </div>
      <div>
        <ProjectCard />
      </div>
    </section>
  );
}

export default RecentProjects;
