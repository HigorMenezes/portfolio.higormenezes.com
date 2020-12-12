import { FaNode } from "react-icons/fa";
import { IconBaseProps } from "react-icons";

function NodeJSIcon({ ...rest }: IconBaseProps): JSX.Element {
  return <FaNode {...rest} color="#2e7d32" />;
}

export default NodeJSIcon;
