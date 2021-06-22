import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = {
    width: '150px',
    padding: '15px',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'white',
}

const Navigation = () => {
    return (
        <div className="App-Nav">
            <NavLink
                to="/login"
                exact
                style={navbar}
                activeStyle={{
                    textdecoration: 'underline',
                    fontWeight: 'bold',
                    color: '#bdd1c5'
                }}
            > login
            </NavLink>
            
            <NavLink
                to="/signup"
                exact
                style={navbar}
                activeStyle={{
                    textdecoration: 'underline',
                    fontWeight: 'bold',
                    color: '#bdd1c5'
                }}
            > signup
            </NavLink>

            <NavLink
                to="/signup"
                exact
                style={navbar}
                activeStyle={{
                    textdecoration: 'underline',
                    fontWeight: 'bold',
                    color: '#bdd1c5'
                }}
            > faq
            </NavLink>
            
        </div>
        
    )
}

export default Navigation;
