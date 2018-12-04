import request from 'superagent'
import {baseUrl} from '../constants'

export const EVENTS_LOADED = 'EVENTS_LOADED'
export const EVENT_CREATED = 'EVENT_CREATED'

const eventsLoaded = (events) => ({
    type: EVENTS_LOADED,
    payload: events
})

const eventCreated = (event) => ({
    type: EVENT_CREATED,
    payload: event
})

export const loadEvents = () => (dispatch, getState) => {
    if (getState().events) return

    request
        .get(`${baseUrl}/events`)
        .then(response => {
            dispatch(eventsLoaded(response.body.events))
        })
        .catch(console.error)
}

export const createEvent = (data) => (dispatch, getState) => {
    const jwt = getState().currentUser.jwt

    request
        .post(`${baseUrl}/events`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(res => {
            dispatch(eventCreated(res.body))
        })
        .catch(console.error) 
} 