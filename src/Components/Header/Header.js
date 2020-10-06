import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Resource/logos/Group 1329.png';

const Header = () => {
    return (
        <div>
            <Navbar className="justify-content-between nav-bar" variant="light">
                <Navbar.Brand href="home">
                    <img
                        src={logo}
                        width="200"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Form inline className="header-items">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="login">Donation</Nav.Link>
                    <Nav.Link href="profile">Events</Nav.Link>
                    <Nav.Link href="register">Blog</Nav.Link>
                </Form>
                <Form inline>
                    <Button className="header-button" type="submit">Register</Button>
                    <Button className="header-button" variant="dark" type="submit">Admin</Button>
                </Form>
            </Navbar>
            <div className="below-navbar ">
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <br />
                <Form inline className="search-form ">
                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default Header;