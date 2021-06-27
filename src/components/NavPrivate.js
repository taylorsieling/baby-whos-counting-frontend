import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = {
    width: '150px',
    padding: '15px',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'white',
}

const NavPrivate = () => {
    return (
        <div className="App-nav">
            <NavLink
                to="/dashboard"
                exact
                style={navbar}
                activeStyle={{
                    textDecoration: 'underline',
                    fontWeight: 'bold',
                }}
            > dashboard
            </NavLink>
            
            <NavLink
                to="/scoring"
                exact
                style={navbar}
                activeStyle={{
                    textDecoration: 'underline',
                    fontWeight: 'bold',
                }}
            > scoring
            </NavLink>

            <NavLink
                to="/about"
                exact
                style={navbar}
                activeStyle={{
                    textDecoration: 'underline',
                    fontWeight: 'bold',
                }}
            > about
            </NavLink>
            
        </div>
        
    )
}

export default NavPrivate;
