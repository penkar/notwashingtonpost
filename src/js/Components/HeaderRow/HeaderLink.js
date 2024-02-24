import React from "react";

import { HEADER_LINK } from "../../types";

const HeaderLink = ({ title = "", children = null, link = "" }) => (
  <li className="news-link-li">
    <a href={link}>
      {title}
      {children}
    </a>
  </li>
);

HeaderLink.prototypes = HEADER_LINK;

export default HeaderLink;
