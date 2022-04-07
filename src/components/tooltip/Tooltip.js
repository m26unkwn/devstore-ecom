import { useState } from "react";

import "./tooltip.css";
import Tip from "./Tip";
const Tooltip = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const onMouseHover = () => setShowTooltip(true);
  const onMouseLeave = () => setShowTooltip(false);

  return (
    <div
      className='tooltip-content'
      onMouseOver={onMouseHover}
      onMouseLeave={onMouseLeave}>
      {props.children}
      {showTooltip && <Tip>{props.info}</Tip>}
    </div>
  );
};

export default Tooltip;
