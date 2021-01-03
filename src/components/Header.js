import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FormattedMessage } from "react-intl";
import { Context } from './Wrapper';
import '../stylesheets/Header.scss';


const Header = () => {

    const context = useContext(Context);

    return (
        <Navbar className="header" variant="dark" expand="lg">
            <div className="row row-brand">
                <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                <Navbar.Brand href="">
                    <select value={context.locale} onChange={context.selectLang}>
                        <option value="fr-FR">Fr</option>
                        <option value="en-US">En</option>
                    </select>
                </Navbar.Brand>

            </div>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home" disabled>
                        <FormattedMessage
                            id="header.home"
                            defaultMessage="Accueil"
                        />
                    </Nav.Link>
                    <Nav.Link href="#projects" disabled>
                        <FormattedMessage
                            id="header.projects"
                            defaultMessage="Projets"
                        />
                    </Nav.Link>
                    <Nav.Link href="/contact" disabled >
                        <FormattedMessage
                            id="header.contact"
                            defaultMessage="Contact"
                        />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
