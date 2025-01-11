import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import img from "../../assets/images/elementorbox/handimg.jpg"
import 'animate.css';
import './elementorbox.css'
import { CiLocationOn } from "react-icons/ci";
import { SiClockify } from "react-icons/si";



function Elemantorbox() {
    return (
        <div style={{
            backgroundImage: "linear-gradient(rgba(255, 192, 203, 0.5), rgb(180, 20, 100)), url('https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/fantasy-planet-in-space-abstract-background-2023-03-15-17-12-12-utc-2-1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            width: '100%',
        }} className='bg'>
            <Container> 
                <Row className='elementor'>
                    <Col className='col-md-7 elementor1 '>
                        <div className=" text-center my-4">
                            <img
                                loading="lazy"
                                decoding="async"
                                width="702"
                                height="570"
                                src="https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/a-woman-fortuneteller-tells-a-man-on-tarot-cards-2023-01-25-13-02-09-utc-1-2.jpg"
                                className="img-fluid animate__animated animate__bounce" // img-fluid for responsiveness, and animation class if needed
                                alt="A woman fortune teller with tarot cards"
                            />
                        </div>
                    </Col>
                    <Col className='col-md-5 elementor2'>
                        <div className='elementor-text py-5'>
                            <span>Just Make an Appointment & You’re Done!</span>
                            <h2>opening hours</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
                            <ul className="list-unstyled py-5">
                                <li className="d-flex align-items-center mb-3 text-white">
                                   <CiLocationOn className="me-5  " style={{ fontSize: '3rem' }} />
                                    <div>
                                        <h5 className="mb-0 sizee">
                                        Monday to Thursday</h5>
                                        <p className="mb-0 sizee">9:30 am - 6:30 pm</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center mb-3 text-white">
                                <SiClockify className="me-5 " style={{ fontSize: '3rem' }} />
                                    <div>
                                        <h5 className="mb-0 sizee">Opening Hours</h5>
                                        <p className="mb-0 sizee">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Elemantorbox