import { Icon } from "../../../api/skills/skills";

import styles from "./styles.module.scss";

const iconRootPath = "/icons/tech";

interface TechIconProps {
  title: string;
  icon: Icon;
  size?: number;
}

function TechIcon({ title, icon, size }: TechIconProps): JSX.Element {
  return (
    <img
      style={{ maxWidth: size, maxHeight: size }}
      title={title}
      src={`${iconRootPath}/${icon}.svg`}
      alt={`${title} Logo`}
    />
  );
}

TechIcon.defaultProps = {
  size: 40,
};

export default TechIcon;
