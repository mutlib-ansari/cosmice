import React from "react";
import { Container, Row, Col, Form as BootstrapForm } from "react-bootstrap";
import "./home.css";
import Mainslider from "../../components/Mainslider/Mainslider";
import Dasbord from "../../components/Dasbord/Dasbord";
import Ourservices from "../Ourservices/Ourservices";
import Products from "../Products/Products";
import Elemantorbox from "../Elementorbox/Elemantorbox";
import Form from "../../components/Form/Form"
import Testimonials from "../../components/Testimonials/testimonials";
import Footer from "../../components/Footer/Footer";


const Home = () => {

  return (
    <><div className="home">
      <Mainslider />
      <Dasbord />
      <Ourservices />
      <Products />
      <Elemantorbox/>
      <Form />
      <Testimonials />
      <Footer />
      

      </div>
    </>
  );
};

export default Home;
