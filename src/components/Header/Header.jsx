import React from "react";
import { Container, Row, Navbar, Offcanvas, Nav, NavDropdown } from "react-bootstrap";
import '../Header/header.css';


const Header = () => {
    return(
        <section className="headerSection">
            <Container>
                <Row>
                    <Navbar expand='lg' className="">
                        <Navbar.Brand href="#">
                         sdjfnjsdf
                        </Navbar.Brand> 
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement="start" className='innerHead'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={'offcanvasNavbarLabel-expand-lg'}>
                                dsfsdf
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-lg`}>
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Navbar>
                </Row>
            </Container>
        </section>
    )
}

export default Header