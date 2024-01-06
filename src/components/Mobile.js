import React from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './Mobile.css'

import Image2 from './images/product-item1.jpg'
import Image5 from './images/product-item2.jpg'
import Image6 from './images/product-item3.jpg'
import Image4 from './images/product-item4.jpg'


const MobileComponent = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        
        swipeToSlide: true,
        responsive: [
           
         {
            breakpoint:768,
            settings:{
                slidesToShow:2
            }
           }
        ]    
      };

    return(
        <section id="mobile-products" className="product-store 
        position-relative padding-large pt-5">
            <div className="container">
                <div className="row">
                    <div className="display-header d-flex
                    jusyify-content-between pb-3">
                        <h2 className="display-7 text-dark 
                        text-uppercase"> Mobile Products </h2>
                        <div className="btn-right">
                            <a href="#" className="btn btn medium
                            btn-normal text-uppercase">Go to store</a>
                        </div>
                    </div>
                        <Slider {...settings}>
                            <div className="swiper-slide">
                                <div className="container">
                                
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src={Image2} alt="phone1" className="img-fluid" />
                                             <a href="#" className="button">
                                                    Add to cart
                                             </a> 

                                        </div>
                                       
                                            
                                        <div className="card-detail d-flex justify-content-between
                                        align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#"> Iphone 13</a>
                                            </h3>
                                          
                                            <span className="item-price text-primary">$1100</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                             <div className="swiper-slide">
                                <div className="container">
                                
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src={Image4} alt="phone1" className="img-fluid" />
                                             <a href="#" className="button">
                                                    Add to cart
                                             </a> 

                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                                
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between
                                        align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#"> Iphone 11</a>
                                            </h3>
                                            <span className="item-price text-primary">$1100</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper-slide">
                                <div className="container">
                                
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src={Image5} alt="phone1" className="img-fluid" />
                                             <a href="#" className="button">
                                                    Add to cart
                                             </a>

                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                               
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between
                                        align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#"> Iphone 11</a>
                                            </h3>
                                            <span className="item-price text-primary">$1100</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper-slide">
                                <div className="container">
                                
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src={Image6} alt="phone1" className="img-fluid" />
                                             <a href="#" className="button">
                                                    Add to cart
                                             </a>

                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                               
                                            </div>
                                        </div>
                                        <div className="card-detail">
                                            <h3 className="card-title text-uppercase text-warning">
                                                <a href="#"> Iphone 11</a>
                                            </h3>
                                            <span className="item-price text-primary">$1100</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                             
  

                            

                        </Slider>
                </div>
            </div>

        </section>
    )
}

export default MobileComponent