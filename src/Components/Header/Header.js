import React from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar className="justify-content-between" variant="light">
                <Form inline className="header-items">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Donation</Nav.Link>
                    <Nav.Link href="#pricing">Events</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                </Form>
                <Form inline>
                    <Button className="header-button" type="submit">Register</Button>
                    <Button className="header-button" variant="dark" type="submit">Admin</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;