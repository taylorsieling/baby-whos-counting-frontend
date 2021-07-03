import React, { useState, useEffect } from 'react'

const MyContext = React.createContext();
export default MyContext;

function MyProvider(props) {
    const [token, setToken] = useState([])

    return <MyContext.Provider value={{ token: token }}>
        {props.children}
    </MyContext.Provider>
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }

