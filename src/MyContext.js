import React, { useState, useEffect } from 'react'

const MyContext = React.createContext();
export default MyContext;

function MyProvider(props) {
    const [albums, setAlbums] = useState([])

    return <MyContext.Provider value={{ albums: albums}}>
        {props.children}
    </MyContext.Provider>
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }

