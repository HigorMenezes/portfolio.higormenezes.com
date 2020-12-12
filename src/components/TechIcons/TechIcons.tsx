import { IconBaseProps } from "react-icons";

import Css3Icon from "./Css3Icon";
import Html5Icon from "./Html5Icon";
import JavascriptIcon from "./JavascriptIcon";
import NodeIcon from "./NodeIcon";
import ReactJSIcon from "./ReactJSIcon";

const IconComponents = {
  Css3Icon,
  Html5Icon,
  JavascriptIcon,
  NodeIcon,
  ReactJSIcon,
};

interface TechIconsProps extends IconBaseProps {
  techIconName:
    | "Css3Icon"
    | "Html5Icon"
    | "JavascriptIcon"
    | "NodeIcon"
    | "ReactJSIcon";
}

function TechIcons({ techIconName, ...rest }: TechIconsProps): JSX.Element {
  const IconComponent = IconComponents[techIconName];

  return <IconComponent {...rest} />;
}

export default TechIcons;
