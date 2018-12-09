import request from 'superagent'
import { baseUrl } from '../constants'

export const TICKETS_LOADED = 'TICKETS_LOADED'
export const TICKET_LOADED = 'TICKET_LOADED'
export const TICKET_CREATED = 'TICKET_CREATED'
export const TICKET_UPDATED = 'TICKET_UPDATED'

const ticketsLoaded = (tickets) => ({
    type: TICKETS_LOADED,
    payload: tickets
})

const ticketLoaded = (ticket) => ({
    type: TICKET_LOADED,
    payload: ticket
})

const ticketCreated = (ticket) => ({
    type: TICKET_CREATED,
    payload: ticket
})

const ticketUpdated = (ticket) => ({
    type: TICKET_UPDATED,
    payload: ticket
})

export const loadTickets = (event_id) => (dispatch) => {
    request
        .get(`${baseUrl}/events/${event_id}/tickets`)
        .then(response => {
            dispatch(ticketsLoaded(response.body.tickets))
        })
        .catch(console.error)
}

export const loadTicket = (ticket_id) => (dispatch) => {
    request
        .get(`${baseUrl}/tickets/${ticket_id}`)
        .then(response => {
            dispatch(ticketLoaded(response.body))
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

export const updateTicket = (data, ticket_id) => (dispatch, getState) => {
    const currentUser = getState().currentUser

    if (currentUser === null) {
        alert('you cannot edit the ticket')
    } else {
        const jwt = currentUser.jwt

        request
            .put(`${baseUrl}/tickets/${ticket_id}`)
            .set('Authorization', `Bearer ${jwt}`)
            .send(data)
            .then(res => {
                dispatch(ticketUpdated(res.body))
            })
            .catch(error => {
                if (error.status === 400) {
                    alert('You cannot edit this ticket! Only the ticket holder can do it')
                }
            })
    }
}