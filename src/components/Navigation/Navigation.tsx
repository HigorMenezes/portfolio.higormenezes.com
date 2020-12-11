import { useRouter } from "next/router";

import NavigationItem from "./NavigationItem";

import styles from "./styles.module.scss";

function Navigation(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavigationItem href="/" active={pathname === "/"}>
            Home
          </NavigationItem>
        </li>
        <li>
          <NavigationItem href="/skills" active={pathname === "/skills"}>
            Skills
          </NavigationItem>
        </li>
        <li>
          <NavigationItem href="/projects" active={pathname === "/projects"}>
            Projects
          </NavigationItem>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
