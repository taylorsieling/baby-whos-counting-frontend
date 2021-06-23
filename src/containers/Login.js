import React, { Component } from 'react'
import { LoginForm } from '../components/LoginForm'
import Navigation from '../components/Navigation'

export default class Login extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <LoginForm/>
            </div>
        )
    }
}
