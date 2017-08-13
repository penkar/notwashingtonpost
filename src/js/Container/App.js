import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import cn from 'classnames'

import {HeaderRow, TableOfContents, HomePageBody,} from '../Components/'
import {Slogan, RecentStories, StoryTeaser,} from '../Components/Functional'
import * as actions from '../Actions/'
import {getStories} from '../Utility';

const mapActions = (dispatch) =>({
  dispatch,
  actions: {
    changeSetting: bindActionCreators(actions.changeSetting, dispatch),
    changeSettingBool: bindActionCreators(actions.changeSettingBool, dispatch),
    setStoryAction: bindActionCreators(actions.setStoryAction, dispatch),
    setStoryTags: bindActionCreators(actions.setStoryTags, dispatch),
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this._click = this._click.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this._click);
    getStories(this.props.actions);
  }

  render() {
    let {actions, settingsReducer, newsStoryReducer = {}, newsTaglineReducer} = this.props;
    return (
      <div>
        <HeaderRow actions={actions} />
        { TableOfContents(settingsReducer.tableofcontents) }
        <div className={cn('app-body', {tableofcontents:settingsReducer.tableofcontents})}>
          { Slogan() }
          { RecentStories(newsTaglineReducer.stories) }

          <HomePageBody stories={newsStoryReducer.news}/>

        </div>
      </div>
    )
  }

  _click(e) {
    if(!this.props.settingsReducer.tableofcontents) return null;
    let target = e.target;
    while(target) {
      if (target.id === 'TableOfContents' || target.id === 'header-row') {break;}
      target = target.parentElement;
    }
    if(!target) return this.props.actions.changeSettingBool('tableofcontents');
  }
}

App.defaultProps = {
  stories:[],
}


export default connect(state => state, mapActions)(App)
