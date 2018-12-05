import React from 'react'
import { Link } from 'react-router-dom'

export const TicketsList = (props) => {
    const { tickets } = props

    if (tickets === null) return <h1>Loading ...</h1>
    if (tickets.length === 0) return <h4>There is no ticket available at the moment. Please come back later!</h4>

    return (
        <div>
            <h3>All tickets offered for this event</h3>
            <ol>
                {tickets.map(ticket => {
                    return (
                        <li key={ticket.id}>
                            <h4>Event: {ticket.event.name}</h4>
                            <p>Author: {ticket.user.firstName}</p>
                            <p>Price: {ticket.price}</p>
                            <p>Description: {ticket.description}</p>
                            <p><Link to={`tickets/${ticket.id}`}>More Info</Link></p>
                        </li>
                    )
                })}
            </ol>

        </div>
    )
}

