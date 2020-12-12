import Navigation from "../Navigation";

import styles from "./styles.module.scss";

function Header(): JSX.Element {
  return (
    <header className={styles.root}>
      <div className={styles.content}>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
