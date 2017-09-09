import React from 'react'
import cn from 'classnames'

import {SubContent} from './SubContent'

export function SubContents(arr) {
  if(!arr.length) return null;
  return (
    <div className={cn('subcontents-component thin-shadow')}>
      { arr.map((sub) => ( SubContent(sub) )) }
    </div>
  );
}
