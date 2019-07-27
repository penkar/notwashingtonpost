import React from 'react';
import cn from 'classnames';
import {StoryTeaser} from './StoryTeaser';

const HomePageBody = (stories) => {
  let arr1 = [], arr2 = [], arr3 = [], arr1Sum = 0, arr2Sum = 0, arr3Sum = 0;
  stories.forEach((item, i) => {
    if(arr1Sum <= arr2Sum) {
      item.story.slice(0,3).forEach((tease) => {
        arr1Sum += (tease.text || "").length;
      });
      arr1.push(StoryTeaser(item, i));
    } else if(arr2Sum <= arr3Sum) {
      item.story.slice(0,3).forEach((tease) => {
        arr2Sum += (tease.text || "").length;
      });
      arr2.push(StoryTeaser(item, i));
    } else {
      item.story.slice(0,3).forEach((tease) => {
        arr3Sum += (tease.text || "").length;
      });
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
