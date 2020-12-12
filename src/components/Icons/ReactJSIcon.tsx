import { FaReact } from "react-icons/fa";
import { IconBaseProps } from "react-icons";

function ReactJSIcon({ ...rest }: IconBaseProps): JSX.Element {
  return <FaReact {...rest} color="#61dafb" />;
}

export default ReactJSIcon;
