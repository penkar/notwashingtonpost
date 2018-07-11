import React from 'react'
const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const date = new Date();

export const Slogan = () => (
  <div className='slogan-sectional' key='slogan-sectional'>
    <a href='#' className='slogan-text'>
      Not the Washington Post
    </a>
    <div className='slogan-row-text'>
      <span className='slogan-row-text-col left'>
        {`${Months[date.getMonth()]} ${date.getDate()}, ${1900 + date.getYear()}`}
      </span>

      <span className='slogan-row-text-col center'>
        Mold Dies in Daylight
      </span>

      <span className='slogan-row-text-col right'>
        Edition: <a style={{color:'black'}} href='#'>Web</a>
      </span>
    </div>
    <hr className='medium-divider'/>
  </div>
);
