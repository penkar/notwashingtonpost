import React from "react";
import cn from "classnames";

import { HEADER_BUTTON_PROPS } from "../../types";

const HeaderButton = ({
  clickValue,
  className = "",
  onClick = () => null,
  children = null,
  title = "",
}) => (
  <div
    onClick={() => onClick(clickValue)}
    className={cn("news-button", className)}
  >
    {title}
    {children}
  </div>
);

HeaderButton.propTypes = HEADER_BUTTON_PROPS;

export default HeaderButton;
