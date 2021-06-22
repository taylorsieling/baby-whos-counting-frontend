import React from 'react'

export const LoginForm = () => {
    return (
        <div className="form-parent">
            <div className="login-form">
                <form onSubmit="{props.handleSubmit}">
                    <input type="text" id="email" className="text-input" placeholder="email"></input><br/>
                    <input type="password" id="password" className="text-input" placeholder="password"></input>
                </form>
            </div>
            <hr/>
        </div>
    )
}
