import React from 'react'
import { LoginForm } from '../components/LoginForm'
import NavPublic from '../components/NavPublic'

function Login() {
    return (
        <div>
            <a href="http://localhost:3001/api/v1/login" className="btn btn-login">login with spotify</a>
        </div>
    )
}

export default Login;
