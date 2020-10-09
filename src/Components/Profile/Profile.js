import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Resource/logos/Group 1329.png';
import AddedActivity from '../AddedActivity/AddedActivity';
import {  UserContext } from '../../App';
import { useHistory } from 'react-router-dom';

const Profile = () => {
    const history = useHistory();
    const [ enrolled, setEnrolled] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://fast-brushlands-49939.herokuapp.com/profile?email=' + loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            setEnrolled(data);
        })
    }, [])

    function handleRemoveEvent(id){
        fetch('https://fast-brushlands-49939.herokuapp.com/admin?_id=' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Cancelled successfully!');
                history.push('/profile');
                
            }
        })
    }
    
    return (
        <div>
            <div>
            <Navbar className="justify-content-between nav-bar profile-nav" variant="light">
                <Navbar.Brand href="home">
                    <img
                        src={logo}
                        width="200"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Form inline className="header-item">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="features">Donation</Nav.Link>
                    <Nav.Link href="pricing">Events</Nav.Link>
                    <Nav.Link href="blog">Blog</Nav.Link>
                    <Nav.Link href="profile">Mohammad Riyad</Nav.Link>
                </Form>
            </Navbar>
            </div>
            <div className="service-list">
                {
                    enrolled.map(enrolled => <AddedActivity handleRemoveEvent={handleRemoveEvent} enrolled={enrolled} key={enrolled._id}></AddedActivity>)
                }
            </div>
        </div>
    );
};

export default Profile;