import React from 'react'
const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Slogan = () => {
  let date = new Date();
  return (
    <div className='slogan-sectional' key='slogan-sectional'>
      <div className='slogan-text'>
        Not the Washington Post
      </div>
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
      <hr className='divider'/>
    </div>
  )
}
export {Slogan}
