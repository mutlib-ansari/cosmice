import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import icon from '../../assets/images/navbar/logo.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";





const Footer = () => {
    return (
        <footer className="footer py-5">
            <div className="container py-5">
                <div className="row text-white">
                    <div className="col-md-3 footer-contact-info ">
                        <h3> Contact Info</h3>
                        <p> <IoCallOutline className='icons' /> Call: + (97) 1234-567-891</p>
                        <p> <MdOutlineMail className='icons' />Email: youremail@gmail.com</p>
                        <p> <CiLocationOn className='icons' />Address: Plaza XYZ Street, XYZ City, XYZ</p>
                    </div>
                    <div className="col-md-3 footer-quick-links">
                        <h3>Quick Links</h3>
                        <ul className='links'>
                            <li> <FaStar className='stars' />About Us</li>
                            <li> <FaStar className='stars' />Services</li>
                            <li> <FaStar className='stars' />Blogs</li>
                            <li> <FaStar className='stars' />Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-recent-posts">
                        <h3>Recent Posts</h3>
                        <ul className='posts'>
                            <li>Crystal for Each Zodiac Sign</li>
                            <li>When Virgo Season Arrives?</li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-newsletter">
                        <h3>SING-UP FOR OUR NEWLETTERS</h3>
                        <form className='form'>
                            <input type="email" placeholder="Enter email address" />
                            <Button type="submit" className='Button2'> Subscribe</Button>

                        </form>
                        <p>We promise not to spam you :)</p>
                    </div>
                    <div className="col-md-12 footer-copyright">
                        <ul className='copy'>
                            <li><img src={icon} /></li>
                            <li>
                                Copyright © 2023 AstralVue By Evonicmedia. All Rights Reserved ...................................................... follow us</li>
                            <li className=''><a><FaFacebookF /> </a><a><FaTwitter /></a> <a ><FaInstagram /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;