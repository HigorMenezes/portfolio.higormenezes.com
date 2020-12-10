import styles from "./styles.module.scss";

interface MainProps {
  children: JSX.Element | JSX.Element[];
}

function Main({ children }: MainProps): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>{children}</div>
    </main>
  );
}

export default Main;
