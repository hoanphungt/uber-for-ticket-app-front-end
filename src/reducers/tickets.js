import { TICKETS_LOADED, TICKET_CREATED } from "../actions/tickets";

export default (state = null, action = {}) => {
    switch (action.type) {
        case TICKETS_LOADED:
            return action.payload
        case TICKET_CREATED:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}