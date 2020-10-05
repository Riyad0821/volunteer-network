import React from 'react';
import logo from '../../Resource/logos/Group 1329.png';
import googleLogo from '../../Resource/logos/google.png';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="logo-container">
                <img
                    src={logo}
                    width="200"
                    height="60"
                    className="logo"
                    alt="React Bootstrap logo"
                />
            </div>
            <div className="card login-card">
                <h2 className="bold-text">Login With</h2>
                <button className="login-google"><img className="gLogo" src={googleLogo} height="35" alt=""/>Continue With Google</button>
                <button className="alt-btn">Don't have an account?<span className="color-text">Create an account</span></button>
            </div>
        </div>
    );
};

export default Login;