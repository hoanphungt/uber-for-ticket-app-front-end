import React from 'react'
import { connect } from 'react-redux';
import { TicketDetails } from './TicketDetails';
import { loadTicket } from '../../actions/tickets'
import CommentFormContainer from '../comments/CommentFormContainer';
import CommentsContainer from '../comments/CommentsContainer';
import { Link } from 'react-router-dom'

class TicketDetailsContainer extends React.Component {
    componentDidMount() {
        this.props.loadTicket(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <TicketDetails ticket={this.props.ticket} />
                <CommentsContainer ticketId={this.props.match.params.id}/>
                <div>
                    {this.props.currentUser && <CommentFormContainer ticketId={this.props.match.params.id}/>}
                    {!this.props.currentUser && 
                        <p>Please <Link to="/login">login</Link> or <Link to="/signup">sign up</Link> to comment</p>
                    }
                </div> 
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ticket: state.ticket,
    currentUser: state.currentUser
})

export default connect(mapStateToProps, { loadTicket })(TicketDetailsContainer)