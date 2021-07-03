import React, { useState, useEffect } from 'react'
import NavPrivate from '../components/NavPrivate'
import Dashboard from '../components/Dashboard'
import { UserConsumer } from '../UserContext'

function DashContainer() {

    return (
        <>
            <Dashboard/>
        </>
    )
}
export default DashContainer;
