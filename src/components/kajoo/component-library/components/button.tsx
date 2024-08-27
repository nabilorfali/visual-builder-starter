import { FC } from "react";
import { toObject } from "../toObject";

const Button: FC<any> = ({ text = "", children, style = {}, ...rest }) => {
  const styleObject = toObject(style);

  return (
    <button {...rest} style={styleObject}>
      {text}
    </button>
  );
};

export default Button;
