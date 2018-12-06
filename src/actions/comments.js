import request from 'superagent'
import {baseUrl} from '../constants'

export const COMMENTS_LOADED = 'COMMENTS_LOADED'
export const COMMENT_CREATED = 'COMMENT_CREATED'

const commentsLoaded = (comments) => ({
    type: COMMENTS_LOADED,
    payload: comments
})

const commentCreated = (comment) => ({
    type: COMMENT_CREATED,
    payload: comment
})

export const loadComments = (ticket_id) => (dispatch) => {
    request
        .get(`${baseUrl}/tickets/${ticket_id}/comments`)
        .then(response => {
            dispatch(commentsLoaded(response.body.comments))
        })
        .catch(console.error)
}

export const createComment = (data, ticket_id) => (dispatch, getState) => {
    const jwt = getState().currentUser.jwt

    request
        .post(`${baseUrl}/tickets/${ticket_id}/comments`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(res => {
            dispatch(commentCreated(res.body))
        })
        .catch(console.error) 
} 