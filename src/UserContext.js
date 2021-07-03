import React, { useState } from "react"

const UserContext = React.createContext();
export default UserContext;

const UserConsumer = UserContext.Consumer

function UserProvider ({children}) {

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserConsumer, UserProvider };