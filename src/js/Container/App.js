import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import cn from 'classnames'

import {HeaderRow, TableOfContents, HomePageBody, MainArticle,} from '../Components/'
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
    this._body = this._body.bind(this);
    this._body = this._body.bind(this);
    this._relevantStories = this._relevantStories.bind(this);
    this.state = {
      hash: window.location.hash.replace(/^\#/,'')
    };
  }

  componentDidMount() {
    let title = document.getElementsByTagName('title')[0];
    title.innerText = `News of the Day ${(new Date()).toLocaleDateString()}`;
    document.addEventListener('click', this._click);
    getStories(this.props.actions);
    window.onhashchange = this._body;
  }

  render() {
    let {actions, settingsReducer, newsStoryReducer, newsTaglineReducer} = this.props;
    let {hash} = this.state;
    let stories = this._relevantStories();

    // window.ne = newsStoryReducer;
    // <HeaderRow actions={actions} />
    return (
      <div>
        { HeaderRow(actions) }
        { TableOfContents(settingsReducer.tableofcontents) }
        <div className={cn('app-body', {tableofcontents:settingsReducer.tableofcontents})}>
          { !hash && Slogan() }
          { !hash && RecentStories(newsTaglineReducer) }
          { stories.length > 1 && HomePageBody(stories) }

          { stories.length === 1 && MainArticle(stories[0]) }
        </div>
      </div>
    )
  }

  _relevantStories() {
    let {newsStoryReducer} = this.props, {hash} = this.state;
    if(!hash) {
      return newsStoryReducer;
    } else if(parseInt(hash)) {
      return newsStoryReducer.filter((str) => (str.id == hash));
    } else if(hash) {
      return [{title:'', author:'', story:[]}]
    } else {
      return [{title:'', author:'', story:[]}]
    }
  }

  _body() {
    this.setState({hash: window.location.hash.replace(/^\#/,'')});
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
