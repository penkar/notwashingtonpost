import React from 'react'
import cn from 'classnames'

const SubContent = ({label = '', key = '', link = '#'}) => {
  return (
    <div className={cn('subcontent-component')} key={key}>
      <a href={link}>{label}</a>
    </div>
  )
}

export default SubContent;
