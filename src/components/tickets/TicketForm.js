import React from 'react'

export const TicketForm = (props) => {    
    const { change, submit, values } = props

    return (
        <div>
            <h2>Create a ticket here</h2>
            <form onSubmit={submit}>
                Price: <input type='number' name='price' onChange={change} value={values.price} />
                Description: <input name='description' onChange={change} value={values.description} />
                Image: <input name='picture' onChange={change} value={values.picture} />
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}