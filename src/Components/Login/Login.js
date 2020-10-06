import React, { useContext, useState } from 'react';
import logo from '../../Resource/logos/Group 1329.png';
import googleLogo from '../../Resource/logos/google.png';
import './Login.css';
import {  handleGoogleSignIn, handleSignOut, initializeLoginFramework } from './LoginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

const [newUser, setNewUser] = useState(false);
const [user, setUser] = useState({
  isSignedIn: false,
  name: '',
  email: '',
  password: '',
  photo: ''
})
initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/"} };

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
    }

const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
        handleResponse(res, true)
    })
}
const signOut = () =>{
    handleSignOut()
    .then(res => {
        handleResponse(res, false)
    })
  }

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
                <button className="login-google" onClick={googleSignIn}><img className="gLogo" src={googleLogo} height="35" alt=""/>Continue With Google</button>
                <button className="alt-btn">Don't have an account?<span className="color-text">Create an account</span></button>
            </div>
        </div>
    );
};

export default Login;