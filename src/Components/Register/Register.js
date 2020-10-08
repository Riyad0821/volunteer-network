import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Resource/logos/Group 1329.png';
import './Register.css'

const Register = () => {
    const history = useHistory();
    const { serviceType } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const registrationDetails = {...data};
        fetch('http://localhost:5000/addRegistration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registrationDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Registration completed successfully!');
                history.push('/profile');
            }
        })
    };
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
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" className="input-box" />
                    {errors.name && <span className="error">Name is required</span>}
                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" className="input-box" />
                    {errors.name && <span className="error">Email is required</span>}

                    <input name="date" ref={register({ required: true })} placeholder="Date" className="input-box" />
                    {errors.name && <span className="error">Date is required</span>}
                    <input name="description" ref={register({ required: true })} placeholder="Description" className="input-box" />
                    {errors.name && <span className="error">Description is required</span>}
                    <input name="serviceType" defaultValue={serviceType} ref={register({ required: true })} placeholder="serviceType" className="input-box" />
                    {errors.name && <span className="error">Volunteer activity name is required</span>}
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Register;