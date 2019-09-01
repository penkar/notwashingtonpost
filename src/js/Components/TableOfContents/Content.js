import React from 'react';
import cn from 'classnames';

import {SubContent} from './SubContent';
import Right from 'react-icons/lib/fa/angle-right'

export const Content = (props) => (
  <div className={cn('content-component', props.classname)} key={props.key}>
    <span className='label'>{props.label}</span>
    <span className='right-arrow'>{ props.sublinks.length ? <Right style={{fontSize: '1.5em'}}/> : ''}</span>
    { props.sublinks.length && <div className={cn('subcontents-component thin-shadow')}>
      { props.sublinks.map((sub) => ( SubContent(sub) )) }
    </div> }
  </div>
);
Content.defaultProps = {
  key: "",
  label: "",
  link: "",
  sublinks: [],
  className: '',
}