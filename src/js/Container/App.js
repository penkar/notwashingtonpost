import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import cn from 'classnames'

import {HeaderRow, TableOfContents} from '../Components/'
import {Slogan, RecentStories} from '../Components/Functional'
import {changeSetting, changeSettingBool} from '../Actions/'

const mapActions = (dispatch) =>({
  dispatch,
  actions: {
    changeSetting: bindActionCreators(changeSetting, dispatch),
    changeSettingBool: bindActionCreators(changeSettingBool, dispatch),
  },
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this._click = this._click.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this._click);
  }

  render() {
    let {actions, settingsReducer} = this.props;
    return (
      <div>
        <HeaderRow actions={actions} />
        { TableOfContents(settingsReducer.tableofcontents) }
        <div className={cn('app-body', {tableofcontents:settingsReducer.tableofcontents})}>
          { Slogan() }
          { RecentStories(this.props.newsReducer.stories) }
        </div>
      </div>
    )
  }

  _click(e) {
    let target = e.target;
    while(target) {
      if (target.id === 'TableOfContents' || target.id === 'header-row') {break;}
      target = target.parentElement;
    }
    if(!target) this.props.actions.changeSettingBool('tableofcontents');
  }
}

App.defaultProps = {
  stories:[],
}


export default connect(state => state, mapActions)(App)
