import React from 'react'
const RecentStories = (array  = []) => (
  <ul className='recent-sectional'>
    <li className='label' key={'title'}>In the News&nbsp;</li>
    { array.map((story, i) => (
      <li className='recent-sectional-title' key={i}>
        <a href={`#${story.href || ''}`}>{story.title}</a>
      </li>
    )) }
  </ul>
);
export {RecentStories};
