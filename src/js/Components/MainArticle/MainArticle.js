import React from 'react';
import StoryElement from '../HomePage/StoryElement';
import cn from 'classnames';

const MainArticle = ({title = '', author = '', story = [], eClass}) => {
  return (
    <div className='home-page-body'>
      <div className={cn('story-teaser-component', 'main-article-component', eClass)}>
        {title && <div className='title'>{title}</div>}

        {author && <div className='author'>{author.join(', ')}</div>}

        { story.map((str, j) => (StoryElement(str, j))) }
      </div>
    </div>
  )
}

export {MainArticle, }
