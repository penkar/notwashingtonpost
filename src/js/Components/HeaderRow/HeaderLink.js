import React from 'react'

class HeaderLink extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className='news-link-li'>
        <a href={''}>
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

export default HeaderLink
