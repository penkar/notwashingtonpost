import React from 'react';
export const SubContent = (props) => (
  <div className="subcontent-component" key={props.key}>
    <a href={props.link}>{props.label}</a>
  </div>
)
SubContent.defaultProps = {
  label:'',
  key:'',
  link:"#",
}