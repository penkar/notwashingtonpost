import React from 'react'
const HeaderLinkFunc = (props, i) => (
  <li className='news-link-li' key={i}>
    <a href={props.link}>{ props.title }</a>
  </li>
);

class HeaderLink extends React.Component {
  render() {
    return (
      <li className='news-link-li'>
        <a href={`${this.props.link}`}>
          { this.props.title }
          { this.props.children }
        </a>
      </li>
    )
  }
}

HeaderLink.defaultProps = {
  title:'',
  link:'',
}
export {HeaderLink, HeaderLinkFunc}
