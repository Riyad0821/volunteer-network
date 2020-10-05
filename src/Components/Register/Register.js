import React from 'react';
import logo from '../../Resource/logos/Group 1329.png';
import './Register.css'

const Register = () => {
    return (
        <div>
            <div className="logo-container">
                <img
                    src={logo}
                    width="200"
                    height="60"
                    className="logo"
                    alt="Volunteer Network Logo"
                />
            </div>
            <div className="card register-card">
                <h2 className="bold-text">Register as a Volunteer</h2>
                <form action="">
                    <input type="text"  placeholder="Full Name" className="input-box"/>
                    <input type="text"  placeholder="Username or Email" className="input-box"/>
                    <input type="text"  placeholder="Date" className="input-box"/>
                    <input type="text"  placeholder="Dscription" className="input-box"/>
                    <input type="text"  placeholder="Organize books at the library" className="input-box"/>
                    <button className="reg-button">Registration</button>
                </form>
            </div>
        </div>
    );
};

export default Register;