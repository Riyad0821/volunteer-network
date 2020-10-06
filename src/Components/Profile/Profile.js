import React, { useState } from 'react';
import './Profile.css';
import { Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Resource/logos/Group 1329.png';
import AddedActivity from '../AddedActivity/AddedActivity';

const Profile = () => {
    const [activities, setActivities] = useState([]);
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
            <div>
                <AddedActivity></AddedActivity>
            </div>
        </div>
    );
};

export default Profile;