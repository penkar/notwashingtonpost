import React from 'react';
import cn from 'classnames';
import {StoryTeaser} from './StoryTeaser';

const HomePageBody = (stories) => {
  let arr1 = [], arr2 = [], arr3 = [];
  stories.map((item, i) => {
    let j = i % 3;
    if(!j) {
      arr1.push(StoryTeaser(item, i));
    } else if (j === 1) {
      arr2.push(StoryTeaser(item, i));
    } else {
      arr3.push(StoryTeaser(item, i));
    }
  });

  return (
    <div className={cn('home-page-body')}>
      <div key={1} className='home-page-body-col'>{arr1}</div>
      <div key={2} className='home-page-body-col'>{arr2}</div>
      <div key={3} className='home-page-body-col'>{arr3}</div>
    </div>
  )
}

export {HomePageBody}
