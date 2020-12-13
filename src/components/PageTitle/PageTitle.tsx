import styles from "./styles.module.scss";

interface PageTitleProps {
  children: JSX.Element | JSX.Element[] | string;
}

function PageTitle({ children }: PageTitleProps): JSX.Element {
  return <h2 className={styles.root}>{children}</h2>;
}

export default PageTitle;
