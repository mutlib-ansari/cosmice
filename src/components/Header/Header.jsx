import React from "react";
import { Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";
import '../Header/header.css';

import logo from '../../assets/images/navbar/logo.png';

const Header = () => {
    return (
        <section className="headerSection">
            <Container>
                <Row>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home" className=" logo d-lg-none align-items-start ">
                            <img
                                src={logo}
                                height="40"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home" className="hoverr ">Home</Nav.Link>
                                <Nav.Link href="#about" className=" hoverr ">About</Nav.Link>
                                <Nav.Link href="#services" className="hoverr">Services</Nav.Link>
                            </Nav>
                            
                            <Navbar.Brand href="#home" className="mx-auto logo d-none d-lg-block">
                                <img
                                    src={logo}
                                    height="60"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />
                            </Navbar.Brand>
                           
                            <Nav className="ms-auto">
                                <Nav.Link href="#blog" className="hoverr">Blog</Nav.Link>
                                <Nav.Link href="#shop" className="hoverr">Shop</Nav.Link>
                                <NavDropdown title={<span className="hoverr">Pages <i className="fa fa-caret-down"></i></span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Page 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Page 2</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Page 3</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </section>
    )
}

export default Header