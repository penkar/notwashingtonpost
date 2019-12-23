import React from 'react';
import { string, array } from 'prop-types';
import cn from 'classnames';

import {SubContent} from './SubContent';
import Right from 'react-icons/lib/fa/angle-right'

export default function Content ({ className, sublinks, link, label, key }) {
  const componentClass = cn('content-component', className);
  return (
    <div className={componentClass} key={key}>
      <span className='label'>
        {label}
      </span>
      <span className='right-arrow'>
        { Boolean(sublinks.length) && <Right style={{fontSize: '1.5em'}}/> }
      </span>
      { Boolean(sublinks.length) &&
        <div className={cn('subcontents-component thin-shadow')}>
          { sublinks.map((sub) => <SubContent {...sub} />) }
        </div>
      }
    </div>
  );
}

Content.propTypes = {
  key: string,
  label: string,
  link: string,
  sublinks: array,
  className: string,
}