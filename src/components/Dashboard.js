import React, { useContext } from 'react'
import UserContext, { UserConsumer } from '../UserContext';

function Dashboard() {
    const {user} = useContext(UserContext)
    return (
        <UserConsumer>
        <div>
            <h1>DASHBOARD</h1>
            <h2>{user.username}</h2>
        </div>
        </UserConsumer>
    )
}

export default Dashboard;