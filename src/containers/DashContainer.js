import React, { useState, useEffect } from 'react'
import NavPrivate from '../components/NavPrivate'
import Dashboard from '../components/Dashboard'

function DashContainer() {

    const [users, setUsers] = useState([])
    const isLoggedIn = useState()
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)

    const url = "http://localhost:3001/api/v1/users"

    // if (window.location.href.includes("/dashboard")) {
    //   isLoggedIn = true;
    // }

    // testing new branch

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log('fetching', data)
            setUsers(data)
        })
    }, [])

    return (
        <div>
            <NavPrivate/>
            <h1>Dashboard</h1>
            <Dashboard/>
        </div>
    )
}
export default DashContainer;
