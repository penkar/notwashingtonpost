import React from 'react'
import cn from 'classnames'

import {SubContents} from './SubContents';
import Right from 'react-icons/lib/fa/angle-right'

export function Content({key = '', label = '', link = '', sublinks = [], classname = ''}) {
  return (
    <div className={cn('content-component', classname)} key={key}>
      <span className='label'>{label}</span>
      <span className='right-arrow'>{ sublinks.length ? <Right style={{fontSize: '1.5em'}}/> : ''}</span>
      { SubContents(sublinks) }

    </div>
  );
}
