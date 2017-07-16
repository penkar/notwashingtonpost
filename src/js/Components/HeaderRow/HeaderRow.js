import React from 'react'
import HeaderButton from './HeaderButton'
import HeaderLink from './HeaderLink'
import Links from './Links'

import Bell from 'react-icons/lib/fa/bell-o'
import Search from 'react-icons/lib/fa/search'
import Bars from 'react-icons/lib/fa/bars'

class HeaderRow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let title = document.getElementsByTagName('title')[0];
    title.innerText = `News of the Day ${(new Date()).toLocaleDateString()}`
  }

  render() {
    return (
      <div id='header-row'>
        <ul className='news-link-ul' key='0'>

          <HeaderButton title={''} link={''}>
            <Search className='standard-icon' />
          </HeaderButton>

          <HeaderButton
            title={''}
            link={''}
            clickValue='tableofcontents'
            onClick={this.props.actions.changeSettingBool}>
            <span>Sections&nbsp;</span>
            <Bars className='standard-icon' />
          </HeaderButton>

          { Links.map((link, i) => (<HeaderLink {...link} key={i} />))}

        </ul>

        <ul className='news-link-ul' key='1'>
          <HeaderLink title={''} link={''}>
            <Bell className='standard-icon'/>
          </HeaderLink>
        </ul>
      </div>
    )
  }
}

HeaderRow.defaultProps = {
  actions: {},
}

export default HeaderRow
//&#10133;
