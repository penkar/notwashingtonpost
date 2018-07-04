import React from 'react';
import cn from 'classnames';
export const SubContent = ({label = '', key = '', link = '#'}) => (
  <div className={cn('subcontent-component')} key={key}>
    <a href={link}>{label}</a>
  </div>
)