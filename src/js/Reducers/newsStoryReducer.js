import {SET_STORY_ACTION} from '../Constants'

const initial = {
  news: [],
}

const newsStoryReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_STORY_ACTION:
      return {news: action.value}
    default:
      return state;
  }
}

export default newsStoryReducer
