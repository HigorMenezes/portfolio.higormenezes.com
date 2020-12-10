import { useRouter } from "next/router";

import LinkItem from "../NavigationItem";

import styles from "./styles.module.scss";

function Navigation(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <LinkItem href="/" active={pathname === "/"}>
            Home
          </LinkItem>
        </li>
        <li>
          <LinkItem href="/skills" active={pathname === "/skills"}>
            Skills
          </LinkItem>
        </li>
        <li>
          <LinkItem href="/projects" active={pathname === "/projects"}>
            Projects
          </LinkItem>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
