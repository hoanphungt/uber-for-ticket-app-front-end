import { LOGIN, LOGOUT } from "../actions/auth";
import { localStorageJwtKey } from '../constants'

let initialState = null
try {
    const jwt = localStorage.getItem(localStorageJwtKey)
    if (jwt) {
        initialState = { jwt }
    }
}
catch (error) {
    console.log(`Error retrieving data from local storage`, error)
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        case LOGOUT:
            return null    
        default: 
            return state
    }
}