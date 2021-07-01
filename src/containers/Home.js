import React, { Component } from 'react'
import NavPublic from '../components/NavPublic'
import Login from '../containers/Login'

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                {/* <NavPublic/> */}
                <header className="App-header">
                    <h1><span className="subtitle">welcome to</span><br/>Swiftify</h1>
                    <Login/>
                </header>
            </div>
        )
    }
}
