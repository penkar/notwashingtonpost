import React from 'react'
import StoryElement from './StoryElement'
import cn from 'classnames'

const StoryTeaser = ({story, eClass = '', author}, i) => {
  console.log(story);
  return (
    <div className={cn('story-teaser-component', eClass)} key={i}>
      {author && <div className='author'>{author}</div>}
      { story.map((line, i) => ( StoryElement(line, i) )) }
    </div>
  );
}

export {StoryTeaser}
