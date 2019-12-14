import { func, string, bool } from 'prop-types';

export const BUTTON_PROPS = {
  action: func,
  className: string,
  full: bool,
  label: string,
  link: string,
  title: string,
  type: string,
}

export const HEADER_BUTTON_PROPS = {
  title: string,
  link: string,
  className: string,
  clickValue: string,
  onClick: func,
}