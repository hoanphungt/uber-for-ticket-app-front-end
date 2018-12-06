import React from 'react'
import { connect } from 'react-redux';
import { loadTickets } from '../../actions/tickets'
import { TicketsList } from './TicketsList';
import TicketFormContainer from './TicketFormContainer';
import { Link } from 'react-router-dom'

class TicketsListContainer extends React.Component {
    componentDidMount() {
        const eventId = this.props.match.params.id
        this.props.loadTickets(eventId)
    }
    
    render() {
        return (
            <div>
                <TicketsList tickets={this.props.tickets} />
                <button onClick={() => this.props.history.push('/events')}>Go back to the event list</button>
                <div>
                    {this.props.currentUser && <TicketFormContainer eventId={this.props.match.params.id}/>}
                    {!this.props.currentUser && 
                        <p>Please <Link to="/login">login</Link> or <Link to="/signup">sign up</Link> to add tickets</p>
                    }
                </div>                 
                <button onClick={() => this.props.history.push('/logout')}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tickets: state.tickets,
    currentUser: state.currentUser
})

export default connect(mapStateToProps, {loadTickets})(TicketsListContainer) 