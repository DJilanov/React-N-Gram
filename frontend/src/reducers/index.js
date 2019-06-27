import { combineReducers } from 'redux'
import messages from './messages'
import form from './form'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  form,
  messages,
  visibilityFilter
})
