import React from 'react'
import cn from 'classnames'

import {Content} from './Content'
import {MultiContent} from './MultiContent'
import {Button} from '../GenericComponents'
import {List, MultiLink, } from './SectionList.js'


export function TableOfContents(open) {
  return (
    <div id='TableOfContents' className={cn({open},'table-of-contents-component')}>
      <Button label='Subscribe' class='content-component-button' type='primary' />
      <hr className='divider' />
      { MultiContent(MultiLink[0]) }
      { List.map((section) => (Content(section))) }
      <hr className='full-break' />
    </div>
  );
}
