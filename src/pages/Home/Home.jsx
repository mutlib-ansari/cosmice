import React from "react";
import { Container, Row, Col,  } from "react-bootstrap";
import "./home.css";


const Home = () => {

  return (
    <>
      <section className="call_us">
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h5 className="title">CALL TO ACTION</h5>
              <h2 className="heading">
                READY FOR UNFORGATABLE TRAVEL. REMEMBER US!
              </h2>
              <p className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
            </Col>
            <Col md="4" className="text-center mt-3 mt-md-0">
              <a
                href="tel:6398312365"
                className="secondary_btn bounce"
                rel="no"
              >
                {" "}
                Contact Us !
              </a>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>
    </>
  );
};

export default Home;
