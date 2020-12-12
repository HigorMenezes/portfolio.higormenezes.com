import { IconBaseProps } from "react-icons";

import Css3Icon from "./Css3Icon";
import Html5Icon from "./Html5Icon";
import JavascriptIcon from "./JavascriptIcon";
import NodeJSIcon from "./NodeJSIcon";
import ReactJSIcon from "./ReactJSIcon";

const IconComponents = {
  Css3Icon,
  Html5Icon,
  JavascriptIcon,
  NodeJSIcon,
  ReactJSIcon,
};

interface TechIconsProps extends IconBaseProps {
  techIconName:
    | "Css3Icon"
    | "Html5Icon"
    | "JavascriptIcon"
    | "NodeJSIcon"
    | "ReactJSIcon";
}

function TechIcons({ techIconName, ...rest }: TechIconsProps): JSX.Element {
  const IconComponent = IconComponents[techIconName];

  return <IconComponent {...rest} />;
}

export default TechIcons;
