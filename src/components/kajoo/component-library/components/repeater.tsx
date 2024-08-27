import { FC } from "react";
import { toObject } from "../toObject";

const Repeater: FC<any> = ({ columns = 3, style = {}, children, ...rest }) => {
  const styleObject = toObject(style);
  const repeaterStyle = {
    ...styleObject,
    display: "grid",
    gap: "10px",
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
  };

  return (
    <div {...rest} style={repeaterStyle}>
      {children}
    </div>
  );
};

export default Repeater;
