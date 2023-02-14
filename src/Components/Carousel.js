import React from 'react';
import Slider from "react-slick";
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
        <div>
             <h3 className='slider-container'>
                 <img className="slide-img" src="./images/slide1.jpg" alt="" />
             </h3>
         </div>
         <div>
             <h3 className='slider-container'>
                 <img className="slide-img" src="./images/slide2.jpg" alt="" />
             </h3>
         </div>
         <div>
             <h3 className='slider-container'>
                 <img className="slide-img" src="./images/slide3.jpg" alt="" />
             </h3>
         </div>
       
     </Slider>
      );
}

export default Carousel;
