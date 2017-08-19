import React from 'react'
import {render} from 'react-dom'
import {App,} from './js/Container'
require('./style/Central.scss')


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './js/Reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
