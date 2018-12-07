import React from 'react'

export const EventForm = (props) => {
    const { submit, change, values } = props

    return (
        <div>
            <h3>Create a new Event</h3>
            <form onSubmit={submit}>
                Name of the event: <input name='name' onChange={change} value={values.name} />
                Description: <input name='description' onChange={change} value={values.description} />
                Logo: <input name='picture' onChange={change} value={values.picture} /><br/>
                Starting date: <input type='date' name='start' onChange={change} value={values.start} />
                Ending date: <input type='date' name='end' onChange={change} value={values.end} />
                <button type='submit'>Save</button>
            </form>
        </div>        
    )
}