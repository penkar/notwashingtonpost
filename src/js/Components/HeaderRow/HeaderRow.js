import React from 'react'
import HeaderButton from './HeaderButton'
import HeaderLink from './HeaderLink'
import Links from './Links'

import Bell from 'react-icons/lib/fa/bell-o'
import Search from 'react-icons/lib/fa/search'
import Bars from 'react-icons/lib/fa/bars'

const HeaderRow  = ({actions, settings}) => (
  <div id='header-row'>
    <ul className='news-link-ul'>

      <HeaderButton
        className={settings.searchSection ? 'search' : ''}
        clickValue='searchSection'
        onClick={actions.changeSettingBool}
      >
        <Search className='standard-icon' />
      </HeaderButton>

      <HeaderButton
        clickValue='tableofcontents'
        onClick={actions.changeSettingBool}
      >
        <span>Sections&nbsp;</span>
        <Bars className='standard-icon' />
      </HeaderButton>
      { Links.map((link) => <HeaderLink {...link} key={link.title} />) }
    </ul>

    <ul className='news-link-ul'>
      <HeaderLink>
        <Bell className='standard-icon'/>
      </HeaderLink>
    </ul>
  </div>
)

export default HeaderRow
