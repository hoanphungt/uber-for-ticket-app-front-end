import { EVENTS_LOADED, EVENT_CREATED } from "../actions/events";

export default (state = null, action = {}) => {
    switch (action.type) {
        case EVENTS_LOADED:
            return action.payload
        case EVENT_CREATED:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}