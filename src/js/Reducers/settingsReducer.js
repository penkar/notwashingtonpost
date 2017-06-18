import {CHANGE_SETTING, } from '../Constants'

const initial = {
  section: false,
}

const settingsReducer = (state = initial, action) => {
  switch (action.type) {
    case CHANGE_SETTING:
      return Object.assign({}, state, action.setting)
    default:
      return state;
  }
}
export default settingsReducer
