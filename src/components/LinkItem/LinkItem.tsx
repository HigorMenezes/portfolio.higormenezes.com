import Link, { LinkProps } from "next/link";

import styles from "./styles.module.scss";

interface LinkItemProps extends LinkProps {
  children: JSX.Element | JSX.Element[] | string;
}

function LinkItem({ children, ...rest }: LinkItemProps): JSX.Element {
  return (
    <Link {...rest}>
      <a className={styles.linkItem}>{children}</a>
    </Link>
  );
}

export default LinkItem;
