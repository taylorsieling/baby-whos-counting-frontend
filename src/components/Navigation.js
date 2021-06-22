import React from 'react'

const Navigation = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={navbar}
                activeStyle={{
                    textdecoration: 'underline',
                    fontWeight: 'bold',
                    color: '#bdd1c5'
                }}
            >
            login
            </NavLink>
        </div>
    )
}

export default Navigation;
