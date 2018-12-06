import React from 'react'

export const CommentForm = (props) => {   
    const { submit, change, content } = props

    return (
        <div>
            <h3>Leave a comment here</h3>
            <form onSubmit={submit}>
                Content: <input name='content' onChange={change} value={content} />                
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}