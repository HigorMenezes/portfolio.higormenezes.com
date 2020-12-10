import Link, { LinkProps } from "next/link";

import styles from "./styles.module.scss";

interface LinkItemProps extends LinkProps {
  active: boolean;
  children: JSX.Element | JSX.Element[] | string;
}

function LinkItem({ active, children, ...rest }: LinkItemProps): JSX.Element {
  const getClassName = () => {
    if (active) {
      return `${styles.linkItem} ${styles.active}`;
    }

    return styles.linkItem;
  };

  return (
    <Link {...rest}>
      <a className={getClassName()}>{children}</a>
    </Link>
  );
}

export default LinkItem;
