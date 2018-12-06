import React from 'react'
import { Link } from 'react-router-dom'

export const LoginForm = (props) => {
    const { onSubmit, onChange, values } = props

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                Email: <input name='email' onChange={onChange} value={values.email}/>
                Password: <input name='password' onChange={onChange} value={values.password}/>
                <button type='submit'>login</button>
                <p><Link to='/signup'>Signup</Link></p>
            </form>
        </div>
    )
}

