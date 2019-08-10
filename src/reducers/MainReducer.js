import { combineReducers } from 'redux'
import todos from './ToDoReducer'
import visibilityFilter from './FilterReducer'

export default combineReducers({
  todos,
  visibilityFilter
})