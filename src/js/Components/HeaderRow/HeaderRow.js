import React from 'react'
import HeaderButton from './HeaderButton'
import {HeaderLink, HeaderLinkFunc} from './HeaderLink'
import Links from './Links'

import Bell from 'react-icons/lib/fa/bell-o'
import Search from 'react-icons/lib/fa/search'
import Bars from 'react-icons/lib/fa/bars'

const HeaderRow  = ({actions, settings}) => (
  <div id='header-row'>
    <ul className='news-link-ul' key='0'>

      <HeaderButton
        klass={settings.searchSection ? 'search' : ''}
        clickValue='searchSection'
        onClick={actions.changeSettingBool}
        title={''}>
        <Search className='standard-icon' />
      </HeaderButton>

      <HeaderButton
        klass=''
        clickValue='tableofcontents'
        onClick={actions.changeSettingBool}
        title={''}>

        <span>Sections&nbsp;</span>
        <Bars className='standard-icon' />
      </HeaderButton>

      { Links.map((link, i) => (HeaderLinkFunc(link, i))) }

    </ul>

    <ul className='news-link-ul' key='1'>
      <HeaderLink title={''} link={''}>
        <Bell className='standard-icon'/>
      </HeaderLink>
    </ul>
  </div>
)

export default HeaderRow
