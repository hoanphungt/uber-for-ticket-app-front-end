import React from 'react'
import { connect } from 'react-redux';
import { createTicket } from '../../actions/tickets'
import { TicketForm } from './TicketForm';

class TicketFormContainer extends React.Component {
    state = {
        price: '',
        description: '',
        picture: '',
        fraudPercentage: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.createTicket(this.state, this.props.eventId)
        this.setState({
            price: '',
            description: '',
            picture: '',
            fraudPercentage: ''
        })
    }
    render() {
        return <TicketForm submit={this.onSubmit} change={this.onChange} values={this.state} />
    }
}

export default connect(null, { createTicket })(TicketFormContainer)