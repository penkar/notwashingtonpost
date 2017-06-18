import { combineReducers } from 'redux'
import { createStore } from 'redux'

import settingsReducer from './settingsReducer'
import newsReducer from './newsReducer'

const reducer = combineReducers({
  settingsReducer,
  newsReducer,
});

export default reducer;
