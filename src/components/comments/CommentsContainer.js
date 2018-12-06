import React from 'react'
import { connect } from 'react-redux';
import { loadComments } from '../../actions/comments'
import { Comments } from './Comments';

class CommentsContainer extends React.Component {
    componentDidMount() {
        this.props.loadComments(this.props.ticketId)
    }
    
    render() {
        return <Comments comments={this.props.comments}/>
    }
}

const mapStateToProps = (state) => ({
    comments: state.comments
})

export default connect(mapStateToProps, {loadComments})(CommentsContainer) 