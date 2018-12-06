import * as request from 'superagent'
import { baseUrl } from '../constants'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

const userSignupFailed = (error) => ({
    type: USER_SIGNUP_FAILED,
    payload: error || 'Unknown error'
})

const userSignupSuccess = () => ({
    type: USER_SIGNUP_SUCCESS
})

export const signup = (data) => (dispatch) =>
    request
        .post(`${baseUrl}/users`)
        .send(data)
        .then(result => {
            dispatch(userSignupSuccess())
        })
        .catch(err => {
            if (err.status === 400) {
                dispatch(userSignupFailed(err.response.body.message))
            }
            else {
                console.error(err)
            }
        })