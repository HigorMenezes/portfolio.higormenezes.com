import LinkItem from "../LinkItem";

import styles from "./styles.module.scss";

function Navigation(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <LinkItem href="/">Home</LinkItem>
        </li>
        <li>
          <LinkItem href="/skills">Skills</LinkItem>
        </li>
        <li>
          <LinkItem href="/projects">Projects</LinkItem>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
