import React from 'react'
import cn from 'classnames'

const StoryElement = ({style, type, text, array, sClass = ''}, i) => {

  switch (type) {
    case 'title':
      return <span key={i} className={cn('title-story-element', sClass)}>{text}</span>
    case 'author':
      return <span key={i} className={cn('author-story-element', sClass)}>{text}</span>
    case 'list':
      return (<ul className={cn('list-story-element', eClass)}>
        {array.map((st)=>(<li className='list-item-story-element'>{st}</li>))}
      </ul>);
    default:
      return <span key={i} className={cn('title-story-element', sClass)}>{text}</span>
  }
}

export default StoryElement
