import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { IoIosStar } from "react-icons/io";
import img1 from '../../assets/images/products/img1.jpg'
import './Products.css'

function Products() {
  return (
    <Container>
      <Row>
        <Col className="col-md-4">
        <img src={img1}/>
        
        
        
        
        </Col>

        <Col className="col-md-8">
        <div>
            <ul className='product-list g-5 text-white '>
                <li className='w-75'><span>LATEST EDITIONS</span>
                <h1>Best Books Form Our Authors</h1>
                </li>
                <li><p>Lorem ipsum dolor sit amet, consectetur Ui adipiscing elit, sed do eiusmod tempor.</p>
                <Button className='Button'><IoIosStar /> Read more</Button>
                </li>
            </ul>
            <div></div>
            <ul className='product-list g-5 text-white'>
                <li className='product-item'>
                    <img src={img1} alt="Product 1" />
                    <p>Product 1 description</p>
                    <span className='price'>$65</span>
                </li>
                <li className='product-item'>
                    <img src={img1} alt="Product 2" />
                    <p>Product 2 description</p>
                    <span className='price'>$65</span>
                </li>
                <li className='product-item'>
                    <img src={img1} alt="Product 3" />
                    <p>Product 3 description</p>
                    <span className='price'>$65</span>
                </li>
            </ul>


        </div>


        </Col>


      </Row>




      </Container>
  )
}

export default Products