import React from 'react'
import { Link } from 'react-router-dom'

export const TicketDetails = (props) => {
    const { ticket } = props

    if (ticket === null) return <h1>Loading ...</h1>

    return (
        <div>
            <h2>Event: {ticket.event.name}</h2>
            <h1>Ticket from: {ticket.user.firstName} {ticket.user.lastName}</h1>
            <h3>Risk: {ticket.risk}%</h3>
            <i>We calculated that the risk of this ticket being a fraud is {ticket.risk}%</i>
            <h1>EUR {ticket.price}</h1>
            <img alt='ticket' src={ticket.picture} width='250' height='100' />
            <p>Description: {ticket.description}</p>
            <Link to={`/events/${ticket.event.id}/tickets`}>Back to the ticket list</Link>
            <h3>Comments</h3>
        </div>
    )
}