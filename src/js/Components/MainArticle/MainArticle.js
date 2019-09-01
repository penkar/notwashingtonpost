import React from 'react';
import StoryElement from '../HomePage/StoryElement';
import cn from 'classnames';

const MainArticle = (props) => {
  return (
    <div className='home-page-body'>
      <div className={cn('story-teaser-component', 'main-article-component', props.eClass)}>
        { props.title && <div className='title'>{ props.title }</div> }
        { props.author && <div className='author'>{ props.author.join(', ') }</div> }

        { props.story.map((str, j) => (StoryElement(str, j))) }
      </div>
    </div>
  )
}
MainArticle.defaultProps = {
  title:'',
  author:'',
  story: [],
  eClass:"",
}

export {MainArticle}
