import Greeting from "./Greeting";
import Contact from "./Contact";
import CoverLetter from "./CoverLetter";

import styles from "./styles.module.scss";

function Introduction(): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.greetingContainer}>
        <Greeting />
        <Contact />
      </div>
      <div>
        <CoverLetter />
      </div>
    </div>
  );
}

export default Introduction;
