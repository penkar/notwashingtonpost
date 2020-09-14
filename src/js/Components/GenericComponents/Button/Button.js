import React from 'react';

import { BUTTON_PROPS } from '../../../types';
import cn from 'classnames';

const Button = ({ action, className, full, label, link, title, type }) => {
  const buttonClass = cn('generic-button-component', className, type, full);
  return (
    <div
      className={buttonClass}
      onClick={action}
      title={title}>
      { label }
    </div>
  );
}

Button.propTypes = BUTTON_PROPS;
Button.defaultProps = {
  className: "",
  full: false,
  label: "",
  link: "",
  title: "",
  type: "primary",
};

export default Button;
