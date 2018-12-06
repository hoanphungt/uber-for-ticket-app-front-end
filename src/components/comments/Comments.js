import React from 'react'

export const Comments = (props) => {
    const { comments } = props

    if (comments === null) return <h1>Loading</h1>

    return (
        <div>
            {comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <strong>{comment.user.firstName}:</strong> {comment.content}
                    </div>
                )
            })}            
        </div>
    )
}

