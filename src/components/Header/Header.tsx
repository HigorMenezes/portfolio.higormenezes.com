import Navigation from "../Navigation";

import styles from "./styles.module.scss";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
