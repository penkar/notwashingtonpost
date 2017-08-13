import React from 'react'
import StoryElement from './StoryElement'
import cn from 'classnames'

const StoryTeaser = ({story, eClass = '', author, title}, i) => {
  return (
    <div className={cn('story-teaser-component', eClass)} key={i}>
      {title && <div className='title'>{title}</div>}

      {author && <div className='author'>{author.join(', ')}</div>}
      
      { story.map((line, i) => ( StoryElement(line, i) )) }
    </div>
  );
}

export {StoryTeaser}
