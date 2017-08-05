import {SET_STORY_TAGS} from '../Constants'

const initial = {
  stories: [],
}

const newsTaglineReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_STORY_TAGS:
      return {stories: action.value}
    default:
      return state;
  }
}

export default newsTaglineReducer
