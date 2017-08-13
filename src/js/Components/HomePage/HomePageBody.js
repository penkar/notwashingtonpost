import React from 'react';
import cn from 'classnames';
import {StoryTeaser} from './StoryTeaser';

class HomePageBody extends React.Component {
  constructor(props) {
    super(props);
    this._cols = this._cols.bind(this);
  }

  render() {
    let [arr1, arr2, arr3] = this._cols();
    return (
      <div className={cn('home-page-body')}>
        <div key={1} className='home-page-body-col'>{arr1}</div>
        <div key={2} className='home-page-body-col'>{arr2}</div>
        <div key={3} className='home-page-body-col'>{arr3}</div>
      </div>
    );
  }

  _cols() {
    let {stories} = this.props, arr1 = [], arr2 = [], arr3 = [];
    stories.map((item, i) => {
      console.log(item);
      let j = i % 3;
      if(!j) {
        arr1.push(StoryTeaser(item, i));
      } else if (j === 1) {
        arr2.push(StoryTeaser(item, i));
      } else {
        arr3.push(StoryTeaser(item, i));
      }
    });
    return [arr1, arr2, arr3];
  }
}

HomePageBody.defaultProps = {
 stories:[],

}

export {HomePageBody}
