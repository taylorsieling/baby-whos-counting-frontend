import React from 'react'

export const LoginForm = () => {
    return (
        <div className="form-parent">
            <div className="login-form">
                <h2><i>login with email</i></h2>
                <form onSubmit="{props.handleSubmit}">
                    <input type="text" id="email" className="text-input" placeholder="email"></input><br/>
                    <input type="password" id="password" className="text-input" placeholder="password"></input>
                </form>
            </div>
            <hr/>
            <div className="form-parent">
                <h2><i>login with google | login with spotify</i></h2>
            </div>
        </div>
    )
}
