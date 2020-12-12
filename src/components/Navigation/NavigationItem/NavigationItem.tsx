import { useMemo } from "react";
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
  const className = useMemo(() => {
    if (active) {
      return `${styles.root} ${styles.active}`;
    }

    return styles.root;
  }, [active]);

  return (
    <Link {...rest}>
      <a className={className}>{children}</a>
    </Link>
  );
}

export default NavigationItem;
