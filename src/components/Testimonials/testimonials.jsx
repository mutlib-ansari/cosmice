// import React from 'react';
// import Slider from 'react-slick';
// import './testimonials.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function Testimonials() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };

//     return (
//         <div className="testimonial container">
//             <Slider {...settings}>
//                 <div className="testimonial-slide">
//                     <div className="testimonial-content">
//                         <img src="https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/young-caucasian-businessman-looking-camera-serious-2022-03-16-00-23-07-utc-1.png" alt="Testimonial 1" className="testimonial-image" />
//                         <p className="testimonial-text">I came to consultation, because I was puzzled with current life situation and Astral gave me clear ways to develop, and a plan of how to move ahead to avoid further problems. Some things she said became a much-needed insight for me.</p>
//                         <div className="testimonial-footer">
//                         <h1 className="testimonial-author">david parker - astrologer</h1>
//                             <span className="testimonial-date">Date 1</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="testimonial-slide">
//                     <div className="testimonial-content">
//                         <img src="https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/portrait-of-young-new-workers-facing-serious-at-ca-2022-05-08-22-15-18-utc-1.png" alt="Testimonial 2" className="testimonial-image" />
//                         <p className="testimonial-text">I came to consultation, because I was puzzled with current life situation and Astral gave me clear ways to develop, and a plan of how to move ahead to avoid further problems. Some things she said became a much-needed insight for me.</p>
//                         <div className="testimonial-footer">
//                         <h1 className="testimonial-author">david parker - astrologer</h1>
//                             <span className="testimonial-date">Date 2</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="testimonial-slide">
//                     <div className="testimonial-content">
//                         <img src="https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/attractive-female-in-garden-2022-03-04-06-07-32-utc-1.png" alt="Testimonial 2" className="testimonial-image" />
//                         <p className="testimonial-text">I came to consultation, because I was puzzled with current life situation and Astral gave me clear ways to develop, and a plan of how to move ahead to avoid further problems. Some things she said became a much-needed insight for me.</p>
//                         <div className="testimonial-footer">
//                         <h1 className="testimonial-author">david parker - astrologer</h1>
//                             <span className="testimonial-date">Date 2</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="testimonial-slide">
//                     <div className="testimonial-content">
//                         <img src="https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/confidently-posed-female-model-with-wavy-hair-red-2023-07-04-18-20-05-utc-1.png" alt="Testimonial 2" className="testimonial-image" />
//                         <p className="testimonial-text">I came to consultation, because I was puzzled with current life situation and Astral gave me clear ways to develop, and a plan of how to move ahead to avoid further problems. Some things she said became a much-needed insight for me.</p>
//                         <div className="testimonial-footer">
//                             <h1 className="testimonial-author">david parker - astrologer</h1>

//                             <span className="testimonial-date">Date 2</span>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Add more slides as needed */}
//             </Slider>
//         </div>
//     );
// }

// export default Testimonials;

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './testimonials.css';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='container'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src='https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/attractive-female-in-garden-2022-03-04-06-07-32-utc-1.png' text="Second slide" className=' images' />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/attractive-female-in-garden-2022-03-04-06-07-32-utc-1.png' text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/attractive-female-in-garden-2022-03-04-06-07-32-utc-1.png' text="Second slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default ControlledCarousel;
