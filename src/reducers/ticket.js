import { TICKET_LOADED, TICKET_UPDATED } from "../actions/tickets";

export default (state = null, action = {}) => {
    switch (action.type) {
        case TICKET_LOADED:
            return action.payload
        case TICKET_UPDATED:
            return action.payload
        default:
            return state
    }
}