import React from 'react'
import cn from 'classnames'
import Content from './Content'
import {Button} from '../GenericComponents'

const TableOfContents = (open) => {
  return (
    <div className={cn({open},'table-of-contents-component')}>
      <Button label='Subscribe' class='' type='primary' full={true}/>
      Politics
      Opinions
      Sports
      Local
      National
      World
      Business
      Tech
      Lifecycle
      Entertainment
      Outlook
      Crosswords
      Video
    </div>
  );
}

export default TableOfContents
