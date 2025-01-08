import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import "./home.css";
import Mainslider from "../../components/Mainslider/Mainslider";
import Dasbord from "../../components/Dasbord/Dasbord";
import Ourservices from "../Ourservices/Ourservices";


const Home = () => {

  return (
    <><div className="home">
      <Mainslider />
      <Dasbord />

      <Ourservices />

      </div>
    </>
  );
};

export default Home;
