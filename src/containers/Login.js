import React from 'react'
import { LoginForm } from '../components/LoginForm'
import Navigation from '../components/Navigation'

function Login() {
    return (
        <div>
            <Navigation/>
            <LoginForm/>
            <div className="form-parent">
                <h2>
                    <a href="http://localhost:3001/api/v1/login" className="btn btn--login">login with spotify</a>
                </h2>
            </div>
        </div>
    )
}

export default Login;
