import styles from "./styles.module.scss";

function Greeting(): JSX.Element {
  return (
    <div className={styles.root}>
      <p className={styles.hi}>Hi,</p>
      <p className={styles.who}>I&rsquo;m Higor,</p>
      <p className={styles.role}>a web developer</p>
    </div>
  );
}

export default Greeting;
