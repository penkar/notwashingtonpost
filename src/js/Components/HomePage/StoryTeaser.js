import React from 'react'
import StoryElement from './StoryElement'
import cn from 'classnames'

const StoryTeaser = ({story, eClass = ''}) => {
  return (
    <div className={cn('story-teaser-component', eClass)}>
      { story.map((line) => ( StoryElement(line) )) }
    </div>
  );
}

export default StoryTeaser
