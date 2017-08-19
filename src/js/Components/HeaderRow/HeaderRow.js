import React from 'react'
import HeaderButton from './HeaderButton'
import {HeaderLink, HeaderLinkFunc} from './HeaderLink'
import Links from './Links'

import Bell from 'react-icons/lib/fa/bell-o'
import Search from 'react-icons/lib/fa/search'
import Bars from 'react-icons/lib/fa/bars'

const HeaderRow  = (actions) => (
  <div id='header-row'>
    <ul className='news-link-ul' key='0'>

      <HeaderButton title={''} link={''}>
        <Search className='standard-icon' />
      </HeaderButton>

      <HeaderButton
        title={''}
        link={''}
        clickValue='tableofcontents'
        onClick={actions.changeSettingBool}>
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
