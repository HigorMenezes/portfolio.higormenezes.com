import styles from "./styles.module.scss";

interface MainProps {
  children: JSX.Element | JSX.Element[];
}

function Main({ children }: MainProps): JSX.Element {
  return (
    <main className={styles.root}>
      <div className={styles.content}>{children}</div>
    </main>
  );
}

export default Main;
