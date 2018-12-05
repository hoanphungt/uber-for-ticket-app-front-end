import { TICKET_LOADED } from "../actions/tickets";

export default (state = null, action = {}) => {
    switch (action.type) {
        case TICKET_LOADED:
            return action.payload
        default:
            return state
    }
}