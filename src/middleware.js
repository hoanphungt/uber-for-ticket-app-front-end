import {LOGIN, LOGOUT} from './actions/auth'
import {localStorageJwtKey} from './constants'

export const storeJwt = store => next => action => {
  try {
    if (action.type === LOGIN) {
      localStorage.setItem(localStorageJwtKey, action.payload.jwt)
    }
    if (action.type === LOGOUT) {
      localStorage.removeItem(localStorageJwtKey)
    }
  }
  catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e)
  }

  next(action)
}
