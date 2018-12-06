import { COMMENTS_LOADED, COMMENT_CREATED } from "../actions/comments";

export default (state = null, action = {}) => {
    switch (action.type) {
        case COMMENTS_LOADED:
            return action.payload
        case COMMENT_CREATED:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}