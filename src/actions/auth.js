import request from 'superagent'
import { baseUrl } from '../constants'
import { isExpired } from '../jwt'

export const LOGIN = 'LOGIN'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const LOGOUT = 'LOGOUT'

export const SIGNUP = 'SIGNUP'
export const SIGNUP_FAILED = 'SIGNUP_FAILED'

export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USERS = 'UPDATE_USERS'

const userLogined = (login) => ({
    type: LOGIN,
    payload: login
})

const loginFailed = (error) => ({
    type: LOGIN_FAILED,
    payload: error || 'Unknown error'
})

const updateUsers = (users) => ({
    type: UPDATE_USERS,
    payload: users
})

export const logout = () => ({
    type: LOGOUT
})

export const login = (email, password) => (dispatch) => {
    request
        .post(`${baseUrl}/login`)
        .send({ email, password })
        .then(result => {
            dispatch(userLogined(result.body))
        })
        .catch(err => {
            if (err.status === 400) {
                dispatch(loginFailed(err.response.body.message))
            }
            else {
                console.error(err)
            }
        })
}

export const getUsers = () => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null
    const jwt = state.currentUser.jwt

    if (isExpired(jwt)) return dispatch(logout())

    request
        .get(`${baseUrl}/users`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(result => dispatch(updateUsers(result.body)))
        .catch(err => console.error(err))
}