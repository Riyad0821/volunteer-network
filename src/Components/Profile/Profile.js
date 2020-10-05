import React from 'react';
import './Profile.css';
import { Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Resource/logos/Group 1329.png';

const Profile = () => {
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
            <div className="activity-container">
                <div>
                <img className="service-img" src={logo} alt=""/>
                </div>
                <div>
                <h3 className="title">Humanity More</h3>
                </div>
                <div>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;