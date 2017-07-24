import React from 'react'
import cn from 'classnames'
import Content from './Content'
import MultiContent from './MultiContent'
import {Button} from '../GenericComponents'
import {List, MultiLink, } from './SectionList.js'


const TableOfContents = (open) => {
  return (
    <div className={cn({open},'table-of-contents-component')}>
      <Button label='Subscribe' class='content-component-button' type='primary' />
      <hr className='divider' />
      { MultiContent(MultiLink[0]) }
      { List.map((section) => (Content(section))) }
    </div>
  );
}

export default TableOfContents
