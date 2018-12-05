import React from 'react'
import { connect } from 'react-redux';
import { TicketDetails } from './TicketDetails';
import { loadTicket } from '../../actions/tickets'

class TicketDetailsContainer extends React.Component {
    componentDidMount() {
        this.props.loadTicket(this.props.match.params.id)
    }
    
    render() {
        return <TicketDetails ticket={this.props.ticket}/>
    }
}

const mapStateToProps = (state) => ({
    ticket: state.ticket
})

export default connect(mapStateToProps, {loadTicket})(TicketDetailsContainer)