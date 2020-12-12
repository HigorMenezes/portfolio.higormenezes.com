import { FaJs } from "react-icons/fa";
import { IconBaseProps } from "react-icons";

function JavascriptIcon({ ...rest }: IconBaseProps): JSX.Element {
  return <FaJs {...rest} color="#ecce4c" />;
}

export default JavascriptIcon;
