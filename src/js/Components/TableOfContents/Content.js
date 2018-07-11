import React from 'react';
import cn from 'classnames';

import {SubContent} from './SubContent';
import Right from 'react-icons/lib/fa/angle-right'

export const Content = ({key = '', label = '', link = '', sublinks = [], classname = ''}) => (
  <div className={cn('content-component', classname)} key={key}>
    <span className='label'>{label}</span>
    <span className='right-arrow'>{ sublinks.length ? <Right style={{fontSize: '1.5em'}}/> : ''}</span>
    { sublinks.length && <div className={cn('subcontents-component thin-shadow')}>
      { sublinks.map((sub) => ( SubContent(sub) )) }
    </div> }
  </div>
);
