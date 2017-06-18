import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import {HeaderRow, } from '../Components/'
import {Slogan, RecentStories} from '../Components/Functional'

const mapActions = (dispatch) =>({
  dispatch,
  actions: {
    changeSetting: bindActionCreators(bindActionCreators),
  }
})

class App extends React.Component {
  render() {
    return (
      <div >
        <HeaderRow />
        <div className='app-body'>
          { Slogan() }
          { RecentStories(this.props.stories) }
        </div>
      </div>
    )
  }
}

App.defaultProps = {
  stories:[],
}


export default connect(state => state, mapActions)(App)
