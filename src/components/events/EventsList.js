import React from 'react'
import { Link } from 'react-router-dom'

export const EventsList = (props) => {
    const { events } = props

    if (events === null) return <h1>Loading ...</h1>
    if (events.length === 0) return <h4>There is no event available at the moment. Please come back later!</h4>

    return (
        <div>
            <h1>List of all Events in Amsterdam</h1>
            <ol>
                {events.map(event => {
                    return (
                        <li key={event.id}>
                            <h4>{event.name}</h4>
                            <i>{event.picture}</i>
                            <p>Description: {event.description}</p>
                            <i>from: {event.start} to: {event.end}</i>
                            <p><Link to={`events/${event.id}/tickets`}>More information</Link></p>
                        </li>
                    )
                })}
            </ol>

        </div>
    )
}

