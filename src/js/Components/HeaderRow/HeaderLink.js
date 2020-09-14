import React from 'react';

import { HEADER_LINK } from '../../types';

const HeaderLink = ({ title, children, link }) => (
  <li className='news-link-li'>
    <a href={link}>
      { title }
      { children }
    </a>
  </li>
);

HeaderLink.prototypes = HEADER_LINK;
HeaderLink.defaultProps = {
  title: "",
  children: null,
  link: ""
};

export default HeaderLink;
