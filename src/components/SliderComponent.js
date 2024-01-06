import React from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './Slider.css'

import Image1 from './images/banner-image.png'

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section className=" f-section position-relative overflow-hidden ">

    <Slider {...settings}>
      

      <div className="swiper-slide">
            <div className="container">
              <div className="row d-flex flex-wrap align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1 className=" text display-2 text-uppercase text-dark pb-5">Technology Hack You Won't Get</h1>
                    <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                  </div>
                </div>
                <div className=" col-md-5">
                  <div className="image-holder">
                    <img src={Image1 } alt="banner" />
                  </div>
                </div>
              </div>
            </div>
          </div>

      <div className="swiper-slide sm-5" >
            <div className="container">
              <div className="row d-flex flex-wrap align-items-center ">
                <div className="col-md-6">
                  <div className="banner-content ">
                    <h1 className="display-2 text-uppercase   ">Our product are The best</h1>
                    <a href="shop.html" className="btn btn-medium btn-dark text-uppercase bg-dark-transparent">Shop Product</a>
                 
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="image-holder ">
                    <img src={Image1 } alt="banner" />
                  </div>
            
                </div>
              </div>
            </div>
          </div>
      
        
      
    </Slider>
    </section>
  );

}

export default SliderComponent