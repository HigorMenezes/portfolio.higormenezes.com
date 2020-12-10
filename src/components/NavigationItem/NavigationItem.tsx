import Link, { LinkProps } from "next/link";

import styles from "./styles.module.scss";

interface NavigationItemProps extends LinkProps {
  active: boolean;
  children: JSX.Element | JSX.Element[] | string;
}

function NavigationItem({
  active,
  children,
  ...rest
}: NavigationItemProps): JSX.Element {
  const getClassName = () => {
    if (active) {
      return `${styles.navigationItem} ${styles.active}`;
    }

    return styles.navigationItem;
  };

  return (
    <Link {...rest}>
      <a className={getClassName()}>{children}</a>
    </Link>
  );
}

export default NavigationItem;
