import React from 'react'

export const TicketDetails = (props) => {
    const { ticket } = props

    if (ticket === null) return <h1>Loading ...</h1>

    return (
        <div>
            <h2>Ticket from {ticket.user.firstName} {ticket.user.lastName}</h2>
            <h3>Risk: {ticket.fraudPercentage}%</h3>
            <h1>EUR {ticket.price}</h1>
            <i>{ticket.picture}</i>
            <i>{ticket.description}</i>
            <h3>Comments</h3>
        </div>
    )
}