import React from 'react'
import cn from 'classnames'

const StoryElement = ({type, text, array, eClass = ''}) => {
  switch (type) {
    case 'title':
      return <span className={cn('title-story-element', eClass)}>{text}</span>
    case 'author':
      return <span className={cn('author-story-element', eClass)}>{text}</span>
    case 'list':
      return (<ul className={cn('list-story-element', eClass)}>
        {array.map((st)=>(<li className='list-item-story-element'>{st}</li>))}
      </ul>);
    default:
      return null
  }
}

export default StoryElement
