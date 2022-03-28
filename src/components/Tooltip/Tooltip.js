import { useState } from "react";

import "./tooltip.css";
import Shape from "./Shape";
const Tooltip = (props) => {
  const [show, setShow] = useState(false);
  const onMouseHover = () => setShow(true);
  const onMouseLeave = () => setShow(false);

  return (
    <div
      className='tooltip-content'
      onMouseOver={onMouseHover}
      onMouseLeave={onMouseLeave}>
      {props.children}
      {show && <Shape>{props.info}</Shape>}
    </div>
  );
};

export default Tooltip;
