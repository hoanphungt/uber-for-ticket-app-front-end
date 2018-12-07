import React from 'react'
import { Link } from 'react-router-dom'
import './Event.css'

export const EventsList = (props) => {
    const { events } = props

    if (events === null) return <h1>Loading ...</h1>
    if (events.length === 0) return <h4>There is no event available at the moment. Please come back later!</h4>

    //filter through all events to get only events that will happen in the future
    const newEvents = events.filter(event => new Date(event.end).getTime() > (new Date()).getTime())
    
    return (
        <div>
            <h1>List of all Events in Amsterdam</h1>
            <ol className='eventList'>
                {newEvents.map(event => {
                    return (
                        <li key={event.id}>
                            <h4>{event.name}</h4>
                            <img alt='event logo' src={event.picture} width='300' height='150'/>
                            <p>Description: {event.description}</p>
                            <i>from: {event.start} to: {event.end}</i>
                            <p><Link to={`/events/${event.id}/tickets`}>More information</Link></p>
                        </li>
                    )
                })}
            </ol>

        </div>
    )
}

