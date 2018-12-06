import {combineReducers} from 'redux'
import events from './events'
import tickets from './tickets'
import ticket from './ticket'
import comments from './comments'
import currentUser from './currentUser'
import signup from './signup'
import login from './login'

export default combineReducers({
    events,
    tickets,
    ticket,
    comments,
    currentUser,
    signup,
    login
})