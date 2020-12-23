import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar className="header" variant="dark" expand="lg">
            <div className="row row-brand">
                <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                <Navbar.Brand href="">🏴‍☠️</Navbar.Brand>
            </div>

            {/* <NavDropdown title="" id="basic-nav-dropdown">
                <NavDropdown.Item href="">🇯🇵</NavDropdown.Item>
            </NavDropdown> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="#tp">Projet</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
