import React from 'react'
import cn from 'classnames'

const MultiContent = ({primary = {label:'',key:'',link:''}, secondary = []}) => {
  return (
    <div className={cn('multicontent-component content-component')}>
      <a className={cn('primary')} href={primary.link} key={primary.key}>{ primary.label }</a>
      { secondary.map((item) => (
        <a className={cn('secondary')} href={item.link} key={item.key}>{item.label}</a>
      ))}
    </div>
  )
}

export default MultiContent
