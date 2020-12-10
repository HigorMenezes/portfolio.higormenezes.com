import styles from "./styles.module.scss";

function Introduction(): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={`${styles.text} ${styles.greetings}`}>Hi,</p>
      <p className={`${styles.text} ${styles.who}`}>I&rsquo;m Higor</p>
      <p className={`${styles.text} ${styles.role}`}>a WEB developer</p>
    </div>
  );
}

export default Introduction;
