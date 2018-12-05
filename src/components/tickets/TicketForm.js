import React from 'react'

export const TicketForm = (props) => {    
    const { change, submit, values } = props

    return (
        <div>
            <h1>Create a ticket here</h1>
            <form onSubmit={submit}>
                Price: <input name='price' onChange={change} value={values.price} />
                Description: <input name='description' onChange={change} value={values.description} />
                Image: <input name='picture' onChange={change} value={values.picture} />
                Risk: <input name='fraudPercentage' onChange={change} value={values.fraudPercentage} />
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}