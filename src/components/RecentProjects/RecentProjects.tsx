import Link from "next/link";

import recentProjects from "../../../api/projects/recentProjects";

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
        {recentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default RecentProjects;
