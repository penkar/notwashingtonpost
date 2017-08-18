import React from 'react'
import cn from 'classnames'

const StoryElement = ({style, type, text, array, sClass = ''}, i) => {

  switch (type) {
    case 'title':
      return <span key={i} className={cn('title-story-element', sClass)}>{text}</span>
    case 'author':
      return <span key={i} className={cn('author-story-element', sClass)}>{text}</span>
    case 'list':
      return (<ul key={i} className={cn('list-story-element', sClass)}>
        {array.map((st, j)=>(<li key={j} className='list-item-story-element'>{st}</li>))}
      </ul>);
    default:
      return <span key={i} className={cn('title-story-element', sClass)}>{text}</span>
  }
}

export default StoryElement
