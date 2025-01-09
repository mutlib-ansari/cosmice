import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { IoIosStar } from "react-icons/io";
import img1 from '../../assets/images/products/img1.jpg'
import './Products.css'
import book1 from "../../assets/images/products/book1.jpg"
import book2 from "../../assets/images/products/book2.jpg"
import book3 from "../../assets/images/products/book3.jpg"
import Card from 'react-bootstrap/Card';

function Products() {
    return (
        <Container>
            <Row className=' py-5'>
                <Col className="col-md-4">
                    <img src={img1} className='img1'/>




                </Col>

                <Col className="col-md-8">
                    <div>
                        <ul className='product-list  text-white '>
                            <li className=' products-text col-md-6'><span>LATEST EDITIONS</span>
                                <h1>Best Books Form Our Authors</h1>
                            </li>
                            <li className='products-text col-md-6'><p>Lorem ipsum dolor sit amet, consectetur Ui adipiscing elit, sed do eiusmod tempor.</p>
                                <Button className='Button'><IoIosStar /> Read more</Button>
                            </li>
                        </ul>

                        <div className='product-list g-5 text-white'>
                            <div className='product-item col-md-4'>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={book1} />
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text className='text-white'>
                                        stories from the stars
                                        jason herring
                                        </Card.Text>
                                        <span className='price'>$65</span>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='product-item col-md-4'>
                                <Card style={{ width: '20rem' }} className='card'>
                                    <Card.Img variant="top" src={book2} />
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text className='text-white'>
                                        stories from the stars
                                        jason herring
                                        </Card.Text>
                                        <span className='price'>$65</span>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='product-item col-md-4'>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={book3} />
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text className='text-white'>
                                        stories from the stars
                                        jason herring
                                        </Card.Text>
                                        <span className='price'>$65</span>

                                    </Card.Body>
                                </Card>
                            </div>

                        </div>


                    </div>


                </Col>


            </Row>




        </Container>
    )
}

export default Products