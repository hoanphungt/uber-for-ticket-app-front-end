import { USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILED } from '../actions/signup'
import { LOGOUT } from '../actions/auth';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case USER_SIGNUP_SUCCESS:
            return {
                success: true
            }

        case USER_SIGNUP_FAILED:
            return {
                error: action.payload
            }

        case LOGOUT:
            return {}
        default:
            return state
    }
}
