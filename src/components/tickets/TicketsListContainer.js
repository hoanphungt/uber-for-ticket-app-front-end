import React from 'react'
import { connect } from 'react-redux';
import { loadTickets } from '../../actions/tickets'
import { TicketsList } from './TicketsList';
import TicketFormContainer from './TicketFormContainer';

class TicketsListContainer extends React.Component {
    componentDidMount() {
        const eventId = this.props.match.params.id
        this.props.loadTickets(eventId)
    }
    
    render() {
        return (
            <div>
                <TicketsList tickets={this.props.tickets} />
                <TicketFormContainer eventId={this.props.match.params.id}/>
                <button onClick={() => this.props.history.push('/logout')}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tickets: state.tickets
})

export default connect(mapStateToProps, {loadTickets})(TicketsListContainer) 