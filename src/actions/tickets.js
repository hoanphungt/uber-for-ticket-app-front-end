import request from 'superagent'
import {baseUrl} from '../constants'

export const TICKETS_LOADED = 'TICKETS_LOADED'
export const TICKET_CREATED = 'TICKET_CREATED'

const ticketsLoaded = (tickets) => ({
    type: TICKETS_LOADED,
    payload: tickets
})

const ticketCreated = (ticket) => ({
    type: TICKET_CREATED,
    payload: ticket
})

export const loadTickets = () => (dispatch, getState) => {
    if (getState().tickets) return

    request
        .get(`${baseUrl}/tickets`)
        .then(response => {
            dispatch(ticketsLoaded(response.body.tickets))
        })
        .catch(console.error)
}

export const createTicket = (data, event_id) => (dispatch, getState) => {
    const jwt = getState().currentUser.jwt

    request
        .post(`${baseUrl}/events/${event_id}/tickets`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(res => {
            dispatch(ticketCreated(res.body))
        })
        .catch(console.error) 
} 