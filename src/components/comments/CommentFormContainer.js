import React from 'react'
import { connect } from 'react-redux';
import { createComment } from '../../actions/comments'
import { CommentForm } from './CommentForm';

class CommentFormContainer extends React.Component {
    state = {
        content: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.createComment(this.state, this.props.ticketId)
        this.setState({
            content: ''
        })
    }
    render() {
        return <CommentForm submit={this.onSubmit} change={this.onChange} content={this.state.content} />
    }
}

export default connect(null, { createComment })(CommentFormContainer)