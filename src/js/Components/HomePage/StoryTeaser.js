import React from 'react'
import StoryElement from './StoryElement'
import cn from 'classnames'

const StoryTeaser = ({story, eClass = '', author, title}, i) => {
  return (
    <div className={cn('story-teaser-component', eClass)} key={i}>
      {title && <div className='title'>{title}</div>}

      {author && <div className='author'>{author.join(', ')}</div>}
      
      { story[0] && StoryElement(story[0], 0) }
      { story[1] && StoryElement(story[1], 1) }
      { story[2] && StoryElement(story[2], 2) }

    </div>
  );
}

export {StoryTeaser}
