import React, { useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Resource/logos/Group 1329.png';
import './Register.css'

const Register = () => {
    const { serviceType } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const history = useHistory();
    // const handleRegister = () => {
    //     history.pushState(`/profile`);
    // }
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
                <form action="" >
                    <input type="text"  value={loggedInUser.name} className="input-box"/>
                    <input type="text"  value={loggedInUser.email}  className="input-box"/>
                    <input type="text"  placeholder="Date" className="input-box"/>
                    <input type="text"  placeholder="Description" className="input-box"/>
                    <input type="text"  value={serviceType} className="input-box"/>
                    <Link to={`/profile`}><button className="reg-button">Registration</button></Link>
                </form>
            </div>
        </div>
    );
};

export default Register;