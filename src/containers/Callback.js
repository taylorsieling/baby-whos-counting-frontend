import React, { useState, useEffect } from 'react'
import Login from './Login'

import { userContext } from '../userContext'
import RequestUser from '../containers/RequestUser'
import { Redirect } from 'react-router-dom'

function Callback(props) {

    const [code, setCode] = useState("")

    useEffect(() => {
        setCode(props.location.search.split("?code=")[1])
        console.log('callback code', code)
    }, [])

 

    return (
        <>
        {code ? <RequestUser code={code}/> : <Login />}
        </>
    )
}

export default Callback;