import React, { Component } from 'react'
import NavPublic from '../components/NavPublic'
import Login from '../containers/Login'

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1><span className="subtitle">welcome to</span><br/>Swiftify</h1>
                <Login/>
            </header>
        </div>
    )
}

export default Home;

