import {combineReducers} from 'redux'
import events from './events'
import tickets from './tickets'
import currentUser from './currentUser'

export default combineReducers({
    events,
    tickets,
    currentUser
})