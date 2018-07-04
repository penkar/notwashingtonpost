import React from 'react';
import cn from 'classnames';

class Button extends React.Component {
  render = () => (
    <div
      className={cn('generic-button-component', this.props.class, this.props.type, {full: this.props.full})}
      onClick={this.props.action}
      title={this.props.title}>
      { this.props.label }
    </div>
  );
}

Button.defaultProps = {
  action:()=>(null),
  class:'',
  full: false,
  label:'',
  link:'',
  title:'',
  type:'primary',
}

export {Button};
