import React from 'react';
import cn from 'classnames'

class HeaderButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={cn('news-button', {})}>
        { this.props.title }
        { this.props.children }
      </div>
    )
  }
}

export default HeaderButton;
