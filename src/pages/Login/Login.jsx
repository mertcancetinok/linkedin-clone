import React from 'react';
import logo from '../../logo.png';
import "./Login.css";

function Login(props) {

    const register = () => {}
    const loginToApp = () => {}


    return (
        <div className="login">
            <img src={logo} alt='linkedin'/>

            <form>
                <input placeholder="Full name (required if registering)" type="text"/>
                <input placeholder="Profile pic URL (optional)" type="text"/>
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password"/>
                <button onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?
            <span className="login__register" onClick={register}>Register Now</span>
            </p>

        </div>
    );
}

export default Login;