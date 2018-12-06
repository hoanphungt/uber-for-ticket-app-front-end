import React from 'react'
import { Link } from 'react-router-dom'

export const TicketDetails = (props) => {
    const { ticket, edit } = props

    if (ticket === null) return <h1>Loading ...</h1>

    let riskColor
    if (ticket.risk <= 30) {
        riskColor = 'green'
    } else if (ticket.risk > 75) {
        riskColor = 'red'
    } else {
        riskColor = 'yellow'
    }

    return (
        <div>
            <h2>Event: {ticket.event.name}</h2>
            <h1>Ticket from: {ticket.user.firstName} {ticket.user.lastName}</h1>
            <h3 style={{ color: `${riskColor}` }}>Risk: {Math.floor(ticket.risk)}%</h3>
            <i>We calculated that the risk of this ticket being a fraud is {Math.floor(ticket.risk)}%</i>
            <h1>EUR {ticket.price}</h1>
            <img alt='ticket' src={ticket.picture} width='250' height='100' />
            <p>Description: {ticket.description}</p>
            <button onClick={edit}>Edit the Ticket</button>
            <p><Link to={`/events/${ticket.event.id}/tickets`}>Back to the ticket list</Link></p>
        </div>
    )
}