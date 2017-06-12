import React from 'react'
import {render} from 'react-dom'
import {App,} from './js/Container'
require('./style/Central.scss')

render(<App />, document.getElementById('app'));
