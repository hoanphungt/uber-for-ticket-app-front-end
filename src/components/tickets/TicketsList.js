import React from 'react'
import { Link } from 'react-router-dom'

export const TicketsList = (props) => {
    const { tickets } = props

    if (tickets === null) return <h1>Loading ...</h1>
    if (tickets.length === 0) return <h4>There is no ticket available at the moment. Please come back later!</h4>

    return (
        <div>
            <h2>Event: {tickets[0].event.name}</h2>
            <ol>
                {tickets.map(ticket => {
                    let riskColor
                    if (ticket.risk <= 30) {
                        riskColor = 'green'
                    } else if (ticket.risk > 75) {
                        riskColor = 'red'
                    } else {
                        riskColor = 'yellow'
                    }
                    
                    return (
                        <li key={ticket.id}>
                            <p>Ticket offered by: <strong>{ticket.user.firstName}</strong></p>
                            <p>Price: €{ticket.price}</p>
                            <p>Description: {ticket.description}</p>
                            <div style={{width:'20px', height:'20px', backgroundColor:`${riskColor}`}} />
                            <p><Link to={`/tickets/${ticket.id}`}>More Info</Link></p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

