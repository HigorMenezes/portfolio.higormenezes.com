import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "./styles.module.scss";

function Contact(): JSX.Element {
  return (
    <div className={styles.root}>
      <a
        className={styles.contactAnchor}
        href="https://github.com/HigorMenezes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
        <span>GitHub</span>
      </a>
      <a
        className={styles.contactAnchor}
        href="https://www.linkedin.com/in/higor-aparecido-menezes-95ab4a182/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
        <span>LinkedIn</span>
      </a>
    </div>
  );
}

export default Contact;
