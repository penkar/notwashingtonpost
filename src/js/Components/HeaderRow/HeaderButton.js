import React from 'react';
import cn from 'classnames'

class HeaderButton extends React.Component {
  constructor(props) {
    super(props);
    this._click = this._click.bind(this);
  }

  render() {
    return (
      <div
        onClick={this._click}
        className={cn('news-button', this.props.klass)}>
        { this.props.title }
        { this.props.children }
      </div>
    )
  }

  _click() {
    this.props.onClick(this.props.clickValue);
  }
}

HeaderButton.defaultProps = {
  title:'',
  link:'',
  klass:'',
  clickValue:'',
  onClick:()=>(null),
}

export default HeaderButton;
