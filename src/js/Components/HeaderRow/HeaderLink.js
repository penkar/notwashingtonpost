import React from 'react'

const HeaderLinkFunc = ({title, link}, i) => (
  <li className='news-link-li' key={i}>
    <a href={`${link}`}>{ title }</a>
  </li>
)

class HeaderLink extends React.Component {
  constructor(props) {
    super(props)
  }

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
