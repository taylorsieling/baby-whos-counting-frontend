import React, { useState, useEffect } from 'react'
import UserConsumer from '../UserContext'
import DashContainer from './DashContainer'


function RequestUser({code}) {

    const [user, setUser] = useState({})

    const requestURL = 'http://localhost:3001/api/v1/user'
    const header = {
        "content-type": "application/json",
        accept: "application/json",
    }

    useEffect(() => {
        console.log('code', code)
        console.log('head', header)
        fetch(requestURL, {
            method: "POST",
            headers: header,
            body: JSON.stringify({ code })
        })
        .then(res => res.json())
        .then(data => {
            console.log('fetching', data)
            setUser(data)
        })
    }, [])

    return (
        <UserConsumer user={user}>
            {({ user }) => {
                return (
                    <DashContainer user={user}/>
                )
            }}
        </UserConsumer>
    )
}

export default RequestUser;
