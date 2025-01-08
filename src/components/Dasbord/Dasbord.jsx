import React from 'react';
import './Dasbord.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../assets/images/slider/img4.jpg";
import img2 from "../../assets/images/slider/img5.jpg";
import img3 from "../../assets/images/slider/img6.jpg";
import Button from 'react-bootstrap/Button';
import { IoIosStar } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";



function Dasbord() {


    return (
        <div className='background-color'>
            <div className="container Dasbord-c max-w-[1280px] mx-auto">
                <div className='row'>
                    <div className="col-md-6">
                        <div className="bg">
                            <div className="slide2">
                                <Carousel fade controls={false}>
                                    <Carousel.Item>
                                        <img src={img1} />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={img2} />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={img3} />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content">
                            <span>Know About</span>
                            <h1>discover everything yourself with astralVue</h1>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt.</p>
                            <Button className='Button'><IoIosStar /> Read more</Button>
                            <div className='iner-box' >
                                <span className='icon'><LuPhoneCall className='iner-icon border' style={{ fontSize: '70px' }} /></span>
                                <div className='iner-box-text'>
                                    <h6>Contact Our Expert Astrologers</h6>
                                    <p>+ (97) 2800-214-968</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dasbord;
