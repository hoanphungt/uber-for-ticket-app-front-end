import React from 'react'
import { connect } from 'react-redux';
import { TicketDetails } from './TicketDetails';
import { TicketForm } from './TicketForm'
import { loadTicket } from '../../actions/tickets'
import { updateTicket } from '../../actions/tickets'
import CommentFormContainer from '../comments/CommentFormContainer';
import CommentsContainer from '../comments/CommentsContainer';
import { Link } from 'react-router-dom'

class TicketDetailsContainer extends React.Component {
    componentDidMount() {
        this.props.loadTicket(this.props.match.params.id)
    }

    state = { editMode: false }

    onEdit = () => {
        this.setState({
            editMode: true,
            formValues: {
                price: this.props.ticket.price,
                description: this.props.ticket.description,
                picture: this.props.ticket.picture
            }
        })
    }

    onChange = (ticket) => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [ticket.target.name]: ticket.target.value
            }
        })
    }

    onSubmit = (ticket) => {
        ticket.preventDefault()
        this.setState({
            editMode: false
        })
        this.props.updateTicket(this.state.formValues, this.props.ticket.id)
    }

    render() {
        return (
            <div>
                {this.state.editMode && <TicketForm submit={this.onSubmit} change={this.onChange} values={this.state.formValues} />}
                {!this.state.editMode && (<div>
                    <TicketDetails ticket={this.props.ticket} edit={this.onEdit} />
                    <CommentsContainer ticketId={this.props.match.params.id} />
                    <div>
                        {this.props.currentUser && <CommentFormContainer ticketId={this.props.match.params.id} />}
                        {!this.props.currentUser &&
                            <p>Please <Link to="/login">login</Link> or <Link to="/signup">sign up</Link> to comment</p>
                        }
                    </div>
                </div>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ticket: state.ticket,
    currentUser: state.currentUser
})

export default connect(mapStateToProps, { loadTicket, updateTicket })(TicketDetailsContainer)