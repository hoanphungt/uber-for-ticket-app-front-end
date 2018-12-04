import React from 'react'

export const LoginForm = (props) => {
    const { onSubmit, onChange, values } = props

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                Email: <input name='email' onChange={onChange} value={values.email}/>
                Passwor: <input name='password' onChange={onChange} value={values.password}/>
                <button type='submit'>login</button>
            </form>
        </div>
    )
}

