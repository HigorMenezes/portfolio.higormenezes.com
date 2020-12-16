import Link from "next/link";

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
    </section>
  );
}

export default RecentProjects;
