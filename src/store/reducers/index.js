import { combineReducers } from 'redux'
import userReducer from './usersReducer.js'

export default combineReducers({
  users: userReducer
})